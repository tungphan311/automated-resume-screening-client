export const GET_JOB_SIMILAR = "GET_JOB_SIMILAR";
export const GET_JOB_SIMILAR_SUCCESS = "GET_JOB_SIMILAR_SUCCESS";

const initialState = {
  candidateSimilarJob: []
};

export default function candidateJobReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case GET_JOB_SIMILAR_SUCCESS:
      const { response } = action;

      newState.candidateSimilarJob = response;
      return newState;

    default:
      return newState;
  }
}
