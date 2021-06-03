import IconInput from "components/Input/IconInput";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import "../JobSearchAdvance/JobSearchAdvance.scss";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SelectWithSearch from "components/SelectWithSearch/SelectWithSearch";
import { useSelector, connect } from "react-redux";
import qs from "query-string";
import history from "state/history";
import { Radio } from "antd";
import React, { useState } from "react";
import "../JobSearch/JobSearch.scss";
import Select from "react-select";

function JobSearchClick() {
  const [location, setLocation] = useState(null);
  const [job_title, setJobTile] = useState(null);

  const provinces = useSelector((state) => state.cv.provinces);
  const options = provinces.map(({ province_id, province_name }) => ({
    value: province_id,
    label: province_name
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const filter = {
      q: job_title || null,
      location: location ? location.value : null
    };

    const query = qs.stringify(filter, { skipNull: true });

    history.push(`/find-jobs?${query}`);
  };

  return (
    <form className=" mx-auto bg-white rounded shadow-sm">
      <div className="row">
        <div className="col-sm-10">
          <div className="col-sm-6 pr-10">
            <input
              type="text"
              value={job_title}
              onChange={(e) => setJobTile(e.target.value)}
              placeholder="Enter job title, role, keywords,..."
              className="form-control "
            />
          </div>
          <div className="col-sm-6">
            <Select
              options={options}
              value={location}
              onChange={(value) => setLocation(value)}
              placeholder="Enter location..."
              menuPosition="fixed"
              isClearable={true}
              className=""
            />
          </div>
        </div>
        <div className="col-sm-2">
          <button
            onClick={handleSubmit}
            className="btn btn-primary btn-full-width"
            style={{ fontWeight: 700 }}
          >
            <SearchOutlined style={{ marginRight: "10px" }} />
            Find Jobs
          </button>
        </div>
      </div>
    </form>
    // <form>
    //   <div className="row">
    //     <div className="col-sm-10">
    //       <Field
    //         component={IconInput}
    //         name="job_title"
    //         icon={<SearchOutlined style={{ color: "#555" }} />}
    //         formClassName="col-sm-6 pr-10"
    //         placeholder="Job title, role, keywords,..."
    //       />
    //       <Field
    //         component={CustomSelect}
    //         name="location"
    //         className="col-sm-6"
    //         placeholder="Location"
    //         options={options}
    //         icon={<FontAwesomeIcon icon={faMapMarkerAlt} color="#555" />}
    //         isClearable={true}
    //       />
    //     </div>
    //     <div className="col-sm-2">
    //       <button
    //         // onClick={handleClick}
    //         className="btn btn-primary btn-full-width"
    //         style={{ fontWeight: 700 }}
    //       >
    //         <SearchOutlined style={{ marginRight: "10px" }} />
    //         Find Jobs
    //       </button>
    //     </div>
    //   </div>
    // </form>
  );
}
export default JobSearchClick;

const CustomSelect = ({ input, ...props }) => (
  <SelectWithSearch
    selectedOption={input.value}
    onChange={input.onChange}
    {...props}
  />
);
