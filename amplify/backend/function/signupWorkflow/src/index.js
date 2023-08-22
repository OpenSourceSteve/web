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
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { default as fetch, Request } from 'node-fetch';
import {
  AdminGetUserCommand,
  AdminDisableUserCommand,
  ResendConfirmationCodeCommand,
  SignUpCommand,
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

export const createConsentMutation = /* GraphQL */ `
  mutation CreateConsent(
    $input: CreateConsentInput!
    $condition: ModelConsentConditionInput
  ) {
    createConsent(input: $input, condition: $condition) {
      id
      userID
      consentsToTermsAndConditions
      termsAndConditionsVersion
      IPAddress
      userAgent
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

// Create SES service object.
const sesClient = new SESClient({ region: AWS_REGION });


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  const { requestContext, body } = event;

  const { http } = requestContext;

  const { sourceIp, userAgent } = http;

  const { firstName, lastName, email, password, consentsToTermsAndConditions } = JSON.parse(body);

  const client = new CognitoIdentityProviderClient({ region: AWS_REGION });

  const createCognitoUser = async (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();

    const signupCommand = new SignUpCommand({
      ClientId: CLIENT_ID,
      Username: trimmedEmail,
      Password: password
    })

    const cognitoUser = await client.send(signupCommand);

    const input = {
      UserPoolId: USERPOOL_ID,
      Username: trimmedEmail
    }

    //  disable cognitoUser (re-enable upon email confirmation)
    const disableCommand = new AdminDisableUserCommand(input);

    // fire and forget
    client.send(disableCommand);

    return cognitoUser;
  }

  let cognitoUser;

  try {
    cognitoUser = await createCognitoUser(email, password);
  } catch (error) {
    if (error.name === "UsernameExistsException") {
      // NOTE: there are two *likely* scenarios here:
      // 1. user didn't confirm their account first time through sign up process
      // 2. someone is trying to create an account that already exists (maybe maliciouss, maybe not)
      // get existing user
      const adminGetUserCommand = new AdminGetUserCommand({
        Username: email,
        UserPoolId: USERPOOL_ID
      })

      const cognitoUser = await client.send(adminGetUserCommand);

      if (cognitoUser.Enabled) {
        // send email saying someone tried to create account but account already exists
        const electronicMail = new SendEmailCommand({
          Destination: {
            CcAddresses: [],
            ToAddresses: [email],
          },
          Message: {
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: "Someone is trying to register an account at EasyLegal.app with your email address."
              },
              Text: {
                Charset: "UTF-8",
                Data: "Someone is trying to register an account at EasyLegal.app with your email address.",
              },
            },
            Subject: {
              Charset: "UTF-8",
              Data: "EasyLegal.app Alert",
            },
          },
          Source: "notifications@easylegal.app",
          ReplyToAddresses: []
        })
        try {
          await sesClient.send(electronicMail)
        } catch (error) {
          console.error("SENDING MAIL:", error)
        }
        // return 201 response, don't compromise existing user's privacy by revealing publicly that account already exists
        return {
          statusCode: 201,
          body: JSON.stringify({ message: "Account created" })
        }
      } else {
        // resend confirmation code
        const resendConfirmationCodeCommand = new ResendConfirmationCodeCommand({
          ClientId: CLIENT_ID,
          Username: email,
        })

        await client.send(resendConfirmationCodeCommand)

        // pretend everything is fine
        // NOTE: if there is any discrepancy between original data submitted and presently-submitted data,
        //       original data will be kept and presently-submitted data will be discarded.  This MAY need to be changed.
        return {
          statusCode: 201,
          body: JSON.stringify({ message: "Account created" })
        }
      }
    }
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          field: "submit",
          errorMessage: "We are not accepting new customers at this time. Please try again later."
        }
      })
    };
  }

  const createAppUser = async (cognitoUser) => {
    const userVariables = {
      input: {
        cognitoID: cognitoUser.UserSub,
        owner: cognitoUser.UserSub
      }
    };

    const response = await graphqlOperation(createUserMutation, userVariables)
    const user = response.data.createUser;
    return user;
  }

  const createConsent = async (user, sourceIp, userAgent) => {
    const consentVariables = {
      input: {
        userID: user.id,
        owner: cognitoUser.UserSub,
        consentsToTermsAndConditions,
        termsAndConditionsVersion: "0.0.0",
        IPAddress: sourceIp,
        userAgent
      }
    };

    const response = await graphqlOperation(createConsentMutation, consentVariables)
    const consent = response.data.createConsent;
    return consent;
  }

  const createSignup = async (firstName, lastName, email, cognitoID, userID) => {
    const signupVariables = {
      input: {
        firstName,
        lastName,
        email,
        cognitoID,
        userID
      }
    };

    const response = await graphqlOperation(createSignupMutation, signupVariables)
    const signup = response.data.createSignup;
    return signup;
  }

  let user;

  try {
    user = await createAppUser(cognitoUser)
  } catch (error) {
    console.error("CREATING USER:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          errorMessage: "There was an error creating user."
        }
      })
    };
  }

  try {
    await createConsent(user, sourceIp, userAgent, firstName, lastName, email);
  } catch (error) {
    console.error("CREATING CONSENT:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          errorMessage: "There was an error recording consent."
        }
      })
    };
  }

  try {
    await createSignup(firstName, lastName, email, cognitoUser.UserSub, user.id);
  } catch (error) {
    console.error("CREATING SIGNUP:", error)
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: {
          errorMessage: "There was an error recording signup."
        }
      })
    }
  }

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Account created" })
  }
};