// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NoteType = {
  "CLIENT": "CLIENT",
  "COURT": "COURT",
  "OTHER": "OTHER"
};

const ChargeStatus = {
  "UNFILED": "UNFILED",
  "PENDING": "PENDING",
  "DISMISSED": "DISMISSED",
  "CLOSED": "CLOSED"
};

const EventType = {
  "COURT_APPEARANCE": "COURT_APPEARANCE",
  "CLIENT_MEETING": "CLIENT_MEETING",
  "STAFF_MEETING": "STAFF_MEETING",
  "EXTERNAL_MEETING": "EXTERNAL_MEETING",
  "OTHER_HOURS_BILLABLE": "OTHER_HOURS_BILLABLE"
};

const { Finance, Signup, Task, Note, Charge, Event, Case, Client, Consent, Practice, Lawyer, User, ClientEvent, CaseClient, CaseLawyer, PracticeLawyer } = initSchema(schema);

export {
  Finance,
  Signup,
  Task,
  Note,
  Charge,
  Event,
  Case,
  Client,
  Consent,
  Practice,
  Lawyer,
  User,
  ClientEvent,
  CaseClient,
  CaseLawyer,
  PracticeLawyer,
  NoteType,
  ChargeStatus,
  EventType
};