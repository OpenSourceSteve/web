import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getEvent, listEvents } from '../../graphql/queries';
import { createEvent, updateEvent } from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Event'],
  endpoints: builder => ({
    createEvent: builder.mutation({
      query: ({input, condition}) => ({
        document: gql`${createEvent}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Event'],
      transformResponse: data => data.createEvent
    }),
    getEvent: builder.query({
      query: ({ id }) => ({
        document: gql`${getEvent}`,
        variables: { id }
      }),
      transformResponse: data => {
        const { getEvent: event} = data;
        event.link = event.link || ""
        event.startDatetime = event.startDatetime.slice(0, 16)
        return event;
      },
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Event', id }]
    }),
    listEvents: builder.query({
      query: ({filter, limit, nextToken}) => ({
        document: gql`${listEvents}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['Event', ...result.map(({ id }) => ({ type: 'Event', id }))],
      transformResponse: data => data.listEvents.items,
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateEvent: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateEvent}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Event', id: arg.id }],
      // transformResponse: data => data.updateEvent
    })
  })
})

export const {
  useCreateEventMutation,
  useGetEventQuery,
  useListEventsQuery,
  useUpdateEventMutation
} = extendedAPISlice