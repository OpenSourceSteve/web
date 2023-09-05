# Welcome to EasyLegal.app

EasyLegal.app is case management software that helps attorneys keep track of clients' cases, court dates and financial accounts. In the course of representing criminal defense clients, attorneys must keep track of criminal charges, court dates, meetings with clients and others, tasks to be completed, and maintain notes for billing purposes.  EasyLegal.app lets them do all this in one place. Feel free to visit and create a temporary evaluation account at [demo.EasyLegal.app](https://demo.easylegal.app).


## How the frontend works
On the frontend, EasyLegal.app is a javascript application built using React, Redux Toolkit, RTK Query, GraphQL and Tailwind CSS. The frontend code is located in the `/src` directory of the project.

React is an open-source component library, originally created by FaceBook, for creating user interfaces (UI). React makes it easy for developers to breakdown views into their constituent pieces and then reassemble them into the final view. This makes it much easier to develop, test, style and reuse frontend components. See `/src/components` for the frontend components reused throughout this project.

Redux is an open-source library used to manage frontend application state and is designed to be predictable and easy to test and debug. Redux Toolkit is an associated library that significantly reduces the amount of boilerplate code required by Redux-managed applications. EasyLegal.app uses Redux (with Redux Toolkit) to keep track of client IDs which prevents the need for excessive prop drilling on case tab views (discussed in the `Resource CRUD` section below). RTK Query is used for fetching data from the GraphQL API and then caching it. Redux is configured in `/src/app/store.js` and RTK Query is used in all the `/src/features/[resources]/[resources]Slice.js` files.

GraphQL is a query language that you can include in your frontend code to request exactly what information the view needs from the API. EasyLegal.app uses an AWS-managed GraphQL API to fulfill these requests. This too is further discussed in the `Resource CRUD` section below.

Tailwind CSS... well thought out CSS classes

## How the backend works
On the backend, EasyLegal.app is a serverless application, built on a number of [Amazon Web Services](https://aws.amazon.com/) (AWS) mananged services. The middleware (APIs, auth, lambdas) for interacting with the AWS managed services is located in the `/amplify` directory. [Amplify](https://aws.amazon.com/amplify/) is a framework offered by AWS that makes it relatively easy to setup different services, get them configured and working with one another. I used Amplify to setup and configure about half of the backend services used in this project (authentication, lambda, the GraphQL API) while the other half (DNS, message queues, scheduling and sending of emails) I had to setup and configure myself.

### Authentication
EasyLegal.app uses AWS Cognito to authenticate and authorize users. It integrates automatically with our backend datastore, DynamoDB, so it was a natural choice.

### Data Model
The app schema is located in [schema.graphql](https://github.com/OpenSourceSteve/web/blob/dev/amplify/backend/api/web/schema.graphql). This section provides a brief, high-level explanation of what's going on from a workflow perspective.

#### Signup
When a user signs up, the user submitted data (name and email address) are sent to the [SignupCommand](https://github.com/OpenSourceSteve/web/blob/dev/amplify/backend/function/SignupCommand/src/index.js) lambda where an AWS Cognito user is created and then the data are sent onward to 2 queues: the CreateAppUser queue and the AdminDisableUserCommand queue (both maintained in AWS console). The user only actually needs to wait on the creation of a cognito user. By offloading the provisioning responsiblities of creating an app user and disabling the cognito user to queues running in the background, we're able to reduce user wait time from about 3.5 seconds down to about 1.5 seconds on initial signup.

A Cognito user is just a mapping from email address to UUID (GUID). It exists solely for interacting with the datastore (DynamoDB).  Cognito users are enabled by default, before their emails are verified, so the [AdminDisableUserCommand](https://github.com/OpenSourceSteve/web/blob/dev/amplify/backend/function/AdminDisableUserCommand/src/index.js) lambda (which is triggered by the AdminDisableUserCommand queue) immediately disables them. The [CreateAppUser](https://github.com/OpenSourceSteve/web/blob/dev/amplify/backend/function/CreateAppUser/src/index.js) lambda (triggered by the CreateAppUser queue) does 3 things:
1. It creates a mapping between the Cognito user ID and an EasyLegal.app ID. This allows for future decoupling from the Cognito auth service. (See `What I would do next` below for more information.)
2. It creates a record of consent to the site's terms and conditions
3. It creates a temporary record of user data to be used later when the user confirms her email address

#### Email verification
Cognito uses a standard email confirmation workflow.  When a user successfully enters a confirmation code that has been sent to the email address they've provided, the [ConfirmationFlow](https://github.com/OpenSourceSteve/web/blob/dev/amplify/backend/function/ConfirmationFlow/src/index.js) lambda re-enables their account and marks it as email verified. The user's info is then again forwarded to another queue (CreateLawyer) to be processed in the background as the user logs in for the first time, again saving the user a couple seconds of wait time.

The [CreateLawyer](https://github.com/OpenSourceSteve/web/blob/dev/amplify/backend/function/CreateLawyer/src/index.js) lambda (triggered by the CreateLawyer queue) creates a laywer, a practice and adds the lawyer to the practice. This is also discussed in the `What I would do next` section below.

#### Initial Login
Welcome screen.

Create Client

Create Case

Create Events

## Testing and Accessiblity
Jest, unit testing.
Playwright, integration testing. Accessiblity concerns.
Auth Secrets.


## What I would do next
Mobile-first, supported by Tailwind

optimize queries

Lambda Layers

Queue management (terraform)

Reminder configuration

Alerts

Billing

Decoupling from AWS