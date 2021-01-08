import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useState } from "react";
import { Radio, DatePicker } from "antd";
import "./SaveCandidates.scss";
import { Link } from "react-router-dom";

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
                <div className="candidate-list">
                  <Candidate />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-heading">Thao tác</div>
              <div
                className="panel-body"
                style={{ padding: 30, textAlign: "center" }}
              >
                <div>
                  <button className="btn btn-danger" style={{ fontSize: 14 }}>
                    <i className="fa fa-times mr-5"></i>
                    Bỏ theo dõi tất cả
                  </button>
                  <p style={{ fontSize: 13, marginTop: 10, color: "red" }}>
                    * Chú ý: Thao tác này sẽ xoá toàn bộ danh sách theo dõi của
                    bạn và sẽ không thể hoàn tác. Nên cẩn trọng khi sử dụng!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRSaveCandidates;

const Candidate = () => (
  <div className="candidate">
    <div className="avatar">
      <img src="/assets/img/noavatar.png" alt="candidate avatar" />
    </div>
    <div className="row">
      <div className="col-md-10">
        <Link to="#" className="name">
          Phan Thanh Tùng
        </Link>
        <div>
          <u>Ngày theo dõi:</u>
          <b>{" 30/12/2020"}</b>
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: "10px" }}>
      <div className="col-md-10">
        <div className="experience">
          <i className="fa fa-briefcase"></i>
          <span>Frontend Developer - Designveloper</span>
        </div>
        <div className="education">
          <i className="fa fa-graduation-cap"></i>
          <span>University of Information Technology</span>
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: 10 }}>
      <div className="col-md-10">
        <div className="location mr-5">
          <i className="fa fa-map-marker mr-5"></i>
          Địa điểm: Hồ Chí Minh
        </div>
        <div className="location">
          <i className="fa fa-calendar-check-o mr-5"></i> Thời gian làm việc
          thực tế: 1 năm 1 tháng
        </div>
        <div className="location location-right">
          <i className="fa fa-star mr-5"></i> Mục tiêu: I've been interested in
          computer science when i was a child. I am good at imagination. I can
          read and understand documents quickly, thus i can easily apply what i
          have learned to solve the problem. With experience and knowledge
          gained during working for MegaNet (the company that i have been
          working), now i can build on my own a web-app in small or medium
          scale(with frameworks and libraries i describe in Experience section).
          My goal is becoming a Technical Architect in next 3-5 years.
        </div>
      </div>
    </div>
  </div>
);
