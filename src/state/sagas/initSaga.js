import { INIT_DATA, RESIGN_TOKEN } from "state/actions/index";
import { takeEvery, put, call } from "redux-saga/effects";
import { toastErr } from "utils/index";
import { getCookie } from "utils/cookies";
import jwt_decode from "jwt-decode";
import { getProvinces } from "services/externalServices";
import { GET_PROVINCES_SUCCESS } from "state/reducers/cvReducer";

export function* initSaga() {
  try {
    const token = yield getCookie("token");

    if (token) {
      const {
        identity: { email }
      } = jwt_decode(token);

      yield put({ type: RESIGN_TOKEN, token, email });
    }

    const result = yield call(getProvinces);

    yield put({ type: GET_PROVINCES_SUCCESS, provinces: result.data.results });
  } catch (err) {
    yield toastErr(String(err));
  }
}

export default function* hrJobSaga() {
  yield takeEvery(INIT_DATA, initSaga);
}
