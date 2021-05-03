import { takeEvery, call, put, select } from "redux-saga/effects";
import { getSimilarJob, getSuggestJob } from "services/jobServices";
import {
  GET_JOB_SIMILAR,
  GET_JOB_SIMILAR_SUCCESS,
  GET_JOB_SUGGEST_SUCCESS
} from "state/reducers/candidateJobReducer";
import { toastErr } from "utils/index";
import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";

import { candidateJobSuggestProAction } from "state/actions/candidateJobAction";
export function* getSimilarJobSaga({ payload }) {
  try {
    const result = yield call(getSimilarJob, payload);

    const response = result.data.data;

    yield put({ type: GET_JOB_SIMILAR_SUCCESS, response });
  } catch (err) {
    // yield toastErr(err);
  }
}

export function* getSuggestJobProSaga(action) {
  try {
    const { domain_id, province_id, page } = action.payload;

    const { token } = yield select((state) => state.auth.candidate);

    const result = yield call(getSuggestJob, domain_id, province_id, page, token);

    const response = result.data;

    yield put({ type: GET_JOB_SUGGEST_SUCCESS, response });
    yield call(resolvePromiseAction, action);
  } catch (err) {
    // yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export default function* candidateJobSaga() {
  yield takeEvery(GET_JOB_SIMILAR, getSimilarJobSaga);
  yield takeEvery(candidateJobSuggestProAction, getSuggestJobProSaga);
}
