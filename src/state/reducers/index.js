import { combineReducers } from "redux";
import authReducer from "state/reducers/authReducer";
import { formReducer } from "state/reducers/formReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
