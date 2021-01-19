import { takeEvery, call, select, put } from "redux-saga/effects";
import {
  uploadCVAction,
  updateCVAction,
  updateCVProfileAction
} from "state/actions/index";
import history from "state/history";
import { toast, toastErr } from "utils/index";
import {
  rejectPromiseAction,
  resolvePromiseAction
} from "@adobe/redux-saga-promise";
import { updateCV, uploadFile } from "services/uploadServices";
import { UPLOAD_CV_SUCCESS } from "state/reducers/cvReducer";

export function* uploadCVSaga(action) {
  try {
    const formData = action.payload;

    const { token } = yield select((state) => state.auth.candidate);

    const result = yield call(uploadFile, formData, token);

    yield put({ type: UPLOAD_CV_SUCCESS, response: result.data.data });

    yield history.push("/profile/review");
    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export function* updateResumeSaga(action) {
  try {
    const { values, domain } = action.payload;

    const { education, experience, id, months_of_experience } = yield select(
      (state) => state.cv
    );
    const { token } = yield select((state) => state.auth.candidate);

    const data = {
      resume_id: id,
      educations: education,
      experiences: experience,
      skills: values.join("|"),
      months_of_experience,
      job_domain_id: domain
    };

    const result = yield call(updateCV, data, token);
    const { message } = result.data;

    yield toast({ message });

    yield history.push("/profile");

    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export function* updateCVProfileSaga(action) {
  try {
    const {
      resumeId,
      values,
      domain,
      education,
      experience,
      monthEx
    } = action.payload;

    const { token } = yield select((state) => state.auth.candidate);

    const data = {
      resume_id: resumeId,
      educations: education,
      experiences: experience,
      skills: values.join("|"),
      months_of_experience: monthEx,
      job_domain_id: domain
    };

    const result = yield call(updateCV, data, token);
    const { message } = result.data;

    yield toast({ message });

    yield call(resolvePromiseAction, action);
  } catch (err) {
    yield toastErr(err);
    yield call(rejectPromiseAction, action);
  }
}

export default function* cvSaga() {
  yield takeEvery(uploadCVAction, uploadCVSaga);
  yield takeEvery(updateCVAction, updateResumeSaga);
  yield takeEvery(updateCVProfileAction, updateCVProfileSaga);
}
