/* Amplify Params - DO NOT EDIT
  API_WEB_GRAPHQLAPIENDPOINTOUTPUT
  API_WEB_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';
import {
  SQSClient,
  DeleteMessageCommand
} from "@aws-sdk/client-sqs";

const GRAPHQL_ENDPOINT = process.env.API_WEB_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION;
const ENV = process.env.ENV;
const createSignupQueueUrl = `https://sqs.us-west-1.amazonaws.com/213993515054/CreateSignup-${ENV}`;
const { Sha256 } = crypto;

export const createSignupMutation = /* GraphQL */ `
  mutation CreateSignup(
    $input: CreateSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    createSignup(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      userID
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  const { body, receiptHandle } = event.Records[0]
  const bodyObj = JSON.parse(body)

  const {
    firstName,
    lastName,
    email,
    cognitoID,
    userID
  } = bodyObj;

  const sqsClient = new SQSClient({ region: AWS_REGION })

  try {
    const signupVariables = {
      input: {
        firstName,
        lastName,
        email,
        cognitoID,
        userID
      }
    };

    await graphqlOperation(createSignupMutation, signupVariables)
  } catch (error) {
    console.error("creating signup:", error.message);
  }

  // delete message from queue
  try {
    const deleteMessageInput = {
      QueueUrl: createSignupQueueUrl,
      ReceiptHandle: receiptHandle
    }

    const deleteMessageCommand = new DeleteMessageCommand(deleteMessageInput)

    await sqsClient.send(deleteMessageCommand)
  } catch (error) {
    console.error("deleting message from CreateConsent queue:", error.message);
  }

  return { statusCode: 201 };
};