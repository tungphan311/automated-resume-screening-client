import API from "utils/axios";

export const candidateGetResumes = async (token) =>
  await API.get("/user/candidates/resumes", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const candidateApply = async (jp_id, resume_id, token) =>
  await API.post(
    `/job-posts/${jp_id}/apply`,
    { resume_id },
    {
      headers: { Authorization: `${token}` }
    }
  );
