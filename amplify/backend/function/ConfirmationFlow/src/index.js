import {
    AdminEnableUserCommand,
    AdminDisableUserCommand,
    ConfirmSignUpCommand,
    CognitoIdentityProviderClient
  } from "@aws-sdk/client-cognito-identity-provider";

import {
    SQSClient,
    SendMessageCommand
} from "@aws-sdk/client-sqs";

const AWS_REGION = process.env.REGION;
const CLIENT_ID = process.env.CLIENT_ID;
const ENV = process.env.ENV;
const USERPOOL_ID = process.env.USERPOOL_ID;

const client = new CognitoIdentityProviderClient({ region: AWS_REGION });
const sqsClient = new SQSClient({ region: AWS_REGION });
const createLawyerQueueUrl = `https://sqs.us-west-1.amazonaws.com/213993515054/CreateLawyer-${ENV}`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
    const { body } = event;

    const { username, code } = JSON.parse(body);

    // enable user (so that you can confirm the account)
    try {
        const adminEnableUserCommand = new AdminEnableUserCommand({
            UserPoolId: USERPOOL_ID,
            Username: username
        });

        await client.send(adminEnableUserCommand);
    } catch (error) {
        console.error("enabling cognito user:", error.message)
        return { statusCode: 400 }
    }

    // confirm account
    try {
        const command = new ConfirmSignUpCommand({
            ClientId: CLIENT_ID,
            Username: username,
            ConfirmationCode: code,
        });

        await client.send(command);
    } catch (error) {
        console.error("confirming signup:", error.message);

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

    // send info to CreateLawyer queue
    try {
        const createLawyerInput = {
            QueueUrl: createLawyerQueueUrl,
            MessageBody: JSON.stringify({ email: username })
        }

        const createLawyerCommand = new SendMessageCommand(createLawyerInput)

        await sqsClient.send(createLawyerCommand)
    } catch (error) {
        console.error("sending data to CreateLawyer queue.")
        return { statusCode: 400 }
    }

    return {
        statusCode: 200,
        body: JSON.stringify('Account confirmed'),
    };
};
