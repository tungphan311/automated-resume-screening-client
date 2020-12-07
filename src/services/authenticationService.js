import API from "utils/axios";

export const loginUserService = async (account) =>
  await API.post("/user/login", account);

export const registerUserService = async (account) =>
  await API.post("/user/register", account);

export const verifyUserService = async (token) =>
  await API.get(`/user/confirm/${token}`);
