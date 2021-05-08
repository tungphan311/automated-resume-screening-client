import { takeEvery, call, put } from "redux-saga/effects";
import { getJobDomain, getJobSkill } from "services/hrJobServices";
import { getCareerRole } from "services/careerService";
import {
  GET_JOB_DOMAIN,
  GET_JOB_DOMAIN_SUCCESS,
  GET_JOB_SKILL,
  GET_JOB_SKILL_SUCCESS,
  GET_CAREER_ROLE_SUCCESS
} from "state/reducers/jobDomainReducer";
import { toastErr } from "utils/index";
import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";
import { getCareerRoleProAction } from "state/actions/careerAction";

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

export function* getCareerRoleProSaga(action) {
  try {
    const { domain_id } = action.payload;
    
    const result = yield call(getCareerRole, domain_id);
    console.log('result', result)

    const response = result.data.data;
    console.log('response', response)

    yield put({ type: GET_CAREER_ROLE_SUCCESS, response });

    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export default function* jobDomainSaga() {
  yield takeEvery(GET_JOB_DOMAIN, getJobDomainSaga);
  yield takeEvery(GET_JOB_SKILL, getJobSkillSaga);
  yield takeEvery(getCareerRoleProAction, getCareerRoleProSaga);
}
