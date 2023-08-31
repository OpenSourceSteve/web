/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFinance = /* GraphQL */ `
  mutation CreateFinance(
    $input: CreateFinanceInput!
    $condition: ModelFinanceConditionInput
  ) {
    createFinance(input: $input, condition: $condition) {
      id
      caseID
      clientID
      expense
      payment
      title
      description
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
export const updateFinance = /* GraphQL */ `
  mutation UpdateFinance(
    $input: UpdateFinanceInput!
    $condition: ModelFinanceConditionInput
  ) {
    updateFinance(input: $input, condition: $condition) {
      id
      caseID
      clientID
      expense
      payment
      title
      description
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
export const deleteFinance = /* GraphQL */ `
  mutation DeleteFinance(
    $input: DeleteFinanceInput!
    $condition: ModelFinanceConditionInput
  ) {
    deleteFinance(input: $input, condition: $condition) {
      id
      caseID
      clientID
      expense
      payment
      title
      description
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
export const createSignup = /* GraphQL */ `
  mutation CreateSignup(
    $input: CreateSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    createSignup(input: $input, condition: $condition) {
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
export const updateSignup = /* GraphQL */ `
  mutation UpdateSignup(
    $input: UpdateSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    updateSignup(input: $input, condition: $condition) {
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
export const deleteSignup = /* GraphQL */ `
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      deadline
      assignee
      caseID
      lawyerID
      clientID
      Notes {
        items {
          id
          text
          type
          caseID
          eventID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      isAssigneeComplete
      isVerifiedComplete
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      deadline
      assignee
      caseID
      lawyerID
      clientID
      Notes {
        items {
          id
          text
          type
          caseID
          eventID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      isAssigneeComplete
      isVerifiedComplete
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      deadline
      assignee
      caseID
      lawyerID
      clientID
      Notes {
        items {
          id
          text
          type
          caseID
          eventID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      isAssigneeComplete
      isVerifiedComplete
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      text
      type
      caseID
      eventID
      taskID
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      text
      type
      caseID
      eventID
      taskID
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      text
      type
      caseID
      eventID
      taskID
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
export const createCharge = /* GraphQL */ `
  mutation CreateCharge(
    $input: CreateChargeInput!
    $condition: ModelChargeConditionInput
  ) {
    createCharge(input: $input, condition: $condition) {
      id
      status
      statute
      description
      caseID
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
export const updateCharge = /* GraphQL */ `
  mutation UpdateCharge(
    $input: UpdateChargeInput!
    $condition: ModelChargeConditionInput
  ) {
    updateCharge(input: $input, condition: $condition) {
      id
      status
      statute
      description
      caseID
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
export const deleteCharge = /* GraphQL */ `
  mutation DeleteCharge(
    $input: DeleteChargeInput!
    $condition: ModelChargeConditionInput
  ) {
    deleteCharge(input: $input, condition: $condition) {
      id
      status
      statute
      description
      caseID
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      caseID
      type
      startDatetime
      duration
      location
      link
      phone
      title
      description
      Notes {
        items {
          id
          text
          type
          caseID
          eventID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Clients {
        items {
          id
          eventId
          clientId
          event {
            id
            caseID
            type
            startDatetime
            duration
            location
            link
            phone
            title
            description
            Notes {
              nextToken
              startedAt
              __typename
            }
            Clients {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      caseID
      type
      startDatetime
      duration
      location
      link
      phone
      title
      description
      Notes {
        items {
          id
          text
          type
          caseID
          eventID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Clients {
        items {
          id
          eventId
          clientId
          event {
            id
            caseID
            type
            startDatetime
            duration
            location
            link
            phone
            title
            description
            Notes {
              nextToken
              startedAt
              __typename
            }
            Clients {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      caseID
      type
      startDatetime
      duration
      location
      link
      phone
      title
      description
      Notes {
        items {
          id
          text
          type
          caseID
          eventID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Clients {
        items {
          id
          eventId
          clientId
          event {
            id
            caseID
            type
            startDatetime
            duration
            location
            link
            phone
            title
            description
            Notes {
              nextToken
              startedAt
              __typename
            }
            Clients {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
      id
      jurisdiction
      court
      judge
      prosecutor
      Clients {
        items {
          id
          caseId
          clientId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Lawyers {
        items {
          id
          caseId
          lawyerId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Events {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Charges {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Notes {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      caseNumber
      caseName
      Finances {
        items {
          id
          caseID
          clientID
          expense
          payment
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
      id
      jurisdiction
      court
      judge
      prosecutor
      Clients {
        items {
          id
          caseId
          clientId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Lawyers {
        items {
          id
          caseId
          lawyerId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Events {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Charges {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Notes {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      caseNumber
      caseName
      Finances {
        items {
          id
          caseID
          clientID
          expense
          payment
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
      id
      jurisdiction
      court
      judge
      prosecutor
      Clients {
        items {
          id
          caseId
          clientId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Lawyers {
        items {
          id
          caseId
          lawyerId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Events {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Charges {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Notes {
        items {
          id
          status
          statute
          description
          caseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      caseNumber
      caseName
      Finances {
        items {
          id
          caseID
          clientID
          expense
          payment
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      dateOfBirth
      phone
      email
      address1
      address2
      city
      state
      zip
      referralSource
      cases {
        items {
          id
          caseId
          clientId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      events {
        items {
          id
          eventId
          clientId
          event {
            id
            caseID
            type
            startDatetime
            duration
            location
            link
            phone
            title
            description
            Notes {
              nextToken
              startedAt
              __typename
            }
            Clients {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Finances {
        items {
          id
          caseID
          clientID
          expense
          payment
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      dateOfBirth
      phone
      email
      address1
      address2
      city
      state
      zip
      referralSource
      cases {
        items {
          id
          caseId
          clientId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      events {
        items {
          id
          eventId
          clientId
          event {
            id
            caseID
            type
            startDatetime
            duration
            location
            link
            phone
            title
            description
            Notes {
              nextToken
              startedAt
              __typename
            }
            Clients {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Finances {
        items {
          id
          caseID
          clientID
          expense
          payment
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      dateOfBirth
      phone
      email
      address1
      address2
      city
      state
      zip
      referralSource
      cases {
        items {
          id
          caseId
          clientId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      events {
        items {
          id
          eventId
          clientId
          event {
            id
            caseID
            type
            startDatetime
            duration
            location
            link
            phone
            title
            description
            Notes {
              nextToken
              startedAt
              __typename
            }
            Clients {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          client {
            id
            userID
            firstName
            lastName
            dateOfBirth
            phone
            email
            address1
            address2
            city
            state
            zip
            referralSource
            cases {
              nextToken
              startedAt
              __typename
            }
            events {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Finances {
        items {
          id
          caseID
          clientID
          expense
          payment
          title
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
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
export const createConsent = /* GraphQL */ `
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
export const updateConsent = /* GraphQL */ `
  mutation UpdateConsent(
    $input: UpdateConsentInput!
    $condition: ModelConsentConditionInput
  ) {
    updateConsent(input: $input, condition: $condition) {
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
export const deleteConsent = /* GraphQL */ `
  mutation DeleteConsent(
    $input: DeleteConsentInput!
    $condition: ModelConsentConditionInput
  ) {
    deleteConsent(input: $input, condition: $condition) {
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
export const createPractice = /* GraphQL */ `
  mutation CreatePractice(
    $input: CreatePracticeInput!
    $condition: ModelPracticeConditionInput
  ) {
    createPractice(input: $input, condition: $condition) {
      id
      name
      owner
      Lawyers {
        items {
          id
          practiceId
          lawyerId
          practice {
            id
            name
            owner
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePractice = /* GraphQL */ `
  mutation UpdatePractice(
    $input: UpdatePracticeInput!
    $condition: ModelPracticeConditionInput
  ) {
    updatePractice(input: $input, condition: $condition) {
      id
      name
      owner
      Lawyers {
        items {
          id
          practiceId
          lawyerId
          practice {
            id
            name
            owner
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePractice = /* GraphQL */ `
  mutation DeletePractice(
    $input: DeletePracticeInput!
    $condition: ModelPracticeConditionInput
  ) {
    deletePractice(input: $input, condition: $condition) {
      id
      name
      owner
      Lawyers {
        items {
          id
          practiceId
          lawyerId
          practice {
            id
            name
            owner
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createLawyer = /* GraphQL */ `
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
      practices {
        items {
          id
          practiceId
          lawyerId
          practice {
            id
            name
            owner
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      email
      phone
      owner
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      cases {
        items {
          id
          caseId
          lawyerId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateLawyer = /* GraphQL */ `
  mutation UpdateLawyer(
    $input: UpdateLawyerInput!
    $condition: ModelLawyerConditionInput
  ) {
    updateLawyer(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      barAssociation
      licenseNumber
      practices {
        items {
          id
          practiceId
          lawyerId
          practice {
            id
            name
            owner
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      email
      phone
      owner
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      cases {
        items {
          id
          caseId
          lawyerId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteLawyer = /* GraphQL */ `
  mutation DeleteLawyer(
    $input: DeleteLawyerInput!
    $condition: ModelLawyerConditionInput
  ) {
    deleteLawyer(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      barAssociation
      licenseNumber
      practices {
        items {
          id
          practiceId
          lawyerId
          practice {
            id
            name
            owner
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      email
      phone
      owner
      Tasks {
        items {
          id
          title
          description
          deadline
          assignee
          caseID
          lawyerID
          clientID
          Notes {
            items {
              id
              text
              type
              caseID
              eventID
              taskID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          isAssigneeComplete
          isVerifiedComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      cases {
        items {
          id
          caseId
          lawyerId
          case {
            id
            jurisdiction
            court
            judge
            prosecutor
            Clients {
              nextToken
              startedAt
              __typename
            }
            Lawyers {
              nextToken
              startedAt
              __typename
            }
            Events {
              nextToken
              startedAt
              __typename
            }
            Charges {
              nextToken
              startedAt
              __typename
            }
            Notes {
              nextToken
              startedAt
              __typename
            }
            Tasks {
              nextToken
              startedAt
              __typename
            }
            caseNumber
            caseName
            Finances {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          lawyer {
            id
            userID
            firstName
            lastName
            barAssociation
            licenseNumber
            practices {
              nextToken
              startedAt
              __typename
            }
            email
            phone
            owner
            Tasks {
              nextToken
              startedAt
              __typename
            }
            cases {
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoID
      Lawyers {
        items {
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
        nextToken
        startedAt
        __typename
      }
      Consents {
        items {
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
        nextToken
        startedAt
        __typename
      }
      Clients {
        items {
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
        nextToken
        startedAt
        __typename
      }
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoID
      Lawyers {
        items {
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
        nextToken
        startedAt
        __typename
      }
      Consents {
        items {
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
        nextToken
        startedAt
        __typename
      }
      Clients {
        items {
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
        nextToken
        startedAt
        __typename
      }
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognitoID
      Lawyers {
        items {
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
        nextToken
        startedAt
        __typename
      }
      Consents {
        items {
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
        nextToken
        startedAt
        __typename
      }
      Clients {
        items {
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
        nextToken
        startedAt
        __typename
      }
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
export const createClientEvent = /* GraphQL */ `
  mutation CreateClientEvent(
    $input: CreateClientEventInput!
    $condition: ModelClientEventConditionInput
  ) {
    createClientEvent(input: $input, condition: $condition) {
      id
      eventId
      clientId
      event {
        id
        caseID
        type
        startDatetime
        duration
        location
        link
        phone
        title
        description
        Notes {
          items {
            id
            text
            type
            caseID
            eventID
            taskID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Clients {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      client {
        id
        userID
        firstName
        lastName
        dateOfBirth
        phone
        email
        address1
        address2
        city
        state
        zip
        referralSource
        cases {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        events {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const updateClientEvent = /* GraphQL */ `
  mutation UpdateClientEvent(
    $input: UpdateClientEventInput!
    $condition: ModelClientEventConditionInput
  ) {
    updateClientEvent(input: $input, condition: $condition) {
      id
      eventId
      clientId
      event {
        id
        caseID
        type
        startDatetime
        duration
        location
        link
        phone
        title
        description
        Notes {
          items {
            id
            text
            type
            caseID
            eventID
            taskID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Clients {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      client {
        id
        userID
        firstName
        lastName
        dateOfBirth
        phone
        email
        address1
        address2
        city
        state
        zip
        referralSource
        cases {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        events {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const deleteClientEvent = /* GraphQL */ `
  mutation DeleteClientEvent(
    $input: DeleteClientEventInput!
    $condition: ModelClientEventConditionInput
  ) {
    deleteClientEvent(input: $input, condition: $condition) {
      id
      eventId
      clientId
      event {
        id
        caseID
        type
        startDatetime
        duration
        location
        link
        phone
        title
        description
        Notes {
          items {
            id
            text
            type
            caseID
            eventID
            taskID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Clients {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      client {
        id
        userID
        firstName
        lastName
        dateOfBirth
        phone
        email
        address1
        address2
        city
        state
        zip
        referralSource
        cases {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        events {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const createCaseClient = /* GraphQL */ `
  mutation CreateCaseClient(
    $input: CreateCaseClientInput!
    $condition: ModelCaseClientConditionInput
  ) {
    createCaseClient(input: $input, condition: $condition) {
      id
      caseId
      clientId
      case {
        id
        jurisdiction
        court
        judge
        prosecutor
        Clients {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Lawyers {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Events {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Charges {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notes {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        caseNumber
        caseName
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      client {
        id
        userID
        firstName
        lastName
        dateOfBirth
        phone
        email
        address1
        address2
        city
        state
        zip
        referralSource
        cases {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        events {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const updateCaseClient = /* GraphQL */ `
  mutation UpdateCaseClient(
    $input: UpdateCaseClientInput!
    $condition: ModelCaseClientConditionInput
  ) {
    updateCaseClient(input: $input, condition: $condition) {
      id
      caseId
      clientId
      case {
        id
        jurisdiction
        court
        judge
        prosecutor
        Clients {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Lawyers {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Events {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Charges {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notes {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        caseNumber
        caseName
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      client {
        id
        userID
        firstName
        lastName
        dateOfBirth
        phone
        email
        address1
        address2
        city
        state
        zip
        referralSource
        cases {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        events {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const deleteCaseClient = /* GraphQL */ `
  mutation DeleteCaseClient(
    $input: DeleteCaseClientInput!
    $condition: ModelCaseClientConditionInput
  ) {
    deleteCaseClient(input: $input, condition: $condition) {
      id
      caseId
      clientId
      case {
        id
        jurisdiction
        court
        judge
        prosecutor
        Clients {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Lawyers {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Events {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Charges {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notes {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        caseNumber
        caseName
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      client {
        id
        userID
        firstName
        lastName
        dateOfBirth
        phone
        email
        address1
        address2
        city
        state
        zip
        referralSource
        cases {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        events {
          items {
            id
            eventId
            clientId
            event {
              id
              caseID
              type
              startDatetime
              duration
              location
              link
              phone
              title
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const createCaseLawyer = /* GraphQL */ `
  mutation CreateCaseLawyer(
    $input: CreateCaseLawyerInput!
    $condition: ModelCaseLawyerConditionInput
  ) {
    createCaseLawyer(input: $input, condition: $condition) {
      id
      caseId
      lawyerId
      case {
        id
        jurisdiction
        court
        judge
        prosecutor
        Clients {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Lawyers {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Events {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Charges {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notes {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        caseNumber
        caseName
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      lawyer {
        id
        userID
        firstName
        lastName
        barAssociation
        licenseNumber
        practices {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        email
        phone
        owner
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cases {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const updateCaseLawyer = /* GraphQL */ `
  mutation UpdateCaseLawyer(
    $input: UpdateCaseLawyerInput!
    $condition: ModelCaseLawyerConditionInput
  ) {
    updateCaseLawyer(input: $input, condition: $condition) {
      id
      caseId
      lawyerId
      case {
        id
        jurisdiction
        court
        judge
        prosecutor
        Clients {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Lawyers {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Events {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Charges {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notes {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        caseNumber
        caseName
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      lawyer {
        id
        userID
        firstName
        lastName
        barAssociation
        licenseNumber
        practices {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        email
        phone
        owner
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cases {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const deleteCaseLawyer = /* GraphQL */ `
  mutation DeleteCaseLawyer(
    $input: DeleteCaseLawyerInput!
    $condition: ModelCaseLawyerConditionInput
  ) {
    deleteCaseLawyer(input: $input, condition: $condition) {
      id
      caseId
      lawyerId
      case {
        id
        jurisdiction
        court
        judge
        prosecutor
        Clients {
          items {
            id
            caseId
            clientId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            client {
              id
              userID
              firstName
              lastName
              dateOfBirth
              phone
              email
              address1
              address2
              city
              state
              zip
              referralSource
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Lawyers {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Events {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Charges {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notes {
          items {
            id
            status
            statute
            description
            caseID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        caseNumber
        caseName
        Finances {
          items {
            id
            caseID
            clientID
            expense
            payment
            title
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      lawyer {
        id
        userID
        firstName
        lastName
        barAssociation
        licenseNumber
        practices {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        email
        phone
        owner
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cases {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const createPracticeLawyer = /* GraphQL */ `
  mutation CreatePracticeLawyer(
    $input: CreatePracticeLawyerInput!
    $condition: ModelPracticeLawyerConditionInput
  ) {
    createPracticeLawyer(input: $input, condition: $condition) {
      id
      practiceId
      lawyerId
      practice {
        id
        name
        owner
        Lawyers {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      lawyer {
        id
        userID
        firstName
        lastName
        barAssociation
        licenseNumber
        practices {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        email
        phone
        owner
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cases {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const updatePracticeLawyer = /* GraphQL */ `
  mutation UpdatePracticeLawyer(
    $input: UpdatePracticeLawyerInput!
    $condition: ModelPracticeLawyerConditionInput
  ) {
    updatePracticeLawyer(input: $input, condition: $condition) {
      id
      practiceId
      lawyerId
      practice {
        id
        name
        owner
        Lawyers {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      lawyer {
        id
        userID
        firstName
        lastName
        barAssociation
        licenseNumber
        practices {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        email
        phone
        owner
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cases {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const deletePracticeLawyer = /* GraphQL */ `
  mutation DeletePracticeLawyer(
    $input: DeletePracticeLawyerInput!
    $condition: ModelPracticeLawyerConditionInput
  ) {
    deletePracticeLawyer(input: $input, condition: $condition) {
      id
      practiceId
      lawyerId
      practice {
        id
        name
        owner
        Lawyers {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      lawyer {
        id
        userID
        firstName
        lastName
        barAssociation
        licenseNumber
        practices {
          items {
            id
            practiceId
            lawyerId
            practice {
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
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        email
        phone
        owner
        Tasks {
          items {
            id
            title
            description
            deadline
            assignee
            caseID
            lawyerID
            clientID
            Notes {
              nextToken
              startedAt
              __typename
            }
            isAssigneeComplete
            isVerifiedComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cases {
          items {
            id
            caseId
            lawyerId
            case {
              id
              jurisdiction
              court
              judge
              prosecutor
              caseNumber
              caseName
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            lawyer {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
