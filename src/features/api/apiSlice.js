import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

import { Auth } from 'aws-amplify';

import { getEnv } from '../../utils';

import { APIs } from '../../app/apis';

const ENV = getEnv()

const API_DOMAIN = APIs[ENV]

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({
    url: `${API_DOMAIN}/graphql`,
    prepareHeaders: async (headers, { getState }) => {
      const currentSession = await Auth.currentSession()
      const accessToken = currentSession.accessToken.jwtToken;
      if (accessToken) {
        headers.set('authorization', accessToken)
      }
      return headers
    }
  }),
  endpoints: () => ({})
})