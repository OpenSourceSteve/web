import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getClient, listClients } from '../../graphql/queries';
import { createClient, updateClient } from '../../graphql/mutations';
import { createSlice } from '@reduxjs/toolkit';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Client', 'PotentialClient'],
  endpoints: builder => ({
    createClient: builder.mutation({
      query: ({ input, condition }) => ({
        document: gql`${createClient}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Client'],
      transformResponse: data => data.createClient
    }),
    getClient: builder.query({
      query: ({ id }) => ({
        document: gql`${getClient}`,
        variables: { id }
      }),
      transformResponse: data => data.getClient,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Client', id }]
    }),
    listClients: builder.query({
      query: ({ filter, limit, nextToken }) => ({
        document: gql`${listClients}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['Client', ...result.map(({ id }) => ({ type: 'Client', id }))],
      transformResponse: data => data.listClients.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    getClientsWithName: builder.query({
      query: ({ filter, limit, nextToken }) => ({
        document: gql`${listClients}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      // providesTags: (result = [], error, arg) => ['PotentialClient', ...result.map(({ id }) => ({ type: 'PotentialClient', id }))],
      invalidatesTags: ['PotentialClient'],
      transformResponse: data => data.listClients.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateClient: builder.mutation({
      query: ({ input, condition }) => ({
        document: gql`${updateClient}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Client'],
      transformResponse: data => data.updateClient
    })
  })
})

export const {
  useCreateClientMutation,
  useGetClientQuery,
  useListClientsQuery,
  useGetClientsWithNameQuery,
  useUpdateClientMutation
} = extendedAPISlice

export const clientsSlice = createSlice({
  name: "client",
  initialState: { clientId: "" },
  reducers: {
    setClientId: (state, action) => {
      state.clientId = action.payload
    }
  }
})

export const { setClientId } = clientsSlice.actions

export const clientsReducer = clientsSlice.reducer