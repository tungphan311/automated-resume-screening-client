import Editor from "components/Editor/Editor";
import CustomInput from "components/Input/CustomInput";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import { EXPERIENCES, JOB_TYPES, SALARY } from "constants/index";
import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, isDirty, reduxForm } from "redux-form";
import { FORM_KEY_JOB_POST } from "state/reducers/formReducer";
import { requireField } from "utils/formValidate";
import { allowNumberOnly } from "utils/input";

const MIN_SALARY = ["from", "between"];
const MAX_SALARY = ["upto", "between"];

function JobPostForm({ handleSubmit, salary }) {
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
        <Field
          label="Kinh nghiệm"
          component={Select}
          name="experiences"
          required
          defaultValue={EXPERIENCES[0].value}
          formClassName="col-md-6"
          options={EXPERIENCES}
        />
        <Field
          label="Lương"
          component={Select}
          name="salary"
          required
          defaultValue={SALARY[0].value}
          formClassName="col-md-6"
          options={SALARY}
        />
        <div
          className={`col-md-6 form-group ${salary !== "deal" ? "" : "d-none"}`}
        >
          <label>(Đơn vị VNĐ)</label>
          <br />
          <div className="d-flex align-center">
            <Field
              component={CustomInput}
              name="minSalary"
              required
              formClassName={`w-47 ${
                MIN_SALARY.includes(salary) ? "" : "d-none"
              }`}
              className="text-right"
              append="₫"
              onKeyPress={allowNumberOnly}
            />
            <span
              id="salary-separator"
              className={`${salary === "between" ? "d-inline" : "d-none"}`}
            >
              -
            </span>
            <Field
              component={CustomInput}
              name="maxSalary"
              required
              formClassName={`w-47 ${
                MAX_SALARY.includes(salary) ? "" : "d-none"
              }`}
              className="text-right"
              append="₫"
            />
          </div>
        </div>
        <div className="col-12">
          <hr style={{ marginTop: 0 }} />
        </div>
        <Field
          label="Hạn chót nộp hồ sơ"
          subLabel="Sau ngày này, tin tuyển dụng sẽ không còn được hiển thị"
          component={Input}
          name="endDate"
          required
          formClassName="col-md-6"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Tên người nhận hồ sơ"
          subLabel="Tên người nhận hồ sơ ứng tuyển để ứng viên tiện xưng hô"
          component={Input}
          name="hrName"
          required
          formClassName="col-md-6"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Email nhận thông báo"
          subLabel="Các thông báo về tin tuyển dụng sẽ được gửi đến email này"
          component={Input}
          name="hrEmail"
          required
          formClassName="col-md-6"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Số điện thoại"
          subLabel="Số điện thoại nhà tuyển dụng để ứng viên liên hệ khi cần thiết"
          component={Input}
          name="hrPhone"
          required
          formClassName="col-md-6"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
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
        <Field
          label="Quyền lợi ứng viên"
          component={Editor}
          name="benefit"
          required
          formClassName="col-md-12"
          validate={[requireField]}
        />
        <div className="form-group col-md-12 text-center">
          <button type="submit" className="btn btn-primary">
            Đăng tin
          </button>
        </div>
      </div>
    </form>
  );
}

JobPostForm = reduxForm({
  form: FORM_KEY_JOB_POST,
  touchOnBlur: false,
  touchOnChange: true
})(JobPostForm);

const selector = formValueSelector(FORM_KEY_JOB_POST);

JobPostForm = connect((state) => ({
  shouldValidate: () => isDirty(FORM_KEY_JOB_POST)(state),
  salary: selector(state, "salary")
}))(JobPostForm);

export default JobPostForm;
