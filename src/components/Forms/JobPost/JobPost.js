import Editor from "components/Editor/Editor";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import React from "react";
import { connect } from "react-redux";
import { Field, isDirty, reduxForm } from "redux-form";
import { FORM_KEY_JOB_POST } from "state/reducers/formReducer";
import { requireField } from "utils/formValidate";

const JOB_TYPES = [
  { value: "fulltime", label: "Toàn thời gian" },
  { value: "parttime", label: "Bán thời gian" },
  { value: "intern", label: "Thực tập" }
];

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
          label="Số lượng cần tuyển"
          component={Input}
          type="number"
          name="amount"
          required
          formClassName="col-md-6"
          subLabel="Nếu không giới hạn số lượng tuyển, đặt giá trị bằng 0"
          placeholder="0"
        />
        <Field
          label="Loại hình làm việc"
          component={Select}
          name="jobType"
          required
          defaultValue={JOB_TYPES[0].value}
          formClassName="col-md-6"
          placeholder="Chọn loại hình làm việc"
          options={JOB_TYPES}
        />
        <div className="col-12">
          <hr style={{ marginTop: 0 }} />
        </div>
        <Field
          label="Mô tả công việc"
          component={Editor}
          name="description"
          required
          formClassName="col-md-12"
          validate={[requireField]}
        />
        <Field
          label="Yêu cầu ứng viên"
          component={Editor}
          name="requiredSkill"
          required
          formClassName="col-md-12"
          validate={[requireField]}
        />
      </div>
    </form>
  );
}

JobPostForm = reduxForm({
  form: FORM_KEY_JOB_POST,
  touchOnBlur: false,
  touchOnChange: true
})(JobPostForm);

JobPostForm = connect((state) => ({
  shouldValidate: () => isDirty(FORM_KEY_JOB_POST)(state)
}))(JobPostForm);

export default JobPostForm;
