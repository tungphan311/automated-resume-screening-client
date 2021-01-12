export const GET_CANDIDATE_PROFILE = "GET_CANDIDATE_PROFILE";
export const GET_CANDIDATE_PROFILE_SUCCESS = "GET_CANDIDATE_PROFILE_SUCCESS";

const initialState = {
  candidateProfile: {}
};

export default function profileReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case GET_CANDIDATE_PROFILE_SUCCESS:
      const { response } = action;

      newState.candidateProfile = response.profile;
      return newState;

    default:
      return newState;
  }
}
