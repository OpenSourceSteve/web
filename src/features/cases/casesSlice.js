import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getCase, listCases } from '../../graphql/queries';
import {
  createCase,
  createCaseClient,
  updateCase
} from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Case'],
  endpoints: builder => ({
    createCase: builder.mutation({
      query: ({ input, condition }) => ({
        document: gql`${createCase}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Case'],
      transformResponse: data => data.createCase
    }),
    createCaseClient: builder.mutation({
      query: ({ input, condition }) => ({
        document: gql`${createCaseClient}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Case', 'Client'],
      transformResponse: data => data.createCaseClient
    }),
    getCase: builder.query({
      query: ({ id }) => ({
        document: gql`${getCase}`,
        variables: { id }
      }),
      transformResponse: data => data.getCase,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Case', id }]
    }),
    listCases: builder.query({
      query: ({ filter, limit, nextToken }) => ({
        document: gql`${listCases}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => [
        'Case',
        ...result.map(({ id }) => ({ type: 'Case', id }))
      ],
      transformResponse: data => data.listCases.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    listCasesByClientId: builder.query({
      query: ({ filter, limit, nextToken }) => ({
        document: gql`${listCases}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['PotentialCase', ...result.map(({ id }) => ({ type: 'PotentialCase', id }))],
      transformResponse: data => data.listCases.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    // listCasesWithNumber: builder.query({
    //   query: (caseNumber) => `/cases?number=${caseNumber}`,
    //   provideTags: ['PotentialCase']
    // }),
    listCasesWithNumber: builder.query({
      query: ({ filter, limit, nextToken }) => ({
        document: gql`${listCases}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['PotentialClient', ...result.map(({ id }) => ({ type: 'PotentialClient', id }))],
      invalidatesTags: ['PotentialCase'],
      transformResponse: data => data.listCases.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateCase: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateCase}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Case', id: arg.id }],
      transformResponse: data => data.updateCase
    })
  })
})

export const {
  useCreateCaseMutation,
  useCreateCaseClientMutation,
  useGetCaseQuery,
  useListCasesQuery,
  useListCasesByClientIdQuery,
  useListCasesWithNumberQuery,
  useUpdateCaseMutation
} = extendedAPISlice