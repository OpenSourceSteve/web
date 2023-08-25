import {
    AdminEnableUserCommand,
    AdminGetUserCommand,
    ResendConfirmationCodeCommand,
    SignUpCommand,
    CognitoIdentityProviderClient
} from "@aws-sdk/client-cognito-identity-provider";

import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

import {
    SQSClient,
    SendMessageCommand
} from "@aws-sdk/client-sqs";

const AWS_REGION = process.env.REGION;
const CLIENT_ID = process.env.CLIENT_ID;
const USERPOOL_ID = process.env.USERPOOL_ID;
const ENV = process.env.ENV;

const cognitoClient = new CognitoIdentityProviderClient({ region: AWS_REGION });
const sesClient = new SESClient({ region: AWS_REGION });
const sqsClient = new SQSClient({ region: AWS_REGION });

const URLS = {
    createAppUserQueue: `https://sqs.us-west-1.amazonaws.com/213993515054/CreateAppUser-${ENV}`,
    adminDisableUserCommandQueue: `https://sqs.us-west-1.amazonaws.com/213993515054/AdminDisableUserCommand-${ENV}`
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
    const { requestContext, body } = event;

    const { http } = requestContext;

    const { sourceIp, userAgent } = http;

    const { firstName, lastName, email, password, consentsToTermsAndConditions } = JSON.parse(body);

    const trimmedEmail = email.trim().toLowerCase();

    let cognitoUser

    // create cognito user
    try {
        const signupCommand = new SignUpCommand({
            ClientId: CLIENT_ID,
            Username: trimmedEmail,
            Password: password
        })

        cognitoUser = await cognitoClient.send(signupCommand);
    } catch (error) {
        console.error(`creating cognito user: ${error.message}`)
        if (error.name === "UsernameExistsException") {
            // NOTE: there are two *likely* scenarios here:
            // 1. user didn't confirm their account first time through sign up process
            // 2. someone is trying to create an account that already exists (maybe malicious, maybe not)
            const adminGetUserCommand = new AdminGetUserCommand({
                Username: email,
                UserPoolId: USERPOOL_ID
            })

            const cognitoUser = await cognitoClient.send(adminGetUserCommand);

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
                // return 202 response, don't compromise existing user's privacy by revealing publicly that account already exists
                return {
                    statusCode: 202,
                    body: JSON.stringify({ message: "Account created" })
                }
            } else {
                // enable user (so that you can resend confirmation code)
                try {
                    const adminEnableUserCommand = new AdminEnableUserCommand({
                        UserPoolId: USERPOOL_ID,
                        Username: trimmedEmail
                    });

                    await cognitoClient.send(adminEnableUserCommand);
                } catch (error) {
                    console.error("enabling cognito user:", error.message)
                    return { statusCode: 400 }
                }

                // resend confirmation code
                const resendConfirmationCodeCommand = new ResendConfirmationCodeCommand({
                    ClientId: CLIENT_ID,
                    Username: email,
                })

                await cognitoClient.send(resendConfirmationCodeCommand)

                // Send user info to AdminDisableUserCommand
                try {
                    const adminDisableUserCommandInput = {
                        QueueUrl: URLS.adminDisableUserCommandQueue,
                        MessageBody: JSON.stringify({ email: trimmedEmail })
                    }
                    const adminDisableUserCommandCommand = new SendMessageCommand(adminDisableUserCommandInput)
                    await sqsClient.send(adminDisableUserCommandCommand)
                } catch (error) {
                    console.error(`sending to AdminDisableUserCommand queue: ${error.message}`)
                    return { statusCode: 400 }
                }

                // pretend everything is fine
                // NOTE: if there is any discrepancy between original data submitted and presently-submitted data,
                //       original data will be kept and presently-submitted data will be discarded.  This MAY need to be changed.
                return {
                    statusCode: 202,
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

    // Send user info to CreateAppUser
    try {
        // NOTE: JSON.stringfy can't handle ES6 object property shorthand -> define data object outside JSON.stringify
        const data = { cognitoUser, sourceIp, userAgent, firstName, lastName, email, consentsToTermsAndConditions }

        const createAppUserInput = {
            QueueUrl: URLS.createAppUserQueue,
            MessageBody: JSON.stringify(data)
        }

        const createAppUserCommand = new SendMessageCommand(createAppUserInput)

        await sqsClient.send(createAppUserCommand)
    } catch (error) {
        console.error(`sending to createAppUser queue: ${error.message}`)
        return { statusCode: 400 }
    }

    // Send user info to AdminDisableUserCommand
    try {
        const adminDisableUserCommandInput = {
            QueueUrl: URLS.adminDisableUserCommandQueue,
            MessageBody: JSON.stringify({ email: trimmedEmail })
        }
        const adminDisableUserCommandCommand = new SendMessageCommand(adminDisableUserCommandInput)
        await sqsClient.send(adminDisableUserCommandCommand)
    } catch (error) {
        console.error(`sending to AdminDisableUserCommand queue: ${error.message}`)
        return { statusCode: 400 }
    }

    return {
        statusCode: 202,
        body: JSON.stringify({ message: "Account being provisioned." })
    };
};
