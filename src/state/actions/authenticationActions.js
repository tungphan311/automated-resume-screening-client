import { createPromiseAction } from "@adobe/redux-saga-promise";
import * as types from "./index";

export const registerUserAction = (user) => ({
  type: types.REGISTER_USER,
  payload: user
});

export const loginUserAction = (user) => ({
  type: types.LOGIN_USER,
  payload: user
});

export const verifyUserAction = (token) => ({
  type: types.VERIFY_USER,
  payload: token
});

export const logoutUserAction = () => ({
  type: types.LOGOUT
});

export const loginAction = createPromiseAction("LOGIN");
export const registerAction = createPromiseAction("REGISTER");
export const verifyAction = createPromiseAction("VERIFY");
