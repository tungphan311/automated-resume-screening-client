import { INIT_DATA, RESIGN_TOKEN } from "state/actions/index";
import { takeEvery, put, call } from "redux-saga/effects";
import { toastErr } from "utils/index";
import { getCookie } from "utils/cookies";
import jwt_decode from "jwt-decode";
import { getProvinces } from "services/externalServices";
import { GET_PROVINCES_SUCCESS } from "state/reducers/cvReducer";
import { getJobDomain } from "services/hrJobServices";
import { GET_JOB_DOMAIN_SUCCESS } from "state/reducers/jobDomainReducer";

export function* initSaga() {
  try {
    const recruiter_token = yield getCookie("recruiter_token");
    const candidate_token = yield getCookie("candidate_token");

    if (recruiter_token) {
      const {
        identity: { email }
      } = jwt_decode(recruiter_token);

      yield put({
        type: RESIGN_TOKEN,
        key: "recruiter",
        token: recruiter_token,
        email
      });
    }

    if (candidate_token) {
      const {
        identity: { email }
      } = jwt_decode(candidate_token);

      yield put({
        type: RESIGN_TOKEN,
        key: "candidate",
        token: candidate_token,
        email
      });
    }

    // get provinces from external API
    const result = yield call(getProvinces);
    yield put({ type: GET_PROVINCES_SUCCESS, provinces: result.data.results });

    // get all domains
    const result1 = yield call(getJobDomain);
    yield put({ type: GET_JOB_DOMAIN_SUCCESS, response: result1.data.data });
  } catch (err) {
    yield toastErr(String(err));
  }
}

export default function* hrJobSaga() {
  yield takeEvery(INIT_DATA, initSaga);
}
