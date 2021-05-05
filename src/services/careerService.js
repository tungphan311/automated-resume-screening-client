import API from "utils/axios";

export const exploreSkills = async (skills, token) =>
  await API.post(
    `career/explore_skills`,
    { skills },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
