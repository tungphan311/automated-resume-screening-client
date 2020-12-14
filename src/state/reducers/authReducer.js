import * as types from "../actions";

const initialState = {
  token: null,
  email: null
};

export default function authReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      const { access_token } = action;
      newState.token = access_token;
      return newState;

    case types.REGISTER_CANDIDATE:
    case types.REGISTER_HR:
      newState.email = action.payload.email;
      return newState;

    case types.VERIFY_USER_SUCCESS:
      return newState;

    default:
      return newState;
  }
}
