import { combineReducers } from "redux";
import { formReducer } from "state/reducers/formReducer";
import authReducer from "state/reducers/authReducer";
import jobDomainReducer from "state/reducers/jobDomainReducer";
import cvReducer from "state/reducers/cvReducer";
import profileReducer from "state/reducers/profileReducer";
import candidateJobReducer from "state/reducers/candidateJobReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  jobDomain: jobDomainReducer,
  cv: cvReducer,
  profile: profileReducer,
  candidateJob: candidateJobReducer
});
