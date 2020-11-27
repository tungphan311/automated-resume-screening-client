import Editor from "components/Editor/Editor";
import Input from "components/Input/Input";
import React from "react";
import { connect } from "react-redux";
import { Field, isDirty, reduxForm } from "redux-form";
import { FORM_KEY_JOB_POST } from "state/reducers/formReducer";
import { requireField } from "utils/formValidate";

function JobPostForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          label="Tiêu đề"
          component={Input}
          name="title"
          required
          formClassName="col-md-12"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Địa điểm làm việc"
          component={Input}
          name="location"
          formClassName="col-md-12"
          placeholder="VD: KP6, P. Linh Trung, Q. Thủ Đức, HCM"
        />
        <Field
          label="Mô tả công việc"
          component={Editor}
          name="description"
          required
          formClassName="col-md-12"
          placeholder="VD: KP6, P. Linh Trung, Q. Thủ Đức, HCM"
        />
      </div>
    </form>
  );
}

JobPostForm = reduxForm({
  form: FORM_KEY_JOB_POST,
  touchOnBlur: false
})(JobPostForm);

JobPostForm = connect((state) => ({
  shouldValidate: () => isDirty(FORM_KEY_JOB_POST)(state)
}))(JobPostForm);

export default JobPostForm;
