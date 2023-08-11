/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSignup = /* GraphQL */ `
  query GetSignup($id: ID!) {
    getSignup(id: $id) {
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
export const listSignups = /* GraphQL */ `
  query ListSignups(
    $filter: ModelSignupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncSignups = /* GraphQL */ `
  query SyncSignups(
    $filter: ModelSignupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSignups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
export const signupsByEmail = /* GraphQL */ `
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
export const getFinance = /* GraphQL */ `
  query GetFinance($id: ID!) {
    getFinance(id: $id) {
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
export const listFinances = /* GraphQL */ `
  query ListFinances(
    $filter: ModelFinanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFinances(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncFinances = /* GraphQL */ `
  query SyncFinances(
    $filter: ModelFinanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFinances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const financesByCaseID = /* GraphQL */ `
  query FinancesByCaseID(
    $caseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFinanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    financesByCaseID(
      caseID: $caseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const financesByClientID = /* GraphQL */ `
  query FinancesByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFinanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    financesByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const tasksByCaseID = /* GraphQL */ `
  query TasksByCaseID(
    $caseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByCaseID(
      caseID: $caseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const tasksByLawyerID = /* GraphQL */ `
  query TasksByLawyerID(
    $lawyerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByLawyerID(
      lawyerID: $lawyerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const tasksByClientID = /* GraphQL */ `
  query TasksByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const notesByCaseID = /* GraphQL */ `
  query NotesByCaseID(
    $caseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByCaseID(
      caseID: $caseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const notesByEventID = /* GraphQL */ `
  query NotesByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const notesByTaskID = /* GraphQL */ `
  query NotesByTaskID(
    $taskID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByTaskID(
      taskID: $taskID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCharge = /* GraphQL */ `
  query GetCharge($id: ID!) {
    getCharge(id: $id) {
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
export const listCharges = /* GraphQL */ `
  query ListCharges(
    $filter: ModelChargeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharges(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCharges = /* GraphQL */ `
  query SyncCharges(
    $filter: ModelChargeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCharges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const chargesByCaseID = /* GraphQL */ `
  query ChargesByCaseID(
    $caseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChargeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chargesByCaseID(
      caseID: $caseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const eventsByCaseID = /* GraphQL */ `
  query EventsByCaseID(
    $caseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByCaseID(
      caseID: $caseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
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
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCases = /* GraphQL */ `
  query SyncCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const clientsByUserID = /* GraphQL */ `
  query ClientsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getConsent = /* GraphQL */ `
  query GetConsent($id: ID!) {
    getConsent(id: $id) {
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
export const listConsents = /* GraphQL */ `
  query ListConsents(
    $filter: ModelConsentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncConsents = /* GraphQL */ `
  query SyncConsents(
    $filter: ModelConsentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const consentsByUserID = /* GraphQL */ `
  query ConsentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConsentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    consentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPractice = /* GraphQL */ `
  query GetPractice($id: ID!) {
    getPractice(id: $id) {
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
export const listPractices = /* GraphQL */ `
  query ListPractices(
    $filter: ModelPracticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPractices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPractices = /* GraphQL */ `
  query SyncPractices(
    $filter: ModelPracticeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPractices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLawyer = /* GraphQL */ `
  query GetLawyer($id: ID!) {
    getLawyer(id: $id) {
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
export const listLawyers = /* GraphQL */ `
  query ListLawyers(
    $filter: ModelLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLawyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLawyers = /* GraphQL */ `
  query SyncLawyers(
    $filter: ModelLawyerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLawyers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const lawyersByUserID = /* GraphQL */ `
  query LawyersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lawyersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCaseClient = /* GraphQL */ `
  query GetCaseClient($id: ID!) {
    getCaseClient(id: $id) {
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
export const listCaseClients = /* GraphQL */ `
  query ListCaseClients(
    $filter: ModelCaseClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaseClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCaseClients = /* GraphQL */ `
  query SyncCaseClients(
    $filter: ModelCaseClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCaseClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const caseClientsByCaseId = /* GraphQL */ `
  query CaseClientsByCaseId(
    $caseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseClientsByCaseId(
      caseId: $caseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const caseClientsByClientId = /* GraphQL */ `
  query CaseClientsByClientId(
    $clientId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseClientsByClientId(
      clientId: $clientId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCaseLawyer = /* GraphQL */ `
  query GetCaseLawyer($id: ID!) {
    getCaseLawyer(id: $id) {
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
export const listCaseLawyers = /* GraphQL */ `
  query ListCaseLawyers(
    $filter: ModelCaseLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaseLawyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCaseLawyers = /* GraphQL */ `
  query SyncCaseLawyers(
    $filter: ModelCaseLawyerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCaseLawyers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const caseLawyersByCaseId = /* GraphQL */ `
  query CaseLawyersByCaseId(
    $caseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseLawyersByCaseId(
      caseId: $caseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const caseLawyersByLawyerId = /* GraphQL */ `
  query CaseLawyersByLawyerId(
    $lawyerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseLawyersByLawyerId(
      lawyerId: $lawyerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              caseId
              clientId
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPracticeLawyer = /* GraphQL */ `
  query GetPracticeLawyer($id: ID!) {
    getPracticeLawyer(id: $id) {
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
export const listPracticeLawyers = /* GraphQL */ `
  query ListPracticeLawyers(
    $filter: ModelPracticeLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPracticeLawyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPracticeLawyers = /* GraphQL */ `
  query SyncPracticeLawyers(
    $filter: ModelPracticeLawyerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPracticeLawyers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const practiceLawyersByPracticeId = /* GraphQL */ `
  query PracticeLawyersByPracticeId(
    $practiceId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPracticeLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    practiceLawyersByPracticeId(
      practiceId: $practiceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const practiceLawyersByLawyerId = /* GraphQL */ `
  query PracticeLawyersByLawyerId(
    $lawyerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPracticeLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    practiceLawyersByLawyerId(
      lawyerId: $lawyerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
              createdAt
              updatedAt
              _version
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
      nextToken
      startedAt
      __typename
    }
  }
`;
