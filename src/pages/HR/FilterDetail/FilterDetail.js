import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useEffect, useState } from "react";
import "./FilterDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import TagInput from "components/TagInput/TagInput";
import { Link } from "react-router-dom";
import { Pagination, Select, Tag } from "antd";
import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import LoadingContent from "components/Loading/LoadingContent";
import {
  getCandidates,
  getFilterDetail,
  saveCandidate
} from "services/filterServices";
import { range, toastErr } from "utils/index";
import { updateFilterAction } from "state/actions/index";
import ResumeModal from "components/Modals/Resume/Resume";
import { CheckCircleOutlined } from "@ant-design/icons";

function HRFilterDetail({
  match: {
    params: { id }
  }
}) {
  const [filterChange, setFilterChange] = useState(false);
  const [filter, setFilter] = useState({
    domains: [],
    provinces: [],
    atleastSkills: [],
    requiredSkills: [],
    notAllowedSkills: []
  });

  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, total: 0 });

  const dispatch = useDispatch();
  const province_list = useSelector((state) => state.cv.provinces);
  const { token } = useSelector((state) => state.auth.recruiter);
  const province_options = province_list.length
    ? province_list.map(({ province_id, province_name }) => ({
        value: province_id,
        label: province_name
      }))
    : [];

  const DOMAINS = useSelector(
    (state) => state.jobDomain.domains
  ).map(({ id, name }) => ({ value: id, label: name }));

  useEffect(() => {
    setLoading(true);
    dispatch({ type: GET_JOB_DOMAIN });

    const fetchCandidates = async () => {
      await getFilterDetail(id, token)
        .then(async (res) => {
          const filterDetail = res.data.data;

          const {
            domains,
            provinces,
            atleast_skills,
            required_skills,
            not_allowed_skills,
            min_year,
            max_year,
            gender,
            months_of_experience
          } = filterDetail;

          await getCandidates(
            {
              page: pagination.page,
              job_domains: domains,
              provinces,
              atleast_skills,
              required_skills,
              not_allowed_skills,
              min_year,
              max_year,
              gender,
              months_of_experience
            },
            token
          ).then((result) => {
            setCandidates(result.data.data);
            setFilter({
              ...filterDetail,
              atleastSkills: atleast_skills.map((skill, index) => ({
                id: index,
                text: skill
              })),
              requiredSkills: required_skills.map((skill, index) => ({
                id: index,
                text: skill
              })),
              notAllowedSkills: not_allowed_skills.map((skill, index) => ({
                id: index,
                text: skill
              }))
            });
            setPagination({
              ...pagination,
              total: result.data.pagination.total
            });
          });
        })
        .catch((err) => {
          toastErr(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchCandidates();
  }, []);

  const {
    domains,
    provinces,
    name,
    id: filterId,
    atleastSkills,
    requiredSkills,
    notAllowedSkills
  } = filter;

  console.log(candidates);

  const onselectionchange = (key, value) => {
    if (!filterChange) {
      setFilterChange(true);
    }
    setFilter({ ...filter, [key]: value });
  };

  const handleSelectTag = (name, tags) => {
    setFilterChange(true);
    setFilter({ ...filter, [name]: tags });
  };

  const fetchCandidate = async (page) => {
    setLoading(true);
    await getCandidates(
      {
        page,
        job_domains: filter.domains,
        provinces: filter.provinces,
        atleast_skills: filter.atleastSkills.map((s) => s.text),
        required_skills: filter.requiredSkills.map((s) => s.text),
        not_allowed_skills: filter.notAllowedSkills.map((s) => s.text),
        months_of_experience: filter.months_of_experience,
        min_year: filter.min_year,
        max_year: filter.max_year,
        gender: filter.gender
      },
      token
    )
      .then((res) => {
        setCandidates(res.data.data);
        setPagination({ page, total: res.data.pagination.total });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async () => {
    await fetchCandidate(1);
  };

  const handleChangePage = async (page) => {
    await fetchCandidate(page);
  };

  const onKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\+|-/.test(keyValue)) event.preventDefault();
  };

  const handleUpdateFilter = () => {
    const {
      domains,
      provinces,
      atleastSkills,
      requiredSkills,
      notAllowedSkills,
      months_of_experience,
      min_year,
      max_year,
      gender
    } = filter;
    const values = {
      name,
      job_domains: domains.length ? domains.join(",") : null,
      provinces: provinces.length ? provinces.join(",") : null,
      atleast_skills: atleastSkills.length
        ? atleastSkills.map((s) => s.text).join(",")
        : null,
      required_skills: requiredSkills.length
        ? requiredSkills.map((s) => s.text).join(",")
        : null,
      not_allowed_skills: notAllowedSkills.length
        ? notAllowedSkills.map((s) => s.text).join(",")
        : null,
      months_of_experience,
      min_year,
      max_year,
      gender
    };

    dispatch(updateFilterAction({ id, values })).then(() => {
      setFilterChange(false);
    });
  };

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
                      {name}
                      <small>#{filterId}</small>
                    </h1>
                  </div>
                  <div className="col-xs-3 text-right">
                    <button
                      disabled={!filterChange}
                      className="btn btn-dark btn-save-campaign"
                      onClick={handleUpdateFilter}
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
                    <button
                      className="btn btn-primary btn-lock"
                      onClick={handleSubmit}
                    >
                      <i className="fa fa-search mr-5" />
                      Tìm kiếm
                    </button>
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
            <LoadingContent loading={loading} />
            <div className="panel panel-default search-result">
              {candidates.length ? (
                <div className="panel-body">
                  <div className="results-stats">
                    <div>
                      <strong>Danh sách kết quả tìm kiếm</strong>
                    </div>
                  </div>
                  <div className="candidate-list">
                    {candidates.length &&
                      candidates.map(({ resume, saved }) => (
                        <Candidate
                          key={resume.id}
                          {...resume}
                          province_list={province_list}
                          token={token}
                          saved={saved}
                        />
                      ))}
                  </div>
                  <nav>
                    <Pagination
                      total={pagination.total}
                      showSizeChanger={false}
                      current={pagination.page}
                      pageSize={10}
                      onChange={handleChangePage}
                    />
                  </nav>
                </div>
              ) : (
                <div className="panel-body">
                  <div className="message-no-candidate text-center">
                    <img
                      src="/assets/svg/Empty.svg"
                      alt="Message no candidate found"
                    />
                    <p>
                      Không tìm thấy ứng viên phù hợp! Vui lòng bỏ bớt tiêu chí
                      , hoặc chọn từ khóa khác.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-body no-padding">
                <div className="filter-group">
                  <h4 className="filter-title">
                    <i className="fas fa-briefcase mr-5"></i> Kinh nghiệm thực
                    tế
                  </h4>
                  <div style={{ position: "relative" }}>
                    <span className="input-prefix">Trên</span>
                    <input
                      className="experience-input form-control"
                      type="number"
                      onKeyPress={onKeyPress}
                      value={filter.months_of_experience}
                      onChange={(e) =>
                        onselectionchange(
                          "months_of_experience",
                          e.target.value
                        )
                      }
                    />
                    <span className="input-suffix">tháng</span>
                  </div>
                </div>
                <div className="filter-group">
                  <h4 className="filter-title">
                    <i className="far fa-calendar-check mr-5"></i> Năm sinh
                  </h4>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div style={{ width: "48%", display: "inline-block" }}>
                      <Select
                        options={[
                          { value: null, label: "Từ" },
                          ...range(1970, filter.max_year || 2003)
                        ]}
                        value={filter.min_year}
                        onChange={(value) =>
                          onselectionchange("min_year", value)
                        }
                      />
                    </div>
                    <div style={{ width: "48%", display: "inline-block" }}>
                      <Select
                        options={[
                          { value: null, label: "Đến" },
                          ...range(filter.min_year || 1970, 2003)
                        ]}
                        value={filter.max_year}
                        onChange={(value) =>
                          onselectionchange("max_year", value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-group">
                  <h4 className="filter-title">
                    <i className="fa fa-mars mr-5"></i> Giới tính
                  </h4>
                  <Select
                    options={[
                      { value: null, label: "Tất cả" },
                      { value: "true", label: "Nam" },
                      { value: "false", label: "Nữ" }
                    ]}
                    value={filter.gender}
                    onChange={(value) => onselectionchange("gender", value)}
                  />
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

const Candidate = ({
  name,
  job_domain,
  province_id,
  province_list,
  skills,
  experience,
  view,
  last_edit,
  url,
  download_url,
  token,
  resume_id,
  saved
}) => {
  const [show, toggleShow] = useState(false);
  const [isSaved, setIsSaved] = useState(saved);

  const handleSave = async () => {
    const status = saved ? 0 : 1;

    await saveCandidate(resume_id, status, token)
      .then(() => {
        setIsSaved(!isSaved);
      })
      .catch((err) => {
        toastErr(err);
      });
  };

  return (
    <div className="candidate" onClick={() => toggleShow(true)}>
      <div className="avatar">
        <img src="/assets/img/noavatar.png" alt="candidate avatar" />
      </div>
      <div className="row">
        <div className="col-md-9">
          <Link to="#" className="name">
            {name}
            {isSaved && (
              <span style={{ marginLeft: 20 }}>
                <Tag icon={<CheckCircleOutlined />} color="success">
                  Đã theo dõi
                </Tag>
              </span>
            )}
          </Link>
          <div>
            <u>Vị trí ứng tuyển: </u>
            {job_domain}
          </div>
        </div>
        <div className="col-md-3 text-right">
          <div className="time">
            <i className="fa fa-clock-o"></i> Cập nhật {last_edit}
          </div>
          <div style={{ fontSize: "0.9em", color: "rgb(153, 153, 153)" }}>
            <span>
              <span>{view}</span> người đã xem
            </span>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-md-10">
          <div className="location mr-5">
            <i className="fa fa-map-marker-alt mr-5"></i>
            Địa điểm:{" "}
            {province_list &&
              province_list.find((e) => parseInt(e.province_id) === province_id)
                .province_name}
          </div>
          <div className="location">
            <i className="fa fa-map-marker-alt mr-5"></i>
            Thời gian làm việc thực tế: {experience}
          </div>
          <div className="location location-right ">
            <i className="fa fa-star mr-5"></i>
            {"Kỹ năng: "}
            {skills}
          </div>
        </div>
      </div>
      <ResumeModal
        show={show}
        toggleModal={() => toggleShow(false)}
        saved={isSaved}
        handleSave={handleSave}
        {...{ url, download_url }}
      />
    </div>
  );
};
