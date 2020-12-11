import { combineReducers } from "redux";
import authReducer from "state/reducers/authReducer";

export default combineReducers({
  auth: authReducer
});
