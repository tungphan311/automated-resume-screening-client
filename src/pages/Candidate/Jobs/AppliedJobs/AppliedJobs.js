import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AppliedJobs.scss";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getApplyJobs } from "services/jobServices";
import { formatDateTime, toastErr } from "utils/index";
import { Tooltip, Pagination } from "antd";
import LoadingContent from "components/Loading/LoadingContent";

function CandidateAppliedJobs() {
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth.candidate);
  const province_list = useSelector((state) => state.cv.provinces);

  const onChange = (page) => {
    setPage(page);
  };

  const mapResponseToState = (data) =>
    data.map(
      ({
        submit_date,
        job_post: {
          id,
          job_title,
          company_name,
          salary,
          deadline,
          provinces,
          company_logo
        }
      }) => {
        const province_names = provinces.map((id) => {
          const p = province_list.find((p) => p.province_id === id);
          return p ? p.province_name : "";
        });

        return {
          id,
          job_title,
          created_on: formatDateTime(submit_date),
          company_name,
          salary,
          deadline: formatDateTime(deadline),
          province: province_names.join(", "),
          company_logo
        };
      }
    );

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      await getApplyJobs(1, token)
        .then((res) => {
          const {
            data,
            pagination: { total }
          } = res.data;

          setJobs(mapResponseToState(data));
          setTotal(total);
        })
        .catch((err) => toastErr(err))
        .finally(() => setLoading(false));
    };

    if (province_list.length) {
      fetchJobs();
    }
  }, [page, province_list]);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <div className="row">
        <LoadingContent loading={loading} />
        <div style={{ width: "100%" }}>
          {!jobs.length ? (
            <Empty />
          ) : (
            <div style={{ width: "100%" }}>
              <div className="box box--white" id="box-result">
                <div className="search-meta">
                  <h1
                    className="text-primary bold"
                    style={{ fontSize: 21, marginBottom: 0 }}
                  >
                    Danh sách {total} việc làm đã ứng tuyển
                  </h1>
                </div>
              </div>
              <div className="box box--white" id="box-jobs">
                <div className="job-list search-result">
                  {jobs.map((job, index) => (
                    <Job
                      key={index}
                      {...job}
                      lastChild={index === jobs.length - 1}
                    />
                  ))}
                </div>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateAppliedJobs;

const Job = ({
  job_title,
  created_on,
  company_name,
  salary,
  deadline,
  province,
  company_logo,
  lastChild
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
      <div className="col-sm-10">
        <h4 className="job-title">
          <Link to="#">
            <span className="bold transform-job-title">{job_title}</span>
          </Link>
        </h4>
        <div>Ứng tuyển: {created_on}</div>
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
            {deadline}
          </div>
          <Tooltip placement="top" title={province}>
            <div className="address col-sm-4 col-xs-12 text_ellipsis">
              <i
                className="fas fa-map-marker-alt mr-5"
                style={{ fontSize: 16, color: "#2557a7" }}
              ></i>
              {province}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
);

const Empty = () => (
  <div className="box box-no-padding box--white">
    <div className="row">
      <div className="col-md-8">
        <div className="ap-intro-content-wraper">
          <h3 className="box-title" style={{ color: "#d45541" }}>
            Bạn chưa ứng tuyển công việc nào
          </h3>
          <div className="box-content text-dark-gray">
            <p>Bạn đang tìm kiếm một công việc phù hợp với khả năng?</p>
            <p>
              Chúng tôi cung cấp cho bạn rất nhiều việc làm chất lượng từ hơn
              8000+ Nhà tuyển dụng uy tín.
            </p>
          </div>
          <div className="box-footer">
            <Link to="/find-jobs" className="btn btn-primary">
              Tìm việc ngay
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="ap-intro-logo-wraper">
          <img
            src="/assets/img/logo-ap.png"
            style={{ width: "100%", maxWidth: "220px" }}
            alt="find job"
          ></img>
        </div>
      </div>
    </div>
  </div>
);
