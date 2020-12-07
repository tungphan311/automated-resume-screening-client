import { combineReducers } from "redux";
import authReducer from "state/reducers/authReducer";
import register from "state/reducers/registerReducer";

export default combineReducers({
  auth: authReducer,
  register
});
