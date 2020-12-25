import { createPromiseAction } from "@adobe/redux-saga-promise";

export const REGISTER_CANDIDATE = "REGISTER_CANDIDATE";
export const REGISTER_HR = "REGISTER_HR";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_CANDIDATE = "LOGIN_CANDIDATE";
export const LOGIN_HR = "LOGIN_HR";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const VERIFY_CANDIDATE = "VERIFY_CANDIDATE";
export const VERIFY_HR = "VERIFY_HR";
export const VERIFY_USER_SUCCESS = "VERIFY_USER_SUCCESS";

export const LOGOUT = "LOGOUT";

export const INIT_DATA = "INIT_DATA";
export const RESIGN_TOKEN = "RESIGN_TOKEN";

export const uploadCVAction = createPromiseAction("UPLOAD_CV");
export const updateHRCompanyAction = createPromiseAction("UPDATE_HR_COMPANY");
export const addCompanyAction = createPromiseAction("ADD_COMPANY");

export const UPDATE_TOKEN = "UPDATE_TOKEN";
