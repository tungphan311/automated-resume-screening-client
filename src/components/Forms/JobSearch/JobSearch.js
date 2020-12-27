import { SearchOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import React, { useState } from "react";
import "./JobSearch.scss";

const OPTIONS = [
  { label: "Toàn thời gian", value: "fulltime" },
  { label: "Bán thời gian", value: "parttime" },
  { label: "Thực tập", value: "intern" }
];

function JobSearch() {
  const [jobTypeChecked, setJobTypeChecked] = useState([]);

  const onChange = (checkedValues) => setJobTypeChecked(checkedValues);

  return (
    <form className="w-lg-80 mx-auto bg-white rounded shadow-sm">
      <div className="d-md-flex justify-content-between align-items-stretch">
        <div className="flex-grow-1">
          <div className="row no-gutters">
            <div className="col-md-7">
              <input
                type="text"
                placeholder="Tên công việc, kỹ năng hay công ty bạn muốn ứng tuyển"
                className="form-control form-control-lg rounded-bottom-0 rounded-md-right-0 border-left-0 border-top-0"
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                placeholder="Địa điểm làm việc"
                className="form-control form-control-lg rounded-0 border-left-0 border-right-0 border-top-0"
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
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
    </form>
  );
}

export default JobSearch;
