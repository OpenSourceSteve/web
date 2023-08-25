import {
    AdminDisableUserCommand,
    CognitoIdentityProviderClient
} from "@aws-sdk/client-cognito-identity-provider";

import {
    SQSClient,
    DeleteMessageCommand
} from "@aws-sdk/client-sqs";

const AWS_REGION = process.env.REGION;
const USERPOOL_ID = process.env.USERPOOL_ID;
const ENV = process.env.ENV;

const adminDisableUserCommandQueue = `https://sqs.us-west-1.amazonaws.com/213993515054/AdminDisableUserCommand-${ENV}`

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
    const { body, receiptHandle } = event.Records[0];
    const bodyObj = JSON.parse(body)

    // disable unverified cognito user
    try {
        const input = {
            UserPoolId: USERPOOL_ID,
            Username: bodyObj.email
        }

        const adminDisableUserCommand = new AdminDisableUserCommand(input);

        const cognitoClient = new CognitoIdentityProviderClient({ region: AWS_REGION });

        await cognitoClient.send(adminDisableUserCommand);
    } catch (error) {
        console.error("disabling cognito user:", error.message)
    }

    // delete message from queue
    try {
        const deleteMessageInput = {
            QueueUrl: adminDisableUserCommandQueue,
            ReceiptHandle: receiptHandle
        }

        const deleteMessageCommand = new DeleteMessageCommand(deleteMessageInput)

        const sqsClient = new SQSClient({ region: AWS_REGION })
        await sqsClient.send(deleteMessageCommand)
    } catch (error) {
        console.error("deleting message from AdminDisableUserCommand queue:", error.message)
    }

    return { statusCode: 200 };
};
