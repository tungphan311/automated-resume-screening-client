import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React from "react";
import { useState } from "react";
import "./FilterDetail.scss";
import { Select } from "antd";
import { useSelector } from "react-redux";
import TagInput from "components/TagInput/TagInput";

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
        </div>
      </div>
    </>
  );
}

export default HRFilterDetail;
