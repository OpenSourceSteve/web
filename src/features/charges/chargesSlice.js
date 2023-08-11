import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getCharge, listCharges } from '../../graphql/queries';
import { createCharge, updateCharge } from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Charge'],
  endpoints: builder => ({
    createCharge: builder.mutation({
      query: ({input, condition}) => ({
        document: gql`${createCharge}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Charge'],
      transformResponse: data => data.createCharge
    }),
    getCharge: builder.query({
      query: ({ id }) => ({
        document: gql`${getCharge}`,
        variables: { id }
      }),
      transformResponse: data => data.getCharge,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Charge', id }]
    }),
    listCharges: builder.query({
      query: ({filter, limit, nextToken}) => ({
        document: gql`${listCharges}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['Charge', ...result.map(({ id }) => ({ type: 'Charge', id }))],
      transformResponse: data => data.listCharges.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateCharge: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateCharge}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Charge', id: arg.id }],
      // transformResponse: data => data.updateCharge
    })
  })
})

export const {
  useCreateChargeMutation,
  useGetChargeQuery,
  useListChargesQuery,
  useUpdateChargeMutation
} = extendedAPISlice