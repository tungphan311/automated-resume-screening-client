import API from "utils/axios";

export const candidateGetProfile = async (token) =>
  await API.get("/user/candidate/profile", {
    headers: { Authorization: `Bearer ${token}` }
  });
