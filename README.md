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

### Data Model

### Resource CRUD

## Testing and Accessiblity
Playwright. Accessiblity concerns.
Auth Secrets.


## What I would do next
Mobile-first, supported by Tailwind
optimize queries
Lambda Layers
Reminder configuration
Billing