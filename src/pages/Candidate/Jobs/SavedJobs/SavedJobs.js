import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SavedJobs.scss";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getSaveJobs, saveJob } from "services/jobServices.js";
import { Tooltip, Pagination } from "antd";
import { formatDateTime } from "utils";
import ApplyModal from "components/Modals/Apply/ApplyModal";
import LoadingContent from "components/Loading/LoadingContent";
import { toast, toastErr } from "utils/index";

function CandidateSavedJobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [unsaved, setUnsaved] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth.candidate);
  const province_list = useSelector((state) => state.cv.provinces);

  const onChange = (page) => {
    setPage(page);
  };

  const toggleModal = () => setShow(!show);

  const mapResponseToState = (data) =>
    data.map(
      ({
        id,
        created_on,
        job_post: {
          id: job_id,
          company_logo,
          company_name,
          deadline,
          salary,
          provinces,
          job_title
        }
      }) => {
        const province_names = provinces.map((id) => {
          const p = province_list.find((p) => p.province_id === id);
          return p ? p.province_name : "";
        });

        return {
          id,
          job_title,
          created_on,
          company_name,
          salary,
          deadline,
          province: province_names.join(", "),
          company_logo,
          job_id
        };
      }
    );

  useEffect(() => {
    setLoading(true);
    const fetchJobs = async () => {
      await getSaveJobs(page, token)
        .then((res) => {
          const {
            data,
            pagination: { total }
          } = res.data;

          setJobs(mapResponseToState(data));
          setTotal(total);
        })
        .catch((err) => console.log(err))
        .then(() => {
          setLoading(false);
        });
    };

    if (province_list.length) {
      fetchJobs();
    }
  }, [page, province_list, unsaved]);

  const handleUnsaved = async (job_id) => {
    await saveJob(job_id, 0, token)
      .then(() => {
        setUnsaved(unsaved + 1);
        toast({ message: "Bỏ lưu thành công" });
      })
      .catch((err) => {
        toastErr(err);
      });
  };

  return (
    <div className="container" id="saved-jobs">
      {total ? (
        <div>
          <div className="box box--white" id="box-result">
            <div className="search-meta">
              <h1 className="text-primary bold">
                {`Danh sách ${total} việc làm đã lưu`}
              </h1>
            </div>
          </div>
        </div>
      ) : null}

      <div className="row">
        <LoadingContent loading={loading} />
        <div className="col-md-12">
          <div className="box box--white" id="box-jobs">
            <div className="job-list search-result">
              {!jobs.length ? (
                <EmptyJob />
              ) : (
                jobs.map((job, i) => (
                  <Job
                    key={i}
                    {...job}
                    lastChild={i === jobs.length - 1}
                    toggleModal={toggleModal}
                    show={show}
                    token={token}
                    handleUnsaved={handleUnsaved}
                  />
                ))
              )}
            </div>
            {total > 10 && (
              <div className="text-center">
                <Pagination current={page} onChange={onChange} total={total} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSavedJobs;

const Job = ({
  job_title,
  created_on,
  company_name,
  salary,
  deadline,
  province,
  company_logo,
  lastChild,
  toggleModal,
  show,
  job_id,
  token,
  handleUnsaved
}) => (
  <div className="result-job-hover">
    <div className="row job" style={lastChild ? { borderBottom: 0 } : {}}>
      <div className="hidden-xs col-sm-2 col-avatar">
        <Link
          to="#"
          className="company-logo"
          style={{ margin: "12px auto 0px" }}
        >
          <img src={company_logo} alt="Company avatar" />
        </Link>
      </div>
      <div className="col-sm-8">
        <h4 className="job-title">
          <Link to="#">
            <span className="bold transform-job-title">{job_title}</span>
          </Link>
        </h4>
        <div>Đã lưu: {formatDateTime(created_on)}</div>
        <div className="row-company name text_ellipsis">
          <Link to="#" target="_blank">
            {company_name}
          </Link>
        </div>
        <div className="row text-dark-gray" id="row-result-info-job">
          <div className="salary col-sm-4 col-xs-6">
            <DollarCircleOutlined
              style={{ fontSize: 16, marginRight: 5, color: "#2557a7" }}
            />
            {salary}
          </div>
          <div className="deadline col-sm-4 col-xs-6">
            <ClockCircleOutlined
              style={{ fontSize: 16, marginRight: 5, color: "#2557a7" }}
            />
            {formatDateTime(deadline)}
          </div>
          <Tooltip placement="top" title={province}>
            <div className="address col-sm-4 col-xs-12 text_ellipsis">
              <i
                className="fas fa-map-marker mr-5"
                style={{ fontSize: 16, color: "#2557a7" }}
              ></i>
              {province}
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="col-sm-2 job-button-group">
        <button className="view-apply-button blue-button" onClick={toggleModal}>
          Ứng tuyển ngay
        </button>
        <div className="box-save-job">
          <button
            className="btn-unsave unsave text-red"
            onClick={() => handleUnsaved(job_id)}
          >
            <i className="fa fa-trash mr-5"></i>
            Bỏ lưu
          </button>
        </div>
      </div>
    </div>
    <ApplyModal
      visible={show}
      onCancel={toggleModal}
      company_name={company_name}
      job_title={job_title}
      token={token}
      jp_id={job_id}
    />
  </div>
);

const EmptyJob = () => (
  <>
    <div className="text-center">
      <img
        src="/assets/svg/Empty.svg"
        alt="empty icon"
        style={{ width: "380px", height: "160px", margin: "50px auto" }}
      />
      <p style={{ paddingBottom: "80px" }}>Bạn chưa lưu tin tuyển dụng nào!</p>
    </div>
  </>
);
