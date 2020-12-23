import { takeEvery, call, put } from "redux-saga/effects";
import { uploadCVAction } from "state/actions/index";
import history from "state/history";
import { toastErr } from "utils/index";
import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";
import { uploadFile } from "services/uploadServices";
import { UPLOAD_CV_SUCCESS } from "state/reducers/cvReducer";

export function* uploadCVSaga(action) {
  try {
    const formData = action.payload;

    const result = yield call(uploadFile, formData);

    yield put({ type: UPLOAD_CV_SUCCESS, response: result.data });

    yield call(resolvePromiseAction, action);

    yield history.push("/profile/review");
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export default function* cvSaga() {
  yield takeEvery(uploadCVAction, uploadCVSaga);
}
