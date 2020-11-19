import { combineReducers } from "redux";
import { formReducer } from "state/reducers/formReducer";

export default combineReducers({
  form: formReducer
});
