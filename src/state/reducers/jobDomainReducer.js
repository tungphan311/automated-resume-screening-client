export const GET_JOB_DOMAIN = "GET_JOB_DOMAIN";
export const GET_JOB_DOMAIN_SUCCESS = "GET_JOB_DOMAIN_SUCCESS";

export const GET_JOB_SKILL = "GET_JOB_SKILL";
export const GET_JOB_SKILL_SUCCESS = "GET_JOB_SKILL_SUCCESS";

export const GET_SOFT_SKILL = "GET_SOFT_SKILL";
export const GET_SOFT_SKILL_SUCCESS = "GET_SOFT_SKILL_SUCCESS";

export const GET_CAREER_ROLE = "GET_CAREER_ROLE";
export const GET_CAREER_ROLE_SUCCESS = "GET_CAREER_ROLE_SUCCESS";

export const GET_CAREER_SKILL = " GET_CAREER_SKILL";
export const GET_CAREER_SKILL_SUCCESS = "GET_CAREER_SKILL_SUCCESS";

const initialState = {
  domains: [],
  skills: [],
  softSkills: [],
  careerDomain: {},
  careerSkill: {}
};

export default function jobDomainReducer(state = initialState, action = {}) {
  const newState = { ...state };
  const { response } = action;

  switch (action.type) {
    case GET_JOB_DOMAIN_SUCCESS:
      newState.domains = response;
      return newState;

    case GET_JOB_SKILL_SUCCESS:
      newState.skills = response;
      return newState;

    case GET_SOFT_SKILL_SUCCESS:
      newState.softSkills = response;
      return newState;

    case GET_CAREER_ROLE_SUCCESS:
      newState.careerDomain = response;
      return newState;

    case GET_CAREER_SKILL_SUCCESS:
      newState.careerSkill = response;
      return newState;

    default:
      return newState;
  }
}
