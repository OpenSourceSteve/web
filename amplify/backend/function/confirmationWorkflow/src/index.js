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
  AdminEnableUserCommand,
  AdminDisableUserCommand,
  ConfirmSignUpCommand,
  CognitoIdentityProviderClient
} from "@aws-sdk/client-cognito-identity-provider";

const GRAPHQL_ENDPOINT = process.env.API_WEB_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const CLIENT_ID = process.env.CLIENT_ID;
const USERPOOL_ID = process.env.USERPOOL_ID;
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
  const { body } = event;

  const { username, code } = JSON.parse(body);

  const client = new CognitoIdentityProviderClient({ region: AWS_REGION });

  const markUserAsEnabled = async () => {
    const input = {
      UserPoolId: USERPOOL_ID,
      Username: username
    }

    //  disable cognitoUser (re-enable upon email confirmation)
    const enableCommand = new AdminEnableUserCommand(input);

    await client.send(enableCommand);
  }

  const listSignupsByEmail = async email => {
    const signupsByEmailVariables = { email }

    const signups = await graphqlOperation(signupsByEmailQuery, signupsByEmailVariables)

    return signups.data.signupsByEmail.items;
  }

  const createLawyer = async signup => {

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
    const lawyer = response.data.createLawyer;
    return lawyer;
  }

  const createPractice = async cognitoID => {
    const practiceVariables = {
      input: {
        owner: cognitoID,
      }
    };

    const response = await graphqlOperation(createPracticeMutation, practiceVariables)
    const practice = response.data.createPractice;
    return practice;
  }

  const addLawyerToPractice = async (practiceId, lawyerId) => {
    const practiceLawyerVariables = {
      input: {
        practiceId,
        lawyerId
      }
    }
    const response = await graphqlOperation(createPracticeLawyerMutation, practiceLawyerVariables);
    const practiceLawyer = response.data.createPracticeLawyer;
    return practiceLawyer;
  }

  const deleteSignup = async signup => {
    const { id, _version } = signup
    const deleteSignupVariables = { input: { id, _version } }
    const response = await graphqlOperation(deleteSignupMutation, deleteSignupVariables)
    return response;
  }

  // (perhaps temporarily) enable user (user must be enabled in order to be email verified)
  try {
    await markUserAsEnabled()
  } catch (error) {
    console.error("ENABLING USER:", error)
  }

  try {
    const command = new ConfirmSignUpCommand({
      ClientId: CLIENT_ID,
      Username: username,
      ConfirmationCode: code,
    });

    await client.send(command);
  } catch (error) {
    console.error("CONFIRMING SIGNUP:", error);

    // re-disable user if confirmation fails
    const input = {
      UserPoolId: USERPOOL_ID,
      Username: username
    }

    const disableCommand = new AdminDisableUserCommand(input);

    await client.send(disableCommand);

    if (error.name === "CodeMismatchException") {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: {
            field: "code",
            hasError: true,
            errorMessage: "Incorrect confirmation code. Please try again."
          }
        })
      }
    }
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          field: "code",
          hasError: true,
          errorMessage: "There was an error confirming your account. Please try again later."
        }
      })
    }
  }

  let signups

  try {
    signups = await listSignupsByEmail(username)
  } catch (error) {
    console.error("GETTING SIGNUP:", error)
  }

  let lawyer;

  try {
    lawyer = await createLawyer(signups[0])
  } catch (error) {
    console.error("CREATING LAWYER:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          errorMessage: "There was an error creating lawyer."
        }
      })
    };
  }

  let practice;

  try {
    practice = await createPractice(signups[0].cognitoID);
  } catch (error) {
    console.error("CREATING PRACTICE", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          errorMessage: "There was an error creating practice."
        }
      })
    };
  }

  try {
    await deleteSignup(signups[0]);
  } catch (error) {
    console.error("DELETING SIGNUP:", error)
  }

  try {
    await addLawyerToPractice(practice.id, lawyer.id)
  } catch (error) {
    console.error("ADDING LAWYER TO PRACTICE:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          field: "code",
          hasError: true,
          errorMessage: "There was an error confirming your account. Please try again later."
        }
      })
    }
  }

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Account confirmed" })
  };
};