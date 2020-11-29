import API from "utils/axios";

export const loginUserService = async (account) =>
  await API.post("/user/login", account);
