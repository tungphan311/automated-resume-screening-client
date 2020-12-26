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
      <div className="row"></div>
    </div>
  );
};
