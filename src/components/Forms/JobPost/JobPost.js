import Input from "components/Input/Input";
import React from "react";
import { Field, reduxForm } from "redux-form";
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
          placeholder="VD: Tuyển Frontend Developer"
          validate={[requireField]}
        />
      </div>
    </form>
  );
}

JobPostForm = reduxForm({
  form: FORM_KEY_JOB_POST,
  touchOnBlur: false
})(JobPostForm);

export default JobPostForm;
