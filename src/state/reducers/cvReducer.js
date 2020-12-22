export const UPLOAD_CV_SUCCESS = "cv/UPLOAD_CV_SUCCESS";

export const GET_PROVINCES_SUCCESS = "cv/GET_PROVINCES_SUCCESS";

export const UPDATE_CV_VALUES = "cv/UPDATE_CV_VALUES";

const initialState = {
  basic: null,
  education: null,
  experience: null,
  skill: null,
  provinces: []
};

export default function authReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case UPLOAD_CV_SUCCESS: {
      let { education, experience, skill } = action.response;

      newState.education = education.replaceAll("\n", "<br/>");
      newState.experience = experience.replaceAll("\n", "<br/>");
      newState.skill = skill.replaceAll("\n", "<br/>");

      return newState;
    }

    case GET_PROVINCES_SUCCESS:
      const { provinces } = action;

      newState.provinces = provinces;
      return newState;

    case UPDATE_CV_VALUES:
      const { key, value } = action;

      newState[key] = value;
      return newState;

    default:
      return newState;
  }
}
