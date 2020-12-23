import { combineReducers } from "redux";
import { formReducer } from "state/reducers/formReducer";
import authReducer from "state/reducers/authReducer";
import jobDomainReducer from "state/reducers/jobDomainReducer";
import cvReducer from "state/reducers/cvReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  jobDomain: jobDomainReducer,
  cv: cvReducer
});
