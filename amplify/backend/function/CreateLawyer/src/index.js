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
const AWS_REGION = process.env.AWS_REGION;
const ENV = process.env.ENV;
const { Sha256 } = crypto;

const sqsClient = new SQSClient({ region: AWS_REGION })
const createLawyerQueueUrl = `https://sqs.us-west-1.amazonaws.com/213993515054/CreateLawyer-${ENV}`

export const signupsByEmailQuery = /* GraphQL */ `
  query SignupsByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelSignupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    signupsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        cognitoID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;

export const createLawyerMutation = /* GraphQL */ `
  mutation CreateLawyer(
    $input: CreateLawyerInput!
    $condition: ModelLawyerConditionInput
  ) {
    createLawyer(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      barAssociation
      licenseNumber
      email
      phone
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

export const createPracticeMutation = /* GraphQL */ `
  mutation CreatePractice(
    $input: CreatePracticeInput!
    $condition: ModelPracticeConditionInput
  ) {
    createPractice(input: $input, condition: $condition) {
      id
      name
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

export const createPracticeLawyerMutation = /* GraphQL */ `
  mutation CreatePracticeLawyer(
    $input: CreatePracticeLawyerInput!
    $condition: ModelPracticeLawyerConditionInput
  ) {
    createPracticeLawyer(input: $input, condition: $condition) {
      id
      practiceId
      lawyerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;

export const deleteSignupMutation = /* GraphQL */ `
  mutation DeleteSignup(
    $input: DeleteSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    deleteSignup(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      cognitoID
      userID
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

  const { email } = bodyObj;

  // get Signup
  let signup;
  try {
    const signupsByEmailVariables = { email }

    const signups = await graphqlOperation(signupsByEmailQuery, signupsByEmailVariables)

    signup = signups.data.signupsByEmail.items[0];
  } catch (error) {
    console.error("getting signup:", error.message);
  }

  // create Practice
  let practice;
  try {
    const practiceVariables = {
      input: {
        owner: signup.cognitoID,
      }
    };

    const response = await graphqlOperation(createPracticeMutation, practiceVariables)

    practice = response.data.createPractice;
  } catch (error) {
    console.error("creating practice:", error.message);
  }

  // create Lawyer
  let lawyer;
  try {
    const { firstName, lastName, email, userID, cognitoID } = signup;

    const createLawyerVariables = {
      input: {
        firstName,
        lastName,
        email,
        userID,
        owner: cognitoID,
      }
    };

    const response = await graphqlOperation(createLawyerMutation, createLawyerVariables)

    lawyer = response.data.createLawyer;
  } catch (error) {
    console.error("creating signup:", error.message);
  }

  // create PracticeLawyer
  try {
    const practiceLawyerVariables = {
      input: {
        practiceId: practice.id,
        lawyerId: lawyer.id
      }
    }

    await graphqlOperation(createPracticeLawyerMutation, practiceLawyerVariables);
  } catch (error) {
    console.error("creating practice-lawyer:", error.message);
  }

  // delete Signup
  try {
    const { id, _version } = signup
    const deleteSignupVariables = { input: { id, _version } }

    await graphqlOperation(deleteSignupMutation, deleteSignupVariables)
  } catch (error) {
    console.error("deleting signup:", error.message);
  }

  // delete message from CreateLawyer queue
  try {
    const deleteMessageInput = {
      QueueUrl: createLawyerQueueUrl,
      ReceiptHandle: receiptHandle
    }

    const deleteMessageCommand = new DeleteMessageCommand(deleteMessageInput)

    await sqsClient.send(deleteMessageCommand)
  } catch (error) {
    console.error("deleting message from CreateLawyer queue.");
  }

  return { statusCode: 201} ;
};