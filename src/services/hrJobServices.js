import API from "utils/axios";

export const addNewJob = async (job, token) =>
  await API.post("/job-posts", job, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getJobDomain = async () => await API.get("/job-domains");
