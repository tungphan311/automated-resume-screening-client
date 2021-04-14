import IconInput from "components/Input/IconInput";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import "./JobSearchAdvance.scss";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SelectWithSearch from "components/SelectWithSearch/SelectWithSearch";
import { useSelector, connect } from "react-redux";
import qs from "query-string";

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
            placeholder="Job title, role, keywords,..."
          />
          <Field
            component={CustomSelect}
            name="location"
            className="col-sm-6"
            placeholder="Location"
            options={options}
            icon={<FontAwesomeIcon icon={faMapMarkerAlt} color="#555" />}
            isClearable={true}
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary btn-full-width" style={{fontWeight: 700}}>
            <SearchOutlined style={{ marginRight: "10px" }} />
            Find Jobs
          </button>
        </div>
      </div>
    </form>
  );
}

JobSearchAdvance = reduxForm({
  form: FORM_KEY_JOB_SEARCH,
  touchOnBlur: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(JobSearchAdvance);

JobSearchAdvance = connect(
  (
    state,
    {
      history: {
        location: { search }
      }
    }
  ) => {
    let { q, location } = qs.parse(search.substring(1));
    const { provinces } = state.cv;

    if (provinces.length) {
      if (location) {
        const { province_id, province_name } = provinces.find(
          (e) => e.province_id === location
        );
        location = { value: province_id, label: province_name };
      }
    }

    const initialValues = {
      job_title: q,
      location
    };

    return {
      initialValues
    };
  }
)(JobSearchAdvance);

export default JobSearchAdvance;

const CustomSelect = ({ input, ...props }) => (
  <SelectWithSearch
    selectedOption={input.value}
    onChange={input.onChange}
    {...props}
  />
);
