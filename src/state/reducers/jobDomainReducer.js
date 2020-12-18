export const GET_JOB_DOMAIN = "GET_JOB_DOMAIN";
export const GET_JOB_DOMAIN_SUCCESS = "GET_JOB_DOMAIN_SUCCESS";

const initialState = {
  domains: []
};

export default function jobDomainReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case GET_JOB_DOMAIN_SUCCESS:
      const { response } = action;

      newState.domains = response;
      return newState;

    default:
      return newState;
  }
}
