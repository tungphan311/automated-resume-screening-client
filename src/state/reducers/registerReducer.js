import * as types from "../actions";

const initialState = {
  email: null
};

export default function registerReducer(
  state = initialState,
  { type, payload }
) {
  const newState = { ...state };

  switch (type) {
    case types.REGISTER_USER:
      newState.email = payload.email;
      return newState;

    case types.VERIFY_USER_SUCCESS:
      return newState;

    default:
      return state;
  }
}
