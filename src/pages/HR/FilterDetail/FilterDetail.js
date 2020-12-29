import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React from "react";
import { useState } from "react";
import "./FilterDetail.scss";
import { Select } from "antd";
import { useSelector } from "react-redux";
import TagInput from "components/TagInput/TagInput";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const DOMAINS = [
  { value: 1, label: "Frontend" },
  { value: 2, label: "Backend" },
  { value: 3, label: "Fullstack" },
  { value: 4, label: "iOS Dev" }
];

function HRFilterDetail() {
  const [filterChange, setFilterChange] = useState(false);
  const [filter, setFilter] = useState({
    domains: [],
    provinces: []
  });

  const [skills, setSkills] = useState({
    atleastSkills: [],
    requiredSkills: [],
    notAllowedSkills: []
  });

  const province_list = useSelector((state) => state.cv.provinces);
  const province_options = province_list.length
    ? province_list.map(({ province_id, province_name }) => ({
        value: province_id,
        label: province_name
      }))
    : [];

  const { domains, provinces } = filter;

  const onselectionchange = (key, value) => {
    setFilterChange(true);
    setFilter({ ...filter, [key]: value });
  };

  const handleSelectTag = (name, tags) => {
    setSkills({ ...skills, [name]: tags });
  };

  const { atleastSkills, requiredSkills, notAllowedSkills } = skills;

  return (
    <>
      <JobMenu menu={CANDIDATES_MENU} />
      <div className="container detail-campaign">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-9">
                    <h1 className="campaign-title">
                      {"Test "}
                      <small>#121917</small>
                    </h1>
                  </div>
                  <div className="col-xs-3 text-right">
                    <button
                      disabled={!filterChange}
                      className="btn btn-dark btn-save-campaign"
                    >
                      Lưu bộ lọc
                    </button>
                    {filterChange && (
                      <div className="campaign-noti not_yet">
                        Bạn có thay đổi chưa lưu
                      </div>
                    )}
                  </div>
                </div>
                <hr style={{ marginTop: 10 }} />
                <div className="row">
                  <div className="col-md-5 ">
                    <i className="fa fa-user-circle mr-5"></i>
                    <label>Vị trí công việc</label>
                    <Select
                      mode="multiple"
                      placeholder="Chọn vị trí công việc"
                      options={DOMAINS}
                      value={domains}
                      onChange={(value) => onselectionchange("domains", value)}
                      size="large"
                    />
                  </div>
                  <div className="col-md-5">
                    <i className="fa fa-map-marker-alt mr-5" />
                    <label>Địa điểm</label>
                    <Select
                      mode="multiple"
                      placeholder="Chọn vị trí công việc"
                      options={province_options}
                      value={provinces}
                      onChange={(value) =>
                        onselectionchange("provinces", value)
                      }
                      size="large"
                    />
                  </div>
                  <div className="col-md-2" style={{ paddingTop: 30 }}>
                    <div className="btn btn-primary btn-lock">
                      <i className="fa fa-search mr-5" />
                      Tìm kiếm
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <hr style={{ marginBottom: 15 }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <i className="far fa-plus-square text-success mr-5" />
                    <label>Có một trong những từ khoá sau</label>
                    <TagInput
                      tags={atleastSkills}
                      name="atleastSkills"
                      onChange={handleSelectTag}
                    />
                  </div>
                  <div className="col-md-4">
                    <i className="far fa-plus-square text-success mr-5" />
                    <label>Bắt buộc có các từ khoá sau</label>
                    <TagInput
                      tags={requiredSkills}
                      name="requiredSkills"
                      onChange={handleSelectTag}
                    />
                  </div>
                  <div className="col-md-4">
                    <i className="far fa-minus-square text-danger mr-5" />
                    <label>Không có các từ khoá sau</label>
                    <TagInput
                      tags={notAllowedSkills}
                      name="notAllowedSkills"
                      onChange={handleSelectTag}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="panel panel-default search-result">
              <div className="panel-body">
                <div className="results-stats">
                  <div>
                    <strong>Danh sách kết quả tìm kiếm</strong>
                  </div>
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
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-body no-padding"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRFilterDetail;

const Candidate = () => (
  <div className="candidate">
    <div className="avatar">
      <img src="/assets/img/noavatar.png" alt="candidate avatar" />
    </div>
    <div className="row">
      <div className="col-md-9">
        <Link to="#" className="name">
          Phan Thanh Tùng
        </Link>
        <div>
          <u>Vị trí ứng tuyển: </u>
          Frontend Developer
        </div>
      </div>
      <div className="col-md-3 text-right">
        <div className="time">
          <i className="fa fa-clock-o"></i> Cập nhật 7 phút trước
        </div>
        <div style={{ fontSize: "0.9em", color: "rgb(153, 153, 153)" }}>
          <span>
            <span>5</span> người đã xem
          </span>
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: 10 }}>
      <div className="col-md-9">
        <div className="education">
          <i className="fa fa-graduation-cap mr-5"></i>
          <span>
            Viện Khoa Học Xã Hội &amp; Nhân Văn - Đại học Công Nghệ Tp Hồ Chí
            Minh - Hutech
          </span>
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: 10 }}>
      <div className="col-md-10">
        <div className="location mr-5">
          <i className="fa fa-map-marker-alt mr-5"></i>
          Địa điểm: Hồ Chí Minh
        </div>
        <div className="location">
          <i className="fa fa-map-marker-alt mr-5"></i>
          Thời gian làm việc thực tế: 2 năm
        </div>
        <div className="location location-right">
          <i className="fa fa-star"></i> Mục tiêu: Với kinh nghiệm tích lũy được
          trong quá trình đi làm ở nhiều nơi em mong bản thân có thể tiếp tục
          phát huy các thế mạnh đối với bản thân mình ở các mảng sáng tạo nội
          dung, hiện đại, tinh tế và nắm bắt được các nhu cầu khách hàng. Và mở
          rộng tệp khách hàng, nâng cao độ nhận diện, nâng cao doanh số cho quí
          công ty trong tương lai
        </div>
      </div>
    </div>
  </div>
);
