import OutsideClickWrapper from "components/OutsideClickWrapper/OutsideClickWrapper";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Select } from "antd";
import { SORTS } from "constants/index";

function HRJobPostCandidates() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Filter />
        </div>
        <div className="col-md-9">
          <div className="panel panel-default search-result">
            <div className="panel-body">
              <div className="results-stats">
                <strong>1 - 12</strong>
                {" trong "}
                <strong>100</strong>
                {" ứng viên đã ứng tuyển"}
              </div>
              <div className="candidate-list">
                <Candidate />
              </div>
              <nav>
                <Pagination
                  total={100}
                  showSizeChanger={false}
                  // pageSize={pageSize}
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRJobPostCandidates;

const Filter = () => (
  <div className="panel panel-default">
    <div className="panel-body no-padding">
      <div className="filter-group">
        <h4 className="filter-title">
          <i className="fa fa-magic"></i> Sắp xếp ứng viên
        </h4>
        <Select options={SORTS} defaultValue={SORTS[0].value} />
      </div>
    </div>
  </div>
);

const Candidate = () => {
  const [isShowing, setShowing] = useState(false);

  const handleClose = () => setShowing(false);

  return (
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
            <u>Ngày ứng tuyển:</u>
            <b>{" 30/12/2020"}</b>
          </div>
        </div>
        <div className="col-md-2 text-right">
          <OutsideClickWrapper
            isShowing={isShowing}
            onClickOutside={handleClose}
          >
            <button
              className="candidate-action-btn"
              onClick={() => setShowing(!isShowing)}
            >
              <i className="fas fa-ellipsis-v" />
            </button>
            {isShowing && (
              <span className="candidate-action-menu">
                <button className="candidate-action-item">
                  <i className="fas fa-check"></i>
                  <span className="candidate-action-item-text">
                    Chấp thuận ứng viên
                  </span>
                </button>
                <button className="candidate-action-item">
                  <i className="fas fa-clipboard-list"></i>
                  <span className="candidate-action-item-text">
                    Thêm vào danh sách theo dõi
                  </span>
                </button>
                <button className="candidate-action-item">
                  <i className="fas fa-times"></i>
                  <span className="candidate-action-item-text">
                    Từ chối ứng viên
                  </span>
                </button>
              </span>
            )}
          </OutsideClickWrapper>
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
            <i className="fa fa-star mr-5"></i> Mục tiêu: I've been interested
            in computer science when i was a child. I am good at imagination. I
            can read and understand documents quickly, thus i can easily apply
            what i have learned to solve the problem. With experience and
            knowledge gained during working for MegaNet (the company that i have
            been working), now i can build on my own a web-app in small or
            medium scale(with frameworks and libraries i describe in Experience
            section). My goal is becoming a Technical Architect in next 3-5
            years.
          </div>
        </div>
      </div>
    </div>
  );
};
