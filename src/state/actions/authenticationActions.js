import * as types from "./index";

export const registerUserAction = (user) => ({
  type: types.REGISTER_USER,
  user
});

export const loginUserAction = (user) => ({
  type: types.LOGIN_USER,
  payload: user
});

export const logoutUserAction = () => ({
  type: types.LOGOUT
});
