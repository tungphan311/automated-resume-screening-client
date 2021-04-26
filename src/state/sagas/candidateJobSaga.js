import { takeEvery, call, put } from "redux-saga/effects";
import { getSimilarJob } from "services/jobServices";
import {
  GET_JOB_SIMILAR,
  GET_JOB_SIMILAR_SUCCESS
} from "state/reducers/candidateJobReducer";
import { toastErr } from "utils/index";

export function* getSimilarJobSaga({ payload }) {
  try {
    const result = yield call(getSimilarJob, payload);
   
    const response = result.data.data;

    yield put({ type: GET_JOB_SIMILAR_SUCCESS, response });
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* candidateJobSaga() {
  yield takeEvery(GET_JOB_SIMILAR, getSimilarJobSaga);
}
