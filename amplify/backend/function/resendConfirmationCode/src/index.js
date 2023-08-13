/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	CLIENT_ID
	USERPOOL_ID
Amplify Params - DO NOT EDIT */

import {
    AdminEnableUserCommand,
    AdminDisableUserCommand,
    CognitoIdentityProviderClient,
    ResendConfirmationCodeCommand
  } from "@aws-sdk/client-cognito-identity-provider";

  const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
  const CLIENT_ID = process.env.CLIENT_ID;
  const USERPOOL_ID = process.env.USERPOOL_ID;

  /**
   * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
   */

  export const handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const { body } = event;

    const { username } = JSON.parse(body);

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

    // (perhaps temporarily) enable user (user must be enabled in order to be email verified)
    try {
      await markUserAsEnabled()
    } catch (error) {
      console.error("ENABLING USER:", error)
    }

    let codeResent

    try {

      const command = new ResendConfirmationCodeCommand({
        ClientId: CLIENT_ID,
        Username: username,
      });

      codeResent = await client.send(command);
    } catch (error) {
      console.error(`with resending confirmation code:\n${JSON.stringify(error)}`);
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: {
            field: "code",
            hasError: true,
            errorMessage: "There was an error resending your confirmation code. Please try again later."
          }
        })
      }
    }

    try {
      // re-disable user if confirmation fails
      const input = {
        UserPoolId: USERPOOL_ID,
        Username: username
      }

      const disableCommand = new AdminDisableUserCommand(input);

      await client.send(disableCommand);
    } catch (error) {
      // TODO: fire alarm somewhere
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ codeResent })
    }
  };