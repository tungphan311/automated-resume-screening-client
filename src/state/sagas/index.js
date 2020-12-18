import { all, call } from "redux-saga/effects";
import authSaga from "state/sagas/authSaga";
import hrJobSaga from "state/sagas/hrJobSaga";
import { initSaga } from "state/sagas/initSaga";
import jobDomainSaga from "state/sagas/jobDomainSaga";

export default function* rootSaga() {
  yield all([authSaga(), hrJobSaga(), jobDomainSaga(), initSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
    // yield put(SET_CACHED_MARKER)
  } catch (error) {
    throw error;
  }
}
