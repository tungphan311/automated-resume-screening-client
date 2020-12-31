import { createPromiseAction } from "@adobe/redux-saga-promise";
import * as types from "./index";

export const candidateProfileAction = (token) => ({
  type: types.GET_CANDIDATE_PROFILE,
  payload: token
});

export const candidateProfileProAction = createPromiseAction(
  "GET_CANDIDATE_PROFILE"
);
