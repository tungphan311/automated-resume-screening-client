import { UPDATE_HR_COMPANY } from "state/actions/index";
import { takeEvery, select, call, put } from "redux-saga/effects";
import history from "state/history";
import { toastErr } from "utils/index";
import { updateCompany } from "services/companyServices";
import { UPDATE_TOKEN } from "state/actions/index";
import { setCookie } from "utils/cookies";

export function* updateHRSaga({ id }) {
  try {
    const { token } = yield select((state) => state.auth);

    const result = yield call(updateCompany, id, token);

    const newToken = result.data.data;

    yield put({ type: UPDATE_TOKEN, payload: newToken });

    yield setCookie("token", newToken, 1);

    yield history.push("/recruitment/jobs");
  } catch (err) {
    yield toastErr(err);
  }
}

export default function* companySaga() {
  yield takeEvery(UPDATE_HR_COMPANY, updateHRSaga);
}
