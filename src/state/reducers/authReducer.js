import * as types from "../actions";

const initialState = {
  candidate: {
    token: null,
    email: null
  },
  recruiter: {
    token: null,
    email: null
  }
};

export default function authReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case types.REGISTER_CANDIDATE:
    case types.REGISTER_HR:
      newState.email = action.payload.email;
      return newState;

    case types.VERIFY_USER_SUCCESS:
      return newState;

    case types.LOGIN_USER_SUCCESS:
    case types.RESIGN_TOKEN:
      const { key, token, email } = action;

      newState[key] = { token, email };
      return newState;

    case types.UPDATE_TOKEN:
      const { payload } = action;
      newState.token = payload;
      return newState;

    default:
      return newState;
  }
}
