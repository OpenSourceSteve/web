/* Amplify Params - DO NOT EDIT
  API_WEB_GRAPHQLAPIENDPOINTOUTPUT
  API_WEB_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_WEB_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const sesClient = new SESClient({ region: AWS_REGION });
const { Sha256 } = crypto;

const createRequest = (endpoint, query, variables) => new HttpRequest({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    host: endpoint.host
  },
  hostname: endpoint.host,
  body: JSON.stringify({ query: query, variables: variables }),
  path: endpoint.pathname
});

const adjustForTimezoneOffset = date => {
  // adjust from midnight UTC to midnight local time
  const timezoneOffset = date.getTimezoneOffset()
  let offsetMinutes = timezoneOffset % 60
  let offsetHours = Math.floor(timezoneOffset) / 60
  date.setHours(date.getHours() + offsetHours)
  date.setMinutes(date.getMinutes() + offsetMinutes)
  return date
}

export const constructDateString = date => {
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const dayOfMonth = String(date.getDate()).padStart(2, "0")
  const year = date.getFullYear()
  return `${year}-${month}-${dayOfMonth}`
}

export const listEventsQuery = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        caseID
        type
        startDatetime
        duration
        location
        link
        phone
        title
        description
        Clients {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;

const graphqlOperation = async (query, variables) => {
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const requestToBeSigned = createRequest(endpoint, query, variables)
  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) {
      statusCode = 400;
      console.error(`${statusCode} ERROR: ${JSON.stringify(body.errors)}`);
    }
  } catch (error) {
    statusCode = 500;
    console.error(`${statusCode} ERROR: ${error.message}`);
  }

  return body;
}

const listEvents = async (tomorrowStr, dayAfterTomorrowStr) => {
  const listEventsVariables = {
    filter: {
      startDatetime: {
        between: [tomorrowStr, dayAfterTomorrowStr]
      }
    }
  }
  console.log("listEventsVariables:", listEventsVariables)
  console.log(tomorrowStr, dayAfterTomorrowStr)
  const events = await graphqlOperation(listEventsQuery, listEventsVariables)
  console.log("QUERY RESULTS:", events)
  return events;

  // return events.data.events.items;
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const tomorrow = new Date();
  const dayAfterTomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
  dayAfterTomorrow.setHours(0)
  dayAfterTomorrow.setMinutes(0)
  dayAfterTomorrow.setSeconds(0);

  const tomorrowStr = adjustForTimezoneOffset(tomorrow).toISOString()
  const dayAfterTomorrowStr = adjustForTimezoneOffset(dayAfterTomorrow).toISOString()

  try {
    // const events = await listEventsByStartDatetime(tomorrowStr, dayAfterTomorrowStr)
    const events = await listEvents(tomorrowStr, dayAfterTomorrowStr)
    // events.forEach(async event => {
    console.log("EVENTS:", events.data.listEvents.items)
    // TODO: filter events on type CLIENT_MEETING and COURT_APPEARANCE
    // TODO: retrieve clients from event and then iterate the following over each client.
    // const electronicMail = new SendEmailCommand({
    //   Destination: {
    //     CcAddresses: [],
    //     ToAddresses: [email],
    //   },
    //   Message: {
    //     Body: {
    //       Html: {
    //         Charset: "UTF-8",
    //         Data: `Just a friendly reminder that you have an appointment at ${} tomorrow at ${}.`
    //       },
    //       Text: {
    //         Charset: "UTF-8",
    //         Data: `Just a friendly reminder that you have an appointment at ${} tomorrow at ${}.`
    //       },
    //     },
    //     Subject: {
    //       Charset: "UTF-8",
    //       Data: "Appointment Reminder",
    //     },
    //   },
    //   Source: "notifications@easylegal.app",
    //   ReplyToAddresses: []
    // })
    // await sesClient.send(electronicMail)
    // })
  } catch (error) {
    console.error(`sending email reminder: ${error.message}`)
  }

  return { statusCode: 200 };
};