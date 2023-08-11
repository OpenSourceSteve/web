import { apiSlice } from '../api/apiSlice';
import { gql } from 'graphql-request'
import { getTask, listTasks } from '../../graphql/queries';
import { createTask, updateTask } from '../../graphql/mutations';

export const extendedAPISlice = apiSlice.injectEndpoints({
  tagTypes: ['Task'],
  endpoints: builder => ({
    createTask: builder.mutation({
      query: ({input, condition}) => ({
        document: gql`${createTask}`,
        variables: {
          input,
          condition
        }
      }),
      invalidatesTags: ['Task'],
      transformResponse: data => data.createTask
    }),
    getTask: builder.query({
      query: ({ id }) => ({
        document: gql`${getTask}`,
        variables: { id }
      }),
      transformResponse: data => {
        const task = data.getTask
        if (task.deadline === null) {
          task.deadline = ""
        }
        if (task.isVerifiedComplete) {
          task.status = "Verified Complete"
        } else if (task.isAssigneeComplete) {
          task.status = "Assignee Complete"
        } else if (task.clientID || task.lawyerID) {
          task.status = "Assigned"
        } else {
          task.status = "Unassigned"
        }
        return task
      },
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Task', id }]
    }),
    listTasks: builder.query({
      query: ({filter, limit, nextToken}) => ({
        document: gql`${listTasks}`,
        variables: {
          filter,
          limit,
          nextToken
        }
      }),
      providesTags: (result = [], error, arg) => ['Task', ...result.map(({ id }) => ({ type: 'Task', id }))],
      transformResponse: data => {
        const tasks = data.listTasks.items
        tasks.forEach(task => {
          if (task.isVerifiedComplete) {
            task.status = "Verified Complete"
          } else if (task.isAssigneeComplete) {
            task.status = "Assignee Complete"
          } else if (task.clientID || task.lawyerID) {
            task.status = "Assigned"
          } else {
            task.status = "Unassigned"
          }
        })
        return tasks
      },
      transformErrorResponse: (response, meta, arg) => {
        return meta.response
      }
    }),
    updateTask: builder.mutation({
      query: ({ input, condition }) => {
        return {
          document: gql`${updateTask}`,
          variables: {
            input,
            condition
          }
        }
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Task', id: arg.id }],
      // transformResponse: data => data.updateTask
    })
  })
})

export const {
  useCreateTaskMutation,
  useGetTaskQuery,
  useListTasksQuery,
  useUpdateTaskMutation
} = extendedAPISlice