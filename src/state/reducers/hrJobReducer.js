const initialState = {};

export default function hrJobReducer(state = initialState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
}
