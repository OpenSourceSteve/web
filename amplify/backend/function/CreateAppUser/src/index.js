/* Amplify Params - DO NOT EDIT
  API_WEB_GRAPHQLAPIENDPOINTOUTPUT
  API_WEB_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
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
  SendMessageCommand,
  DeleteMessageCommand
} from "@aws-sdk/client-sqs";

const GRAPHQL_ENDPOINT = process.env.API_WEB_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION;
const ENV = process.env.ENV;
const { Sha256 } = crypto;

const sqsClient = new SQSClient({ region: AWS_REGION })

const URLS = {
  createAppUserQueue: `https://sqs.us-west-1.amazonaws.com/213993515054/CreateAppUser-${ENV}`,
  createConsentQueue: `https://sqs.us-west-1.amazonaws.com/213993515054/CreateConsent-${ENV}`,
  createSignupQueue: `https://sqs.us-west-1.amazonaws.com/213993515054/CreateSignup-${ENV}`
}

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

export const createUserMutation = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoID
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  const { body, receiptHandle } = event.Records[0]
  const bodyObj = JSON.parse(body)

  const {
    cognitoUser,
    consentsToTermsAndConditions,
    email,
    firstName,
    lastName,
    sourceIp,
    userAgent
  } = bodyObj;

  let user

  // create user in dynamoDB
  try {
    const userVariables = {
      input: {
        cognitoID: cognitoUser.UserSub,
        owner: cognitoUser.UserSub
      }
    };

    const response = await graphqlOperation(createUserMutation, userVariables)
    user = response.data.createUser;
  } catch (error) {
    console.error("creating user:", error.message);
  }

  // delete message from queue
  try {
    const deleteMessageInput = {
      QueueUrl: URLS.createAppUserQueue,
      ReceiptHandle: receiptHandle
    }

    const deleteMessageCommand = new DeleteMessageCommand(deleteMessageInput)

    await sqsClient.send(deleteMessageCommand)
  } catch (error) {
    console.error("deletiing message from CreateAppUser queue")
  }

  // Send user info to CreateConsent queue
  try {
    const createConsentInput = {
      QueueUrl: URLS.createConsentQueue,
      MessageBody: JSON.stringify({
        userID: user.id,
        owner: cognitoUser.UserSub,
        termsAndConditionsVersions: "",
        IPAddress: sourceIp,
        // NOTE: For some strange reason JSON.stringfy can't handle es6 object property shorthand, hence the redundancy below.
        consentsToTermsAndConditions: consentsToTermsAndConditions,
        userAgent: userAgent
      })
    }
    const createConsentCommand = new SendMessageCommand(createConsentInput)
    await sqsClient.send(createConsentCommand)
  } catch (error) {
    console.error(`sending to createAppUser queue: ${error.message}`)
    return { statusCode: 400 }
  }

  // Send user info to CreateSignup queue
  try {
    const createSignupInput = {
      QueueUrl: URLS.createSignupQueue,
      MessageBody: JSON.stringify({
        cognitoID: cognitoUser.UserSub,
        userID: user.id,
        // NOTE: For some strange reason JSON.stringfy can't handle es6 object property shorthand, hence the redundancy below.
        email: email,
        firstName: firstName,
        lastName: lastName,
      })
    }
    const createSignupCommand = new SendMessageCommand(createSignupInput)
    await sqsClient.send(createSignupCommand)
  } catch (error) {
    console.error(`sending to createAppUser queue: ${error.message}`)
    return { statusCode: 400 }
  }

  return { statusCode: 201 };
};