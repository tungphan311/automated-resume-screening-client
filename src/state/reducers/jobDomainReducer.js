export const GET_JOB_DOMAIN = "GET_JOB_DOMAIN";
export const GET_JOB_DOMAIN_SUCCESS = "GET_JOB_DOMAIN_SUCCESS";

export const GET_JOB_SKILL = "GET_JOB_SKILL";
export const GET_JOB_SKILL_SUCCESS = "GET_JOB_SKILL_SUCCESS";

const initialState = {
  domains: [],
  skills: []
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

    default:
      return newState;
  }
}
