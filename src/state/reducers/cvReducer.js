export const UPLOAD_CV_SUCCESS = "cv/UPLOAD_CV_SUCCESS";

export const GET_PROVINCES_SUCCESS = "cv/GET_PROVINCES_SUCCESS";

export const UPDATE_CV_VALUES = "cv/UPDATE_CV_VALUES";

const initialState = {
  id: null,
  education: null,
  experience: null,
  skill: null,
  softSkill: null,
  provinces: []
};

export default function authReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case UPLOAD_CV_SUCCESS: {
      let { educations, experiences, technical_skills, soft_skills, id } = action.response;

      newState.education = educations.replaceAll("\n", "<br/>");
      newState.experience = experiences.replaceAll("\n", "<br/>");
      newState.skill = technical_skills.split("|");
      newState.softSkill = soft_skills.split("|");
      newState.id = id;

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
