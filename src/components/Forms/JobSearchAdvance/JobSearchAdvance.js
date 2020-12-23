import IconInput from "components/Input/IconInput";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import "./JobSearchAdvance.scss";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SelectWithSearch from "components/SelectWithSearch/SelectWithSearch";
import { useSelector } from "react-redux";

function JobSearchAdvance({ handleSubmit }) {
  const provinces = useSelector((state) => state.cv.provinces);
  const options = provinces.map(({ province_id, province_name }) => ({
    value: province_id,
    label: province_name
  }));

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-10">
          <Field
            component={IconInput}
            name="job_title"
            icon={<SearchOutlined style={{ color: "#555" }} />}
            formClassName="col-sm-6 pr-10"
          />
          <Field
            component={CustomSelect}
            name="location"
            className="col-sm-6"
            placeholder="Địa điểm làm việc"
            options={options}
            icon={<FontAwesomeIcon icon={faMapMarkerAlt} color="#555" />}
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary btn-full-width">
            <SearchOutlined style={{ marginRight: "10px" }} />
            Tìm kiếm
          </button>
        </div>
      </div>
    </form>
  );
}

JobSearchAdvance = reduxForm({
  form: FORM_KEY_JOB_SEARCH,
  touchOnBlur: false
})(JobSearchAdvance);

export default JobSearchAdvance;

const CustomSelect = ({ input, ...props }) => (
  <SelectWithSearch value={input.value} onChange={input.onChange} {...props} />
);
