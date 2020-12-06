import { createPromiseAction } from "@adobe/redux-saga-promise";
import * as types from "./index";

export const registerUserAction = (user) => ({
  type: types.REGISTER_USER,
  user
});

export const loginUserAction = (user) => ({
  type: types.LOGIN_USER,
  payload: user
});

export const loginAction = createPromiseAction("LOGIN");

export const logoutUserAction = () => ({
  type: types.LOGOUT
});
