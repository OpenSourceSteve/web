/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSignup = /* GraphQL */ `
  subscription OnCreateSignup($filter: ModelSubscriptionSignupFilterInput) {
    onCreateSignup(filter: $filter) {
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
export const onUpdateSignup = /* GraphQL */ `
  subscription OnUpdateSignup($filter: ModelSubscriptionSignupFilterInput) {
    onUpdateSignup(filter: $filter) {
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
export const onDeleteSignup = /* GraphQL */ `
  subscription OnDeleteSignup($filter: ModelSubscriptionSignupFilterInput) {
    onDeleteSignup(filter: $filter) {
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
export const onCreateFinance = /* GraphQL */ `
  subscription OnCreateFinance(
    $filter: ModelSubscriptionFinanceFilterInput
    $owner: String
  ) {
    onCreateFinance(filter: $filter, owner: $owner) {
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
export const onUpdateFinance = /* GraphQL */ `
  subscription OnUpdateFinance(
    $filter: ModelSubscriptionFinanceFilterInput
    $owner: String
  ) {
    onUpdateFinance(filter: $filter, owner: $owner) {
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
export const onDeleteFinance = /* GraphQL */ `
  subscription OnDeleteFinance(
    $filter: ModelSubscriptionFinanceFilterInput
    $owner: String
  ) {
    onDeleteFinance(filter: $filter, owner: $owner) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onCreateTask(filter: $filter, owner: $owner) {
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
          timestamp
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onUpdateTask(filter: $filter, owner: $owner) {
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
          timestamp
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onDeleteTask(filter: $filter, owner: $owner) {
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
          timestamp
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
      id
      timestamp
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
      id
      timestamp
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
      id
      timestamp
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
export const onCreateCharge = /* GraphQL */ `
  subscription OnCreateCharge(
    $filter: ModelSubscriptionChargeFilterInput
    $owner: String
  ) {
    onCreateCharge(filter: $filter, owner: $owner) {
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
export const onUpdateCharge = /* GraphQL */ `
  subscription OnUpdateCharge(
    $filter: ModelSubscriptionChargeFilterInput
    $owner: String
  ) {
    onUpdateCharge(filter: $filter, owner: $owner) {
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
export const onDeleteCharge = /* GraphQL */ `
  subscription OnDeleteCharge(
    $filter: ModelSubscriptionChargeFilterInput
    $owner: String
  ) {
    onDeleteCharge(filter: $filter, owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
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
          timestamp
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
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
          timestamp
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
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
          timestamp
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
export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase(
    $filter: ModelSubscriptionCaseFilterInput
    $owner: String
  ) {
    onCreateCase(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase(
    $filter: ModelSubscriptionCaseFilterInput
    $owner: String
  ) {
    onUpdateCase(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase(
    $filter: ModelSubscriptionCaseFilterInput
    $owner: String
  ) {
    onDeleteCase(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onCreateClient(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onUpdateClient(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onDeleteClient(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onCreateConsent = /* GraphQL */ `
  subscription OnCreateConsent(
    $filter: ModelSubscriptionConsentFilterInput
    $owner: String
  ) {
    onCreateConsent(filter: $filter, owner: $owner) {
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
export const onUpdateConsent = /* GraphQL */ `
  subscription OnUpdateConsent(
    $filter: ModelSubscriptionConsentFilterInput
    $owner: String
  ) {
    onUpdateConsent(filter: $filter, owner: $owner) {
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
export const onDeleteConsent = /* GraphQL */ `
  subscription OnDeleteConsent(
    $filter: ModelSubscriptionConsentFilterInput
    $owner: String
  ) {
    onDeleteConsent(filter: $filter, owner: $owner) {
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
export const onCreatePractice = /* GraphQL */ `
  subscription OnCreatePractice(
    $filter: ModelSubscriptionPracticeFilterInput
    $owner: String
  ) {
    onCreatePractice(filter: $filter, owner: $owner) {
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
export const onUpdatePractice = /* GraphQL */ `
  subscription OnUpdatePractice(
    $filter: ModelSubscriptionPracticeFilterInput
    $owner: String
  ) {
    onUpdatePractice(filter: $filter, owner: $owner) {
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
export const onDeletePractice = /* GraphQL */ `
  subscription OnDeletePractice(
    $filter: ModelSubscriptionPracticeFilterInput
    $owner: String
  ) {
    onDeletePractice(filter: $filter, owner: $owner) {
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
export const onCreateLawyer = /* GraphQL */ `
  subscription OnCreateLawyer(
    $filter: ModelSubscriptionLawyerFilterInput
    $owner: String
  ) {
    onCreateLawyer(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onUpdateLawyer = /* GraphQL */ `
  subscription OnUpdateLawyer(
    $filter: ModelSubscriptionLawyerFilterInput
    $owner: String
  ) {
    onUpdateLawyer(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onDeleteLawyer = /* GraphQL */ `
  subscription OnDeleteLawyer(
    $filter: ModelSubscriptionLawyerFilterInput
    $owner: String
  ) {
    onDeleteLawyer(filter: $filter, owner: $owner) {
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
              timestamp
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateCaseClient = /* GraphQL */ `
  subscription OnCreateCaseClient(
    $filter: ModelSubscriptionCaseClientFilterInput
    $owner: String
  ) {
    onCreateCaseClient(filter: $filter, owner: $owner) {
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
export const onUpdateCaseClient = /* GraphQL */ `
  subscription OnUpdateCaseClient(
    $filter: ModelSubscriptionCaseClientFilterInput
    $owner: String
  ) {
    onUpdateCaseClient(filter: $filter, owner: $owner) {
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
export const onDeleteCaseClient = /* GraphQL */ `
  subscription OnDeleteCaseClient(
    $filter: ModelSubscriptionCaseClientFilterInput
    $owner: String
  ) {
    onDeleteCaseClient(filter: $filter, owner: $owner) {
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
export const onCreateCaseLawyer = /* GraphQL */ `
  subscription OnCreateCaseLawyer(
    $filter: ModelSubscriptionCaseLawyerFilterInput
    $owner: String
  ) {
    onCreateCaseLawyer(filter: $filter, owner: $owner) {
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
export const onUpdateCaseLawyer = /* GraphQL */ `
  subscription OnUpdateCaseLawyer(
    $filter: ModelSubscriptionCaseLawyerFilterInput
    $owner: String
  ) {
    onUpdateCaseLawyer(filter: $filter, owner: $owner) {
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
export const onDeleteCaseLawyer = /* GraphQL */ `
  subscription OnDeleteCaseLawyer(
    $filter: ModelSubscriptionCaseLawyerFilterInput
    $owner: String
  ) {
    onDeleteCaseLawyer(filter: $filter, owner: $owner) {
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
export const onCreatePracticeLawyer = /* GraphQL */ `
  subscription OnCreatePracticeLawyer(
    $filter: ModelSubscriptionPracticeLawyerFilterInput
    $owner: String
  ) {
    onCreatePracticeLawyer(filter: $filter, owner: $owner) {
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
export const onUpdatePracticeLawyer = /* GraphQL */ `
  subscription OnUpdatePracticeLawyer(
    $filter: ModelSubscriptionPracticeLawyerFilterInput
    $owner: String
  ) {
    onUpdatePracticeLawyer(filter: $filter, owner: $owner) {
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
export const onDeletePracticeLawyer = /* GraphQL */ `
  subscription OnDeletePracticeLawyer(
    $filter: ModelSubscriptionPracticeLawyerFilterInput
    $owner: String
  ) {
    onDeletePracticeLawyer(filter: $filter, owner: $owner) {
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
