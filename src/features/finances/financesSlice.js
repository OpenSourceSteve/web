import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getFinance, listFinances } from '../../graphql/queries';
import { createFinance, updateFinance } from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Finances'],
  endpoints: builder => ({
    createFinance: builder.mutation({
      query: ({input, condition}) => ({
        document: gql`${createFinance}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Finance'],
      transformResponse: data => data.createFinance
    }),
    getFinance: builder.query({
      query: ({ id }) => ({
        document: gql`${getFinance}`,
        variables: { id }
      }),
      transformResponse: data => data.getFinance,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Finance', id }]
    }),
    listFinances: builder.query({
      query: ({ filter, limit, nextToken }) => ({
        document: gql`${listFinances}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => [
        'Finance',
        ...result.map(({ id }) => ({ type: 'Finance', id }))
      ],
      transformResponse: data => data.listFinances.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateFinance: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateFinance}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Finance', id: arg.id }],
      // transformResponse: data => data.updateNote
    })
  })
})

export const {
  useCreateFinanceMutation,
  useGetFinanceQuery,
  useListFinancesQuery,
  useUpdateFinanceMutation
} = extendedAPISlice