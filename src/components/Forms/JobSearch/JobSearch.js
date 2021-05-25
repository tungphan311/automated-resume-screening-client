import { SearchOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import React, { useState } from "react";
import "./JobSearch.scss";
import Select from "react-select";
import { useSelector } from "react-redux";
import history from "state/history";
import qs from "query-string";

const OPTIONS = [
  { label: "Toàn thời gian", value: 0 },
  { label: "Bán thời gian", value: 1 },
  { label: "Thực tập", value: 2 }
];

function JobSearch() {
  const [jobTypeChecked, setJobTypeChecked] = useState(null);
  const [location, setLocation] = useState(null);
  const [job_title, setJobTile] = useState(null);

  const provinces = useSelector((state) => state.cv.provinces);
  const options = provinces.map(({ province_id, province_name }) => ({
    value: province_id,
    label: province_name
  }));

  const onChange = (checkedValues) => setJobTypeChecked(checkedValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contract_type = jobTypeChecked ? jobTypeChecked.target.value : null;

    const filter = {
      contract_type,
      q: job_title || null,
      location: location ? location.value : null
    };

    const query = qs.stringify(filter, { skipNull: true });

    history.push(`/find-jobs?${query}`);
  };

  return (
    <form className="w-lg-80 mx-auto bg-white rounded shadow-sm">
      <div className="d-md-flex justify-content-between align-items-stretch">
        <div className="flex-grow-1">
          <div className="row no-gutters">
            <div className="col-md-7">
              <input
                type="text"
                value={job_title}
                onChange={(e) => setJobTile(e.target.value)}
                placeholder="Please choose your role you want to apply"
                className="form-control form-control-lg rounded-bottom-0 rounded-md-right-0 border-left-0 border-top-0"
              />
            </div>
            <div className="col-md-5">
              <Select
                options={options}
                value={location}
                onChange={(value) => setLocation(value)}
                placeholder="Location"
                menuPosition="fixed"
                isClearable={true}
                className="form-control form-control-lg rounded-0 border-left-0 border-right-0 border-top-0 align-item-center"
                classNamePrefix="home-select"
              />
            </div>
          </div>
          <div className="d-lg-flex justify-content-between px-3 px-lg-4 py-3">
            <div className="md-3 mb-lg-0">
              <Radio.Group
                options={OPTIONS}
                defaultValue={jobTypeChecked}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="px-3 pb-3 px-md-0 pb-md-0">
          <button
            type="submit"
            className="btn btn-primary d-block w-100 h-md-100 rounded-md-left-0 btn-search"
            onClick={handleSubmit}
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
    </form>
  );
}

export default JobSearch;
