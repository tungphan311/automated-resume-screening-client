import OutsideClickWrapper from "components/OutsideClickWrapper/OutsideClickWrapper";
import React, { useState, useEffect } from "react";
import { Pagination, Select, Progress, Tooltip } from "antd";
import { WEIGHTS } from "constants/index";
import "./JobManage.scss";
import { getAppliedResumes } from "services/hrJobServices";
import { useSelector } from "react-redux";
import { formatMonths, formatProvince, format_date } from "utils/index";
import LoadingContent from "components/Loading/LoadingContent";
import HRJobPostCandidateDetail from "pages/HR/JobDetail/CandidateDetail";

function HRJobPostCandidates({ jp_id }) {
  const [weights, setWeights] = useState({
    general: 2,
    domain: 3,
    softskill: 1
  });
  const [resumes, setResumes] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0
  });
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState(0);
  const [avgScore, setAvgScore] = useState({
    avg_soft_score: 0,
    avg_domain_score: 0,
    avg_general_score: 0
  });

  const { token } = useSelector((state) => state.auth.recruiter);
  const { provinces } = useSelector((state) => state.cv);

  const mapResonseToState = (result) => {
    const {
      candidate,
      resume,
      scores: { domain_score, general_score, softskill_score },
      submission
    } = result;

    return {
      candidate: candidate[0],
      applyDate: submission.submit_date,
      domainScore: domain_score,
      generalScore: general_score,
      softSkillScore: softskill_score,
      province: candidate[0].province_id,
      resumeId: resume.id,
      skills: resume.technical_skills,
      months_of_experience: resume.months_of_experience,
      resume,
      domain_score,
      general_score,
      softskill_score
    };
  };

  useEffect(() => {
    const { general, domain, softskill } = weights;
    setLoading(true);
    const fetchResumes = async () => {
      await getAppliedResumes(
        jp_id,
        token,
        pagination.page,
        general,
        domain,
        softskill
      )
        .then((res) => {
          const response = res.data;
          const {
            data,
            pagination: { total },
            statistics: { avg_domain_score, avg_general_score, avg_soft_score }
          } = response;

          setResumes(data.map((res) => mapResonseToState(res)));
          setPagination({ ...pagination, total });
          setAvgScore({ avg_domain_score, avg_general_score, avg_soft_score });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchResumes();
  }, [pagination.page, weights]);

  return (
    <div className="container">
      {!resume ? (
        <div className="row">
          <div className="col-md-3">
            <Filter {...weights} setWeights={setWeights} />
          </div>
          <div className="col-md-9">
            <LoadingContent loading={loading} />
            <div className="panel panel-default search-result">
              <div className="panel-body">
                <div className="results-stats">
                  <strong>1 - {resumes.length}</strong>
                  {" trong "}
                  <strong>{pagination.total}</strong>
                  {" ứng viên đã ứng tuyển"}
                </div>
                <div className="candidate-list">
                  {resumes.length &&
                    resumes.map((resume) => (
                      <Candidate
                        {...weights}
                        {...resume}
                        setResume={setResume}
                        provinces={provinces}
                      />
                    ))}
                </div>
                <nav>
                  <Pagination
                    total={pagination.total}
                    showSizeChanger={false}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <HRJobPostCandidateDetail
          detail={resumes.find((r) => r.resumeId === resume)}
          provinces={provinces}
          setResume={setResume}
          avgScore={avgScore}
        />
      )}
    </div>
  );
}

export default HRJobPostCandidates;

const Filter = ({ general, domain, softskill, setWeights }) => {
  const [weights, updateWeights] = useState({
    general,
    domain,
    softskill
  });

  return (
    <div className="panel panel-default">
      <div className="panel-body no-padding">
        <div className="filter-group">
          <h4 className="filter-title">
            <i className="fa fa-magic"></i> Sắp xếp ứng viên
          </h4>
          <div className="filter-group">
            <h4 className="filter-title">Điểm kỹ năng chung</h4>

            <Select
              options={WEIGHTS}
              defaultValue={general}
              onChange={(value) =>
                updateWeights((curState) => ({ ...curState, general: value }))
              }
            />
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Điểm kỹ năng chuyên ngành</h4>

            <Select
              options={WEIGHTS}
              defaultValue={domain}
              onChange={(value) =>
                updateWeights((curState) => ({ ...curState, domain: value }))
              }
            />
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Điểm kỹ năng mềm</h4>

            <Select
              options={WEIGHTS}
              defaultValue={softskill}
              onChange={(value) =>
                updateWeights((curState) => ({ ...curState, softskill: value }))
              }
            />
          </div>
          <div className="text-center" onClick={() => setWeights(weights)}>
            <button className="btn btn-primary">Cập nhật trọng số</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Candidate = ({
  general,
  domain,
  softskill,
  candidate,
  applyDate,
  domainScore,
  generalScore,
  softSkillScore,
  skills,
  months_of_experience,
  education,
  resumeId,
  setResume,
  provinces
}) => {
  const [isShowing, setShowing] = useState(false);

  const handleClose = () => setShowing(false);

  const maxScore = general + domain + softskill;
  const score = Number(
    generalScore * general + domainScore * domain + softSkillScore * softskill
  ).toFixed(2);

  const { full_name, province_id } = candidate;

  return (
    <div className="candidate">
      <div className="avatar">
        <img src="/assets/img/noavatar.png" alt="candidate avatar" />
      </div>
      <div className="row">
        <div className="col-md-10">
          <button onClick={() => setResume(resumeId)} className="name">
            {full_name}
          </button>
          <div>
            <u>Ngày ứng tuyển</u>: <b>{format_date(applyDate)}</b>
          </div>
          <div style={{ width: "60%" }} className="candidate-score">
            <Tooltip placement="top" title="Điểm kỹ năng chung">
              <Progress
                percent={parseInt(generalScore * 100)}
                size="small"
                format={() =>
                  `${Number(generalScore * general).toFixed(2)}/${general}`
                }
                strokeColor="blue"
              />
            </Tooltip>
          </div>
          <div style={{ width: "60%" }} className="candidate-score">
            <Tooltip placement="top" title="Điểm kỹ năng chuyên ngành">
              <Progress
                percent={parseInt(domainScore * 100)}
                size="small"
                format={() =>
                  `${Number(domainScore * domain).toFixed(2)}/${domain}`
                }
                strokeColor="#ff7f24"
              />
            </Tooltip>
          </div>
          <div style={{ width: "60%" }} className="candidate-score">
            <Tooltip placement="top" title="Điểm kỹ năng mềm">
              <Progress
                percent={parseInt(softSkillScore * 100)}
                size="small"
                format={() =>
                  `${Number(softSkillScore * softskill).toFixed(
                    2
                  )}/${softskill}`
                }
                strokeColor="#f34f80"
              />
            </Tooltip>
          </div>
        </div>
        <div className="col-md-2 text-right" id="candidate-score">
          <Progress
            type="circle"
            percent={parseInt((score * 100) / maxScore)}
            format={() => `${score}/${maxScore}`}
          />
        </div>
      </div>
      {education && (
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-10">
            <div className="education">
              <i className="fa fa-graduation-cap"></i>
              <span>University of Information Technology</span>
            </div>
          </div>
        </div>
      )}
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
        <div
          className="col-md-2 text-right"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <OutsideClickWrapper
            isShowing={isShowing}
            onClickOutside={handleClose}
            className="pos-relative"
          >
            <button
              className="candidate-action-btn"
              onClick={() => setShowing(!isShowing)}
            >
              <i className="fas fa-ellipsis-v" />
            </button>
            {isShowing && (
              <span className="candidate-action-menu">
                <button
                  className="candidate-action-item"
                  onClick={() => setResume(resumeId)}
                >
                  <i className="fas fa-check"></i>
                  <span className="candidate-action-item-text">
                    Xem chi tiết ứng viên
                  </span>
                </button>
                <button className="candidate-action-item">
                  <i className="fas fa-clipboard-list"></i>
                  <span className="candidate-action-item-text">
                    Thêm vào danh sách theo dõi
                  </span>
                </button>
              </span>
            )}
          </OutsideClickWrapper>
        </div>
      </div>
    </div>
  );
};
