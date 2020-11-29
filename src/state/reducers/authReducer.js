import * as types from "../actions";

const initialState = {
  token: null
};

export default function authReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      const { access_token } = action;
      newState.token = access_token;
      return newState;

    default:
      return newState;
  }
}
