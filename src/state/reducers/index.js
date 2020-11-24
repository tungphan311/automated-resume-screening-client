import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";

export default combineReducers({
  register,
  login
});
