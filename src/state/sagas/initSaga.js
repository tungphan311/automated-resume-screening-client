import { INIT_DATA, RESIGN_TOKEN } from "state/actions/index";
import { takeEvery, put } from "redux-saga/effects";
import { toastErr } from "utils/index";
import { getCookie } from "utils/cookies";

import jwt_decode from "jwt-decode";

export function* initSaga() {
  try {
    const token = yield getCookie("token");

    if (token) {
      const {
        identity: { email }
      } = jwt_decode(token);

      yield put({ type: RESIGN_TOKEN, token, email });
    }
  } catch (err) {
    yield toastErr(String(err));
  }
}

export default function* hrJobSaga() {
  yield takeEvery(INIT_DATA, initSaga);
}
