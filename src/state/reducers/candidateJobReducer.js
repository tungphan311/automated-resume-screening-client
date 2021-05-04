export const GET_JOB_SIMILAR = "GET_JOB_SIMILAR";
export const GET_JOB_SIMILAR_SUCCESS = "GET_JOB_SIMILAR_SUCCESS";

export const GET_JOB_SUGGEST = "GET_JOB_SUGGEST";
export const GET_JOB_SUGGEST_SUCCESS = "GET_JOB_SUGGEST_SUCCESS";

export const EXPLORE_SKILLS = "EXPLORE_SKILLS";
export const EXPLORE_SKILLS_SUCCESS = "EXPLORE_SKILLS_SUCCESS";

export const RESET_SKILLS_ACTION = "RESET_SKILLS_ACTION";

const initialState = {
  candidateSimilarJob: [],
  candidateSuggestJob: {},
  candidateExploreSkills: []
};

export default function candidateJobReducer(state = initialState, action = {}) {
  const newState = { ...state };

  const { response } = action;
  
  switch (action.type) {
    case GET_JOB_SIMILAR_SUCCESS:
      newState.candidateSimilarJob = response;
      return newState;

    case GET_JOB_SUGGEST_SUCCESS:
      newState.candidateSuggestJob = response;
      return newState;

    case EXPLORE_SKILLS_SUCCESS:
      newState.candidateExploreSkills = response;
      return newState;

    case RESET_SKILLS_ACTION:
      newState.candidateExploreSkills = [];
      return newState;

    default:
      return newState;
  }
}
