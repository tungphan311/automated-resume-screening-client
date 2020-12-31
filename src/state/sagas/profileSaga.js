import { takeEvery, call, put } from "redux-saga/effects";
import { getCandidateProfile } from "services/candidateProfileServices";
import {
  GET_CANDIDATE_PROFILE,
  GET_CANDIDATE_PROFILE_SUCCESS
} from "state/reducers/profileReducer";
import { toastErr } from "utils/index";

export function* getCandidateProfileSaga({ payload }) {
  try {
    const result = yield call(getCandidateProfile, payload);

    const response = result.data.data;

    yield put({ type: GET_CANDIDATE_PROFILE_SUCCESS, response });
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* candidateProfileSaga() {
  yield takeEvery(GET_CANDIDATE_PROFILE, getCandidateProfileSaga);
}
