import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginCandidateService,
  loginHrService,
  registerCandidateService,
  registerHrService,
  verifyCandidateService,
  verifyHrService
} from "services/authenticationService";
import {
  loginCandidateProAction,
  loginHrProAction
} from "state/actions/authenticationActions";
import {
  LOGIN_CANDIDATE,
  LOGIN_HR,
  LOGIN_USER_SUCCESS,
  REGISTER_CANDIDATE,
  REGISTER_HR,
  REGISTER_USER_SUCCESS,
  VERIFY_CANDIDATE,
  VERIFY_HR,
  VERIFY_USER_SUCCESS
} from "state/actions/index";
import history from "state/history";
import { setCookie } from "utils/cookies";
import { toast, toastErr } from "utils/index";

export function* registerCandidateSaga({ payload }) {
  try {
    const response = yield call(registerCandidateService, payload);
    const { message } = response.data;

    yield [put({ type: REGISTER_USER_SUCCESS, response })];

    yield toast({ message });

    yield history.push("/confirm-mail");
  } catch (err) {
    yield toastErr(err);
  }
}

export function* registerHrSaga({ payload }) {
  try {
    const response = yield call(registerHrService, payload);
    const { message } = response.data;

    yield [put({ type: REGISTER_USER_SUCCESS, response })];

    yield toast({ message });

    yield history.push("/confirm-mail");
  } catch (err) {
    yield toastErr(err);
  }
}

export function* verifyCandidateSaga({ payload }) {
  try {
    const response = yield call(verifyCandidateService, payload);
    const { message } = response.data;

    yield [put({ type: VERIFY_USER_SUCCESS, response })];

    yield toast({ message });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* verifyHrSaga({ payload }) {
  try {
    const response = yield call(verifyHrService, payload);
    const { message } = response.data;

    yield [put({ type: VERIFY_USER_SUCCESS, response })];

    yield toast({ message });
  } catch (err) {
    yield toastErr(err);
  }
}

export function* loginCandidateSaga({ payload }) {
  try {
    const result = yield call(loginCandidateService, payload);
    const { access_token, message } = result.data;

    yield setCookie("token", access_token, 1);
    yield put({ type: LOGIN_USER_SUCCESS, access_token });

    yield toast({ message });

    yield history.push("/");
  } catch (err) {
    yield toastErr(err);
  }
}

export function* loginHrSaga({ payload }) {
  try {
    const result = yield call(loginHrService, payload);
    const { access_token, message } = result.data;

    yield setCookie("token", access_token, 1);
    yield put({ type: LOGIN_USER_SUCCESS, access_token });

    yield toast({ message });

    yield history.push("/");
  } catch (err) {
    yield toastErr(err);
  }
}

export function* loginCandidatePromiseSaga(action) {
  try {
    const { user } = action.payload;
    const result = yield call(loginCandidateService, user);
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

export function* loginHrPromiseSaga(action) {
  try {
    const { user } = action.payload;
    const result = yield call(loginHrService, user);
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
  yield takeEvery(REGISTER_CANDIDATE, registerCandidateSaga);
  yield takeEvery(REGISTER_HR, registerHrSaga);
  yield takeEvery(VERIFY_CANDIDATE, verifyCandidateSaga);
  yield takeEvery(VERIFY_HR, verifyHrSaga);

  yield takeEvery(LOGIN_CANDIDATE, loginCandidateSaga);
  yield takeEvery(LOGIN_HR, loginHrSaga);
  yield takeEvery(loginCandidateProAction, loginCandidatePromiseSaga);
  yield takeEvery(loginHrProAction, loginHrPromiseSaga);
}
