import API from "utils/axios";
import qs from "query-string";

export const findJobs = async (page = 1, pageSize = 10) => {
  const query = qs.stringify({ page, "page-size": pageSize });

  return await API.post(`/job-posts/cand?${query}`);
};
