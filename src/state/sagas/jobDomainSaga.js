import { takeEvery, call, put } from "redux-saga/effects";
import { getJobDomain } from "services/hrJobServices";
import {
  GET_JOB_DOMAIN,
  GET_JOB_DOMAIN_SUCCESS
} from "state/reducers/jobDomainReducer";
import { toastErr } from "utils/index";

export function* getJobDomainSaga() {
  try {
    const result = yield call(getJobDomain);
    const response = result.data.data;

    yield put({ type: GET_JOB_DOMAIN_SUCCESS, response });
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* jobDomainSaga() {
  yield takeEvery(GET_JOB_DOMAIN, getJobDomainSaga);
}
