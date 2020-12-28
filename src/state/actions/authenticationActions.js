import { createPromiseAction } from "@adobe/redux-saga-promise";
import * as types from "./index";

export const registerCandidateAction = (user) => ({
  type: types.REGISTER_CANDIDATE,
  payload: user
});

export const registerHrAction = (user) => ({
  type: types.REGISTER_HR,
  payload: user
});

export const loginCandidateAction = (user) => ({
  type: types.LOGIN_CANDIDATE,
  payload: user
});

export const loginHrAction = (user) => ({
  type: types.LOGIN_HR,
  payload: user
});

export const verifyCandidateAction = (token) => ({
  type: types.VERIFY_CANDIDATE,
  payload: token
});

export const verifyHrAction = (token) => ({
  type: types.VERIFY_HR,
  payload: token
});

export const logoutUserAction = (key) => ({
  type: types.LOGOUT,
  key
});

export const loginCandidateProAction = createPromiseAction("LOGIN_CANDIDATE");
export const loginHrProAction = createPromiseAction("LOGIN_HR");
export const registerAction = createPromiseAction("REGISTER");
export const verifyAction = createPromiseAction("VERIFY");
