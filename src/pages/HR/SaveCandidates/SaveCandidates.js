import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useState } from "react";
import { Radio, DatePicker } from "antd";
import "./SaveCandidates.scss";

function HRSaveCandidates() {
  const [value, setValue] = useState({
    order: 1,
    from_date: null,
    to_date: null
  });

  const onSortChange = (e) => {
    setValue({ ...value, order: e.target.value });
  };

  function onDateChange(key, date) {
    setValue({ ...value, [key]: date });
  }

  return (
    <>
      <JobMenu menu={CANDIDATES_MENU} />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="panel panel-default search-result">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-md-6">Ứng viên đang theo dõi</div>
                  <div className="col-md-6 text-right">
                    <span style={{ marginRight: 10 }}>Ưu tiên: </span>
                    <Radio.Group onChange={onSortChange} value={value.order}>
                      <Radio value={1}>Mới theo dõi</Radio>
                      <Radio value={2}>Mới cập nhật CV</Radio>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div
                  className="well"
                  style={{ marginBottom: 0, borderRadius: 0 }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <DatePicker
                        onChange={(date) => onDateChange("from_date", date)}
                        format="DD/ MM/ YYYY"
                        placeholder="Theo dõi từ ngày"
                        size="large"
                      />
                    </div>
                    <div className="col-md-4">
                      <DatePicker
                        onChange={(date) => onDateChange("to_date", date)}
                        format="DD/ MM/ YYYY"
                        placeholder="Theo dõi đến ngày"
                        size="large"
                      />
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary">
                        <i className="fa fa-search mr-5" />
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default HRSaveCandidates;
