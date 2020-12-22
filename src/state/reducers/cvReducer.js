export const UPLOAD_CV_SUCCESS = "cv/UPLOAD_CV_SUCCESS";

const initialState = {
  education: null,
  experience: null,
  skill: null,
  award: null
};

export default function authReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case UPLOAD_CV_SUCCESS: {
      const { education, experience, skill, award } = action.response;
      newState.education = education;
      newState.experience = experience;
      newState.award = award;
      newState.skill = skill;

      return newState;
    }
    default:
      return newState;
  }
}
