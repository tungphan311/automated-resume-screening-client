import { takeEvery, call, select } from "redux-saga/effects";
import { addNewFilter, updateFilter } from "services/filterServices";
import { addNewFilterAction, updateFilterAction } from "state/actions/index";
import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";
import { toast, toastErr } from "utils/index";
import history from "state/history";

export function* addFilterSaga(action) {
  try {
    const values = action.payload;
    const { token } = yield select((state) => state.auth.recruiter);
    const result = yield call(addNewFilter, values, token);
    const { message, data } = result.data;

    yield toast({ message });

    yield history.push(`/recruiter/find-candidates/${data}`);

    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export function* updateFilterSaga(action) {
  try {
    const { values, id } = action.payload;
    const { token } = yield select((state) => state.auth.recruiter);
    const result = yield call(updateFilter, id, values, token);
    const { message } = result.data;

    yield toast({ message });

    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export default function* filterSaga() {
  yield takeEvery(addNewFilterAction, addFilterSaga);
  yield takeEvery(updateFilterAction, updateFilterSaga);
}
