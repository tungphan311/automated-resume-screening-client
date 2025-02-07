import DateTimePicker from "components/DateTimePicker/DateTimePicker";
import Editor from "components/Editor/Editor";
import CustomInput from "components/Input/CustomInput";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import {
  JOB_TYPES,
  MAX_SALARY,
  MIN_SALARY,
  SALARY,
  EDUCATIONS
} from "constants/index";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, formValueSelector, isDirty, reduxForm } from "redux-form";
import { FORM_KEY_JOB_POST } from "state/reducers/formReducer";
import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import {
  requiredMaxSalary,
  requiredMinSalary,
  requireField,
  requireSelect
} from "utils/formValidate";
import { allowNumberOnly } from "utils/input";

function JobPostForm({ handleSubmit, salary, id }) {
  const [state, setState] = useState({
    loading: false,
    fetch: false,
    jobDomains: []
  });

  const { loading, fetch, jobDomains } = state;

  const dispatch = useDispatch();
  const domains = useSelector((state) => state.jobDomain.domains);
  let { provinces } = useSelector((state) => state.cv);

  if (provinces) {
    provinces = provinces.map(({ province_id, province_name }) => ({
      value: province_id,
      label: province_name
    }));
  }

  useEffect(() => {
    if (!domains.length) {
      dispatch({ type: GET_JOB_DOMAIN });
      setState((curState) => ({ ...curState, loading: true }));
    } else {
      setState((curState) => ({
        ...curState,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }, []);

  if (!fetch) {
    if (domains.length && loading) {
      setState((curState) => ({
        ...curState,
        loading: false,
        fetch: true,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          label="Tiêu đề"
          component={Input}
          name="job_title"
          required
          formClassName="col-md-12"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Ngành"
          component={Select}
          loading={loading}
          name="job_domain_id"
          subLabel="Lựa chọn ngành nghề liên quan đến vị trí này"
          required
          options={jobDomains}
          formClassName="col-md-6"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Loại hình làm việc"
          component={Select}
          name="contract_type"
          required
          defaultValue={JOB_TYPES[0].value}
          formClassName="col-md-6"
          placeholder="Chọn loại hình làm việc"
          options={JOB_TYPES}
        />
        <Field
          label="Hạn chót nộp hồ sơ"
          subLabel="Sau thời gian này, tin tuyển dụng sẽ không còn được hiển thị"
          component={DateTimePicker}
          showTime={{ format: "HH:mm" }}
          name="deadline"
          required
          formClassName="col-md-6"
          placeholder="VD: Frontend Developer"
          validate={[requireField]}
        />
        <Field
          label="Số lượng cần tuyển"
          component={Input}
          type="number"
          name="amount"
          formClassName="col-md-6"
          subLabel="Để trống mục này nếu không giới hạn số lượng cần tuyển"
          placeholder="0"
        />

        <Field
          label="Học vấn"
          component={Select}
          name="education_level"
          options={EDUCATIONS}
          formClassName="col-md-6"
          defaultValue={EDUCATIONS[0].value}
        />
        <Field
          label="Nơi làm việc (có thể chọn nhiều hơn 1 tỉnh/thành)"
          component={Select}
          loading={loading}
          name="provinces"
          mode="multiple"
          defaultValue={[]}
          required
          options={provinces}
          formClassName="col-md-6"
          validate={[requireSelect]}
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
              name="min_salary"
              required
              formClassName={`w-47 ${
                MIN_SALARY.includes(salary) ? "" : "d-none"
              }`}
              className="text-right"
              append="triệu"
              onKeyPress={allowNumberOnly}
              validate={[requiredMinSalary]}
            />
            <span
              id="salary-separator"
              className={`${salary === "between" ? "d-inline" : "d-none"}`}
            >
              -
            </span>
            <Field
              component={CustomInput}
              name="max_salary"
              required
              formClassName={`w-47 ${
                MAX_SALARY.includes(salary) ? "" : "d-none"
              }`}
              className="text-right"
              append="triệu"
              validate={[requiredMaxSalary]}
            />
          </div>
        </div>
        <div className="col-12">
          <hr style={{ marginTop: 0 }} />
        </div>
        <Field
          label="Mô tả công việc"
          component={Editor}
          name="description_text"
          required
          formClassName="col-md-12"
          validate={[requireField]}
        />
        <Field
          label="Yêu cầu ứng viên"
          component={Editor}
          name="requirement_text"
          required
          formClassName="col-md-12"
          validate={[requireField]}
        />
        <Field
          label="Quyền lợi ứng viên"
          component={Editor}
          name="benefit_text"
          required
          formClassName="col-md-12"
          validate={[requireField]}
        />
        <div className="form-group col-md-12 text-center">
          <button type="submit" className="btn btn-primary">
            {id ? "Cập nhật thông tin" : "Đăng tin tuyển dụng"}
          </button>
        </div>
      </div>
    </form>
  );
}

JobPostForm = reduxForm({
  form: FORM_KEY_JOB_POST,
  touchOnBlur: false,
  enableReinitialize: true
})(JobPostForm);

const selector = formValueSelector(FORM_KEY_JOB_POST);

JobPostForm = connect((state, props) => {
  let { job, id } = props;

  if (id) {
    const {
      min_salary,
      max_salary,
      education_level,
      description,
      requirement,
      benefit,
      contract_type_id
    } = job;

    if (!min_salary) {
      if (!max_salary) {
        job.salary = "deal";
      } else {
        job.salary = "upto";
      }
    } else {
      if (!max_salary) {
        job.salary = "from";
      } else {
        job.salary = "between";
      }
    }

    job.education = education_level;
    job.description_text = description;
    job.requirement_text = requirement;
    job.benefit_text = benefit;
    job.contract_type = contract_type_id;
  } else {
    job = {};
  }

  return {
    shouldValidate: () => isDirty(FORM_KEY_JOB_POST)(state),
    salary: selector(state, "salary"),
    initialValues: job
  };
})(JobPostForm);

export default JobPostForm;
