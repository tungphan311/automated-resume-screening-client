import API from "utils/axios";

export const getCandidateProfile = async (token) =>
  await API.get("/user/candidate/profile", {
    headers: { Authorization: `Bearer ${token}` }
  });
