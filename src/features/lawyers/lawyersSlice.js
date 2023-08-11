import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getLawyer, listLawyers } from '../../graphql/queries';
import { createLawyer, updateLawyer } from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Lawyer'],
  endpoints: builder => ({
    createLawyer: builder.mutation({
      query: ({input, condition}) => ({
        document: gql`${createLawyer}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Lawyer'],
      transformResponse: data => data.createLawyer
    }),
    getLawyer: builder.query({
      query: ({ id }) => ({
        document: gql`${getLawyer}`,
        variables: { id }
      }),
      transformResponse: data => data.getLawyer,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Lawyer', id }]
    }),
    listLawyers: builder.query({
      query: ({filter, limit, nextToken}) => ({
        document: gql`${listLawyers}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['Lawyer', ...result.map(({ id }) => ({ type: 'Lawyer', id }))],
      transformResponse: data => data.listLawyers.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateLawyer: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateLawyer}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Lawyer', id: arg.id }],
      // transformResponse: data => data.updateLawyer
    })
  })
})

export const {
  useCreateLawyerMutation,
  useGetLawyerQuery,
  useListLawyersQuery,
  useUpdateLawyerMutation
} = extendedAPISlice