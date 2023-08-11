import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum NoteType {
  CLIENT = "CLIENT",
  COURT = "COURT",
  OTHER = "OTHER"
}

export enum ChargeStatus {
  UNFILED = "UNFILED",
  PENDING = "PENDING",
  DISMISSED = "DISMISSED",
  CLOSED = "CLOSED"
}

export enum EventType {
  COURT_APPEARANCE = "COURT_APPEARANCE",
  CLIENT_MEETING = "CLIENT_MEETING",
  STAFF_MEETING = "STAFF_MEETING",
  EXTERNAL_MEETING = "EXTERNAL_MEETING",
  OTHER_HOURS_BILLABLE = "OTHER_HOURS_BILLABLE"
}



type EagerFinance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Finance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseID: string;
  readonly clientID: string;
  readonly expense?: number | null;
  readonly payment?: number | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFinance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Finance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseID: string;
  readonly clientID: string;
  readonly expense?: number | null;
  readonly payment?: number | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Finance = LazyLoading extends LazyLoadingDisabled ? EagerFinance : LazyFinance

export declare const Finance: (new (init: ModelInit<Finance>) => Finance) & {
  copyOf(source: Finance, mutator: (draft: MutableModel<Finance>) => MutableModel<Finance> | void): Finance;
}

type EagerSignup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Signup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly cognitoID?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySignup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Signup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly cognitoID?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Signup = LazyLoading extends LazyLoadingDisabled ? EagerSignup : LazySignup

