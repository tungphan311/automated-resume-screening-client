import { call, put, takeEvery } from "redux-saga/effects";
import { loginUserService } from "services/authenticationService";
import { LOGIN_USER, LOGIN_USER_SUCCESS } from "state/actions/index";
import history from "state/history";
import { setCookie } from "utils/cookies";
import { toast, toastErr } from "utils/index";

export function* loginSaga({ payload }) {
  try {
    const result = yield call(loginUserService, payload);
    const { access_token, message } = result.data;

    yield setCookie("token", access_token, 1);
    yield put({ type: LOGIN_USER_SUCCESS, access_token });

    yield toast({ message });

    yield history.push("/");
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN_USER, loginSaga);
}
