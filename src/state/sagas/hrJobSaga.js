import { takeEvery, select, call } from "redux-saga/effects";
import { HR_POST_JOB } from "state/reducers/hrJobReducer";
import { toastErr } from "utils/index";
import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_POST } from "state/reducers/formReducer";
import { addNewJob } from "services/hrJobServices";

export function* postJobSaga() {
  try {
    const form = yield select((state) =>
      getFormValues(FORM_KEY_JOB_POST)(state)
    );

    const { token, email } = yield select((state) => state.auth);

    const formValue = {
      ...form,
      recruiter_email: email,
      amount: parseInt(form.amount)
    };

    const result = yield call(addNewJob, formValue, token);
    console.log(result.data);
  } catch (err) {
    yield toastErr(String(err));
  }
}

export default function* hrJobSaga() {
  yield takeEvery(HR_POST_JOB, postJobSaga);
}
