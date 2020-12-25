import API from "utils/axios";
import qs from "query-string";

export const addNewJob = async (job, token) =>
  await API.post("/job-posts", job, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getJobDomain = async () => await API.get("/job-domains");

export const hrGetJobs = async ({ is_hr = true }, token) => {
  const filter = qs.stringify({ is_hr });

  return await API.get(`/job-posts?${filter}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
