import API from "utils/axios";

export const exploreSkills = async (skills, token) =>
  await API.post(
    `career/explore_skills`,
    { skills },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

export const getCareerRole = async (domain_id) =>
  await API.get(`/career/domain?domain_id=${domain_id}`);
