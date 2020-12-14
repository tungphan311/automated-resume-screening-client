import API from "utils/axios";

export const loginCandidateService = async (account) =>
  await API.post("/user/candidate/login", account);

export const loginHrService = async (account) =>
  await API.post("/user/recruiter/login", account);

export const registerCandidateService = async (account) =>
  await API.post("/user/candidate/register", account);

export const registerHrService = async (account) =>
  await API.post("/user/recruiter/register", account);

export const verifyCandidateService = async (token) =>
  await API.get(`/user/candidate/confirm/${token}`);

export const verifyHrService = async (token) =>
  await API.get(`/user/recruiter/confirm/${token}`);
