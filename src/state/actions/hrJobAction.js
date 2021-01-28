import { createPromiseAction } from "@adobe/redux-saga-promise";

export const hrPostJobAction = createPromiseAction("HR/POST_JOB");

export const hrUpdateJobAction = createPromiseAction("HR/UPDATE_JOB");

export const candidateApplyAction = createPromiseAction("CANDIDATE_APPLY");
