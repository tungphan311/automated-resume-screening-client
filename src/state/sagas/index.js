import { all, call } from "redux-saga/effects";
import authSaga from "state/sagas/authSaga";
import cvSaga from "state/sagas/cvSaga";
import hrJobSaga from "state/sagas/hrJobSaga";
import { initSaga } from "state/sagas/initSaga";
import jobDomainSaga from "state/sagas/jobDomainSaga";
import companySaga from "state/sagas/companySaga";
import filterSaga from "state/sagas/filterSaga";
import profileSaga from "state/sagas/profileSaga";
import candidateJobSaga from "state/sagas/candidateJobSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    hrJobSaga(),
    jobDomainSaga(),
    initSaga(),
    cvSaga(),
    companySaga(),
    filterSaga(),
    profileSaga(),
    candidateJobSaga(),
  ]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
    // yield put(SET_CACHED_MARKER)
  } catch (error) {
    throw error;
  }
}
