import API from "utils/axios";

export const candidateGetJobList = async (
  {
    is_HR = false
    // page = 1,
    // pageSize = 10,
    // posted_in = undefined,
    // deadline = undefined,
    // view = undefined,
    // apply = undefined,
    // save = undefined
  },
  token
) =>
  !is_HR
    ? await API.get("/job-posts")
    : await API.get("/job-posts", {
        headers: { Authorization: `Bearer ${token}` }
      });
