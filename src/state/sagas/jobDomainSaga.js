import { takeEvery, call, put } from "redux-saga/effects";
import { getJobDomain, getJobSkill } from "services/hrJobServices";
import {
  GET_JOB_DOMAIN,
  GET_JOB_DOMAIN_SUCCESS,
  GET_JOB_SKILL,
  GET_JOB_SKILL_SUCCESS
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

export function* getJobSkillSaga() {
  try {
    const result = yield call(getJobSkill);
    const response = result.data.data;

    yield put({ type: GET_JOB_SKILL_SUCCESS, response });
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* jobDomainSaga() {
  yield takeEvery(GET_JOB_DOMAIN, getJobDomainSaga);
  yield takeEvery(GET_JOB_SKILL, getJobSkillSaga);
}
