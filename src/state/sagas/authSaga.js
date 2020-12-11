import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginUserService,
  registerUserService,
  verifyUserService
} from "services/authenticationService";
import { loginAction } from "state/actions/authenticationActions";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  VERIFY_USER,
  VERIFY_USER_SUCCESS
} from "state/actions/index";
import history from "state/history";
import { setCookie } from "utils/cookies";
import { toast, toastErr } from "utils/index";

export function* registerSaga({ payload }) {
  try {
    const response = yield call(registerUserService, payload);
    const { message } = response.data;

    yield [put({ type: REGISTER_USER_SUCCESS, response })];

    yield toast({ message });

    yield history.push("/confirm-mail");
  } catch (err) {
    yield toastErr(err);
  }
}

export function* verifySaga({ payload }) {
  try {
    const response = yield call(verifyUserService, payload);
    const { message } = response.data;

    yield [put({ type: VERIFY_USER_SUCCESS, response })];

    yield toast({ message });
  } catch (err) {
    yield toastErr(err);
  }
}

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

export function* loginPromiseSaga(action) {
  try {
    const { user } = action.payload;
    const result = yield call(loginUserService, user);
    const { access_token, message } = result.data;

    yield setCookie("token", access_token, 1);
    yield put({ type: LOGIN_USER_SUCCESS, access_token });

    yield toast({ message });

    yield call(resolvePromiseAction, action);

    yield history.push("/");
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export default function* authSaga() {
  yield takeEvery(REGISTER_USER, registerSaga);
  yield takeEvery(VERIFY_USER, verifySaga);
  yield takeEvery(LOGIN_USER, loginSaga);
  yield takeEvery(loginAction, loginPromiseSaga);
}
