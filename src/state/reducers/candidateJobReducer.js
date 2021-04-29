export const GET_JOB_SIMILAR = "GET_JOB_SIMILAR";
export const GET_JOB_SIMILAR_SUCCESS = "GET_JOB_SIMILAR_SUCCESS";

export const GET_JOB_SUGGEST = "GET_JOB_SUGGEST";
export const GET_JOB_SUGGEST_SUCCESS = "GET_JOB_SUGGEST_SUCCESS";

const initialState = {
  candidateSimilarJob: [],
  candidateSuggestJob: []
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
    default:
      return newState;
  }
}
