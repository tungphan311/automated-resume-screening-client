import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useState, useEffect } from "react";
import { DatePicker, Pagination } from "antd";
import "./SaveCandidates.scss";
import { Link } from "react-router-dom";
import ResumeModal from "components/Modals/Resume/Resume";
import { getSaveCandidates, saveCandidate } from "services/filterServices";
import { useSelector } from "react-redux";
import {
  formatMonths,
  formatProvince,
  format_date,
  toastErr
} from "utils/index";
import LoadingContent from "components/Loading/LoadingContent";

function HRSaveCandidates() {
  const [value, setValue] = useState({
    order: 1,
    from_date: null,
    to_date: null
  });
  const [resumes, setResumes] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0
  });
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth.recruiter);
  const { provinces } = useSelector((state) => state.cv);

  // const onSortChange = (e) => {
  //   setValue({ ...value, order: e.target.value });
  // };

  function onDateChange(key, date) {
    setValue({ ...value, [key]: date.toISOString() });
  }

  const mapResponseToState = (data) =>
    data.map(({ resume, created_on }) => ({
      resumeId: resume.id,
      skills: resume.technical_skills,
      createdDate: created_on,
      url: resume.store_url,
      download_url: resume.download_url,
      months_of_experience: resume.months_of_experience,
      name: resume.cand_name,
      email: resume.cand_email,
      phone: resume.cand_phone_from_user_input,
      lastEdit: resume.last_edit,
      province_id: resume.province_id
    }));

  useEffect(() => {
    setLoading(true);
    const fetchResumes = async () => {
      const { from_date, to_date } = value;
      await getSaveCandidates({
        token,
        from: from_date,
        to: to_date
      })
        .then((res) => {
          setResumes(mapResponseToState(res.data.data));
          setPagination({ total: res.data.pagination.total });
        })
        .catch((err) => {
          toastErr(err);
        })
        .finally(() => setLoading(false));
    };

    fetchResumes();
  }, [pagination.page, value.order]);

  const { total, page } = pagination;

  const onChange = (page) => {
    setPagination({ page });
  };

  const handleUpdate = () => {
    setValue({ ...value, order: value.order + 1 });
  };

  return (
    <>
      <JobMenu menu={CANDIDATES_MENU} />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="panel panel-default search-result">
              <div className="panel-heading">
                <div className="row">
                  <LoadingContent loading={loading} />
                  <div className="col-md-6">Ứng viên đang theo dõi</div>
                  {/* <div className="col-md-6 text-right">
                    <span style={{ marginRight: 10 }}>Ưu tiên: </span>
                    <Radio.Group onChange={onSortChange} value={value.order}>
                      <Radio value={1}>Mới theo dõi</Radio>
                      <Radio value={2}>Mới cập nhật CV</Radio>
                    </Radio.Group>
                  </div> */}
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
                        format="DD/MM/YYYY"
                        placeholder="Theo dõi từ ngày"
                        size="large"
                      />
                    </div>
                    <div className="col-md-4">
                      <DatePicker
                        onChange={(date) => onDateChange("to_date", date)}
                        format="DD/MM/YYYY"
                        placeholder="Theo dõi đến ngày"
                        size="large"
                      />
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary"
                        onClick={handleUpdate}
                      >
                        <i className="fa fa-search mr-5" />
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </div>
                <div className="candidate-list">
                  {resumes.length &&
                    resumes.map((resume, index) => (
                      <Candidate
                        key={index}
                        {...resume}
                        provinces={provinces}
                      />
                    ))}
                </div>
                {total > 10 && (
                  <div className="text-center">
                    <Pagination
                      current={page}
                      onChange={onChange}
                      total={total}
                    />
                  </div>
                )}
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

const Candidate = ({
  skills,
  createdDate,
  url,
  download_url,
  months_of_experience,
  name,
  email,
  phone,
  lastEdit,
  provinces,
  province_id
}) => {
  const [show, toggleShow] = useState(false);
  const [saved, setSaved] = useState(true);

  const handleSave = async () => {
    setSaved(!saved);

    await saveCandidate();
  };

  return (
    <>
      <div className="candidate" onClick={() => toggleShow(true)}>
        <div className="avatar">
          <img src="/assets/img/noavatar.png" alt="candidate avatar" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="#" className="name">
              {name}
            </Link>
            <div>
              <u>Ngày theo dõi</u>: <b>{format_date(createdDate)}</b>
            </div>
          </div>
          <div className="col-md-6 text-right">
            <div className="time">
              <i className="fas fa-clock mr-5"></i>
              Cập nhật {lastEdit}
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-10">
            <div className="experience">
              <i className="fa fa-envelope"></i>
              <span>{email}</span>
            </div>
            <div className="education">
              <i className="fas fa-phone"></i>
              <span>{phone}</span>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-md-10">
            <div className="location mr-5">
              <i className="fa fa-map-marker mr-5"></i>
              Địa điểm: {formatProvince(provinces, province_id)}
            </div>
            <div className="location">
              <i className="fa fa-calendar-check-o mr-5"></i> Thời gian làm việc
              thực tế: {formatMonths(months_of_experience)}
            </div>
            <div className="location location-right">
              <i className="fa fa-star mr-5"></i> Kỹ năng:{" "}
              {skills.replaceAll("|", ", ")}
            </div>
          </div>
        </div>
      </div>
      <ResumeModal
        show={show}
        toggleModal={() => {
          toggleShow(false);
        }}
        saved={saved}
        handleSave={handleSave}
        url={url}
        download_url={download_url}
      />
    </>
  );
};
