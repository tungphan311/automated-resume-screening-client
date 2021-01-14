import API from "utils/axios";
import qs from "query-string";

export const addNewJob = async (job, token) =>
  await API.post("/job-posts", job, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getJobDomain = async () => await API.get("/job-domains");

export const hrGetJobs = async (
  {
    page = 1,
    pageSize = 10,
    is_hr = true,
    posted_in = undefined,
    deadline = undefined,
    view = undefined,
    apply = undefined,
    save = undefined
  },
  is_showing,
  token
) => {
  const filter = qs.stringify(
    {
      page,
      "page-size": pageSize,
      is_hr,
      posted_in,
      deadline,
      view,
      apply,
      save,
      is_showing
    },
    { skipNull: true }
  );

  return await API.get(`/job-posts?${filter}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const hrGetJobCount = async (token) =>
  await API.get("/job-posts/count", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const hrGetJobDetail = async (id, token) =>
  await API.get(`/job-posts/${id}?is_hr=true`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteJobPost = async (ids, token) => {
  const params = qs.stringify({ ids }, { arrayFormat: "comma" });

  return await API.delete(`/job-posts?${params}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getMajors = async () => await API.get("/majors");
