import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getNote, listNotes } from '../../graphql/queries';
import { createNote, updateNote } from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Note'],
  endpoints: builder => ({
    createNote: builder.mutation({
      query: ({input, condition}) => ({
        document: gql`${createNote}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Note'],
      transformResponse: data => data.createNote
    }),
    getNote: builder.query({
      query: ({ id }) => ({
        document: gql`${getNote}`,
        variables: { id }
      }),
      transformResponse: data => data.getNote,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Note', id }]
    }),
    listNotes: builder.query({
      query: ({filter, limit, nextToken}) => ({
        document: gql`${listNotes}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['Note', ...result.map(({ id }) => ({ type: 'Note', id }))],
      transformResponse: data => data.listNotes.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateNote: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateNote}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Note', id: arg.id }],
      // transformResponse: data => data.updateNote
    })
  })
})

export const {
  useCreateNoteMutation,
  useGetNoteQuery,
  useListNotesQuery,
  useUpdateNoteMutation
} = extendedAPISlice