export declare const Signup: (new (init: ModelInit<Signup>) => Signup) & {
  copyOf(source: Signup, mutator: (draft: MutableModel<Signup>) => MutableModel<Signup> | void): Signup;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly deadline?: string | null;
  readonly assignee?: string | null;
  readonly caseID: string;
  readonly lawyerID: string;
  readonly clientID: string;
  readonly Notes?: (Note | null)[] | null;
  readonly isAssigneeComplete?: boolean | null;
  readonly isVerifiedComplete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly deadline?: string | null;
  readonly assignee?: string | null;
  readonly caseID: string;
  readonly lawyerID: string;
  readonly clientID: string;
  readonly Notes: AsyncCollection<Note>;
  readonly isAssigneeComplete?: boolean | null;
  readonly isVerifiedComplete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timestamp?: string | null;
  readonly text?: string | null;
  readonly type?: NoteType | keyof typeof NoteType | null;
  readonly caseID: string;
  readonly eventID?: string | null;
  readonly taskID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timestamp?: string | null;
  readonly text?: string | null;
  readonly type?: NoteType | keyof typeof NoteType | null;
  readonly caseID: string;
  readonly eventID?: string | null;
  readonly taskID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerCharge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Charge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: ChargeStatus | keyof typeof ChargeStatus | null;
  readonly statute?: string | null;
  readonly description?: string | null;
  readonly caseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Charge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: ChargeStatus | keyof typeof ChargeStatus | null;
  readonly statute?: string | null;
  readonly description?: string | null;
  readonly caseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Charge = LazyLoading extends LazyLoadingDisabled ? EagerCharge : LazyCharge

export declare const Charge: (new (init: ModelInit<Charge>) => Charge) & {
  copyOf(source: Charge, mutator: (draft: MutableModel<Charge>) => MutableModel<Charge> | void): Charge;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseID: string;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly startDatetime: string;
  readonly duration?: number | null;
  readonly location?: string | null;
  readonly link?: string | null;
  readonly phone?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly Notes?: (Note | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseID: string;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly startDatetime: string;
  readonly duration?: number | null;
  readonly location?: string | null;
  readonly link?: string | null;
  readonly phone?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly Notes: AsyncCollection<Note>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerCase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Case, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jurisdiction?: string | null;
  readonly court?: string | null;
  readonly judge?: string | null;
  readonly prosecutor?: string | null;
  readonly Clients?: (CaseClient | null)[] | null;
  readonly Lawyers?: (CaseLawyer | null)[] | null;
  readonly Events?: (Charge | null)[] | null;
  readonly Charges?: (Charge | null)[] | null;
  readonly Notes?: (Charge | null)[] | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly caseNumber?: string | null;
  readonly caseName?: string | null;
  readonly Finances?: (Finance | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Case, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jurisdiction?: string | null;
  readonly court?: string | null;
  readonly judge?: string | null;
  readonly prosecutor?: string | null;
  readonly Clients: AsyncCollection<CaseClient>;
  readonly Lawyers: AsyncCollection<CaseLawyer>;
  readonly Events: AsyncCollection<Charge>;
  readonly Charges: AsyncCollection<Charge>;
  readonly Notes: AsyncCollection<Charge>;
  readonly Tasks: AsyncCollection<Task>;
  readonly caseNumber?: string | null;
  readonly caseName?: string | null;
  readonly Finances: AsyncCollection<Finance>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Case = LazyLoading extends LazyLoadingDisabled ? EagerCase : LazyCase

export declare const Case: (new (init: ModelInit<Case>) => Case) & {
  copyOf(source: Case, mutator: (draft: MutableModel<Case>) => MutableModel<Case> | void): Case;
}

type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address1?: string | null;
  readonly address2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly referralSource?: string | null;
  readonly cases?: (CaseClient | null)[] | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly Finances?: (Finance | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address1?: string | null;
  readonly address2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly referralSource?: string | null;
  readonly cases: AsyncCollection<CaseClient>;
  readonly Tasks: AsyncCollection<Task>;
  readonly Finances: AsyncCollection<Finance>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerConsent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Consent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly consentsToTermsAndConditions: boolean;
  readonly termsAndConditionsVersion: string;
  readonly IPAddress?: string | null;
  readonly userAgent?: string | null;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Consent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly consentsToTermsAndConditions: boolean;
  readonly termsAndConditionsVersion: string;
  readonly IPAddress?: string | null;
  readonly userAgent?: string | null;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Consent = LazyLoading extends LazyLoadingDisabled ? EagerConsent : LazyConsent

export declare const Consent: (new (init: ModelInit<Consent>) => Consent) & {
  copyOf(source: Consent, mutator: (draft: MutableModel<Consent>) => MutableModel<Consent> | void): Consent;
}

type EagerPractice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Practice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly owner: string;
  readonly Lawyers?: (PracticeLawyer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPractice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Practice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly owner: string;
  readonly Lawyers: AsyncCollection<PracticeLawyer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Practice = LazyLoading extends LazyLoadingDisabled ? EagerPractice : LazyPractice

export declare const Practice: (new (init: ModelInit<Practice>) => Practice) & {
  copyOf(source: Practice, mutator: (draft: MutableModel<Practice>) => MutableModel<Practice> | void): Practice;
}

type EagerLawyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lawyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly barAssociation?: string | null;
  readonly licenseNumber?: string | null;
  readonly practices?: (PracticeLawyer | null)[] | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly owner: string;
  readonly Tasks?: (Task | null)[] | null;
  readonly cases?: (CaseLawyer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLawyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lawyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly barAssociation?: string | null;
  readonly licenseNumber?: string | null;
  readonly practices: AsyncCollection<PracticeLawyer>;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly owner: string;
  readonly Tasks: AsyncCollection<Task>;
  readonly cases: AsyncCollection<CaseLawyer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lawyer = LazyLoading extends LazyLoadingDisabled ? EagerLawyer : LazyLawyer

export declare const Lawyer: (new (init: ModelInit<Lawyer>) => Lawyer) & {
  copyOf(source: Lawyer, mutator: (draft: MutableModel<Lawyer>) => MutableModel<Lawyer> | void): Lawyer;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoID?: string | null;
  readonly Lawyers?: (Consent | null)[] | null;
  readonly Consents?: (Consent | null)[] | null;
  readonly Clients?: (Consent | null)[] | null;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoID?: string | null;
  readonly Lawyers: AsyncCollection<Consent>;
  readonly Consents: AsyncCollection<Consent>;
  readonly Clients: AsyncCollection<Consent>;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerCaseClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseClient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseId?: string | null;
  readonly clientId?: string | null;
  readonly case: Case;
  readonly client: Client;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCaseClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseClient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseId?: string | null;
  readonly clientId?: string | null;
  readonly case: AsyncItem<Case>;
  readonly client: AsyncItem<Client>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CaseClient = LazyLoading extends LazyLoadingDisabled ? EagerCaseClient : LazyCaseClient

export declare const CaseClient: (new (init: ModelInit<CaseClient>) => CaseClient) & {
  copyOf(source: CaseClient, mutator: (draft: MutableModel<CaseClient>) => MutableModel<CaseClient> | void): CaseClient;
}

type EagerCaseLawyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseLawyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseId?: string | null;
  readonly lawyerId?: string | null;
  readonly case: Case;
  readonly lawyer: Lawyer;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCaseLawyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseLawyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly caseId?: string | null;
  readonly lawyerId?: string | null;
  readonly case: AsyncItem<Case>;
  readonly lawyer: AsyncItem<Lawyer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CaseLawyer = LazyLoading extends LazyLoadingDisabled ? EagerCaseLawyer : LazyCaseLawyer

export declare const CaseLawyer: (new (init: ModelInit<CaseLawyer>) => CaseLawyer) & {
  copyOf(source: CaseLawyer, mutator: (draft: MutableModel<CaseLawyer>) => MutableModel<CaseLawyer> | void): CaseLawyer;
}

type EagerPracticeLawyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PracticeLawyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly practiceId?: string | null;
  readonly lawyerId?: string | null;
  readonly practice: Practice;
  readonly lawyer: Lawyer;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPracticeLawyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PracticeLawyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly practiceId?: string | null;
  readonly lawyerId?: string | null;
  readonly practice: AsyncItem<Practice>;
  readonly lawyer: AsyncItem<Lawyer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PracticeLawyer = LazyLoading extends LazyLoadingDisabled ? EagerPracticeLawyer : LazyPracticeLawyer

export declare const PracticeLawyer: (new (init: ModelInit<PracticeLawyer>) => PracticeLawyer) & {
  copyOf(source: PracticeLawyer, mutator: (draft: MutableModel<PracticeLawyer>) => MutableModel<PracticeLawyer> | void): PracticeLawyer;
}