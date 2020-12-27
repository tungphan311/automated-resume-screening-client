import API from "utils/axios";
import qs from "query-string";

export const findJobs = async (
  page,
  pageSize,
  job_title,
  province_id,
  posted_date,
  contract_type
) => {
  const query = qs.stringify(
    {
      page,
      "page-size": pageSize,
      q: job_title || undefined,
      province_id: province_id || undefined,
      posted_date: posted_date || undefined,
      contract_type: contract_type || undefined
    },
    { skipNull: true }
  );

  return await API.post(`/job-posts/cand?${query}`);
};
