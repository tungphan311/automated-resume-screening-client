import { all, call } from "redux-saga/effects";
import authSaga from "state/sagas/authSaga";

export default function* rootSaga() {
  yield all([authSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
    // yield put(SET_CACHED_MARKER)
  } catch (error) {
    throw error;
  }
}
