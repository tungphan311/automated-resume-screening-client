import API from "utils/axios";
import qs from "query-string";

export const addNewFilter = async (values, token) =>
  await API.post("/filters", values, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const updateFilter = async (id, values, token) =>
  await API.put(`/filters/${id}`, values, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteFilter = async (ids, token) => {
  const params = qs.stringify({ ids }, { arrayFormat: "comma" });

  return await API.delete(`/filters?${params}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getListFilter = async (page, token) =>
  await API.get(`/filters?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getFilterDetail = async (id, token) =>
  await API.get(`/filters/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getCandidates = async (
  {
    page = 1,
    job_domains,
    provinces,
    atleast_skills,
    required_skills,
    not_allowed_skills,
    min_year,
    max_year,
    gender,
    months_of_experience
  },
  token
) => {
  const query = qs.stringify(
    {
      page,
      job_domains: job_domains || undefined,
      provinces: provinces || undefined,
      atleast_skills: atleast_skills || undefined,
      required_skills: required_skills || undefined,
      not_allowed_skills: not_allowed_skills || undefined,
      min_year: min_year || undefined,
      max_year: max_year || undefined,
      gender: gender || undefined,
      months_of_experience: months_of_experience || undefined
    },
    { skipNull: true, arrayFormat: "comma" }
  );

  return await API.get(`/filters/candidates?${query}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getSaveCandidates = async ({
  page = 1,
  from = undefined,
  to = undefined,
  token
}) => {
  const query = qs.stringify(
    {
      page,
      "from-date": from,
      "to-date": to
    },
    { skipNull: true }
  );

  return await API.get(`/user/recruiter/save-resumes?${query}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const saveCandidate = async (resume_id, status, token) =>
  await API.post(
    "/user/recruiter/save-resumes",
    {
      resume_id,
      status
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
