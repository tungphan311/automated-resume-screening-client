import * as types from "../actions";

let initialState = {
  token: null,
  isLogin: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_USER: {
      if (payload) {
        state.token = payload;
        state.isLogin = true;
      } else {
        state.token = null;
        state.isLogin = false;
      }
      return { ...state };
    }
    case types.LOGIN_USER_ERROR:
      return { ...state, payload };
    default:
      return state;
  }
}
