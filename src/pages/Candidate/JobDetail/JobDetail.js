/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import SimJob from "components/SimJob/SimJob";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobDetail.scss";
import ApplyModal from "components/Modals/Apply/ApplyModal";
import LoginModal from "components/Modals/LoginModal/LoginModal";

import { useDispatch } from "react-redux";
import ContentLoader from "react-content-loader";
import { getJobDetail } from "services/jobServices";
import { candidateJobSimilarAction } from "state/actions/candidateJobAction";
import { getDiffTime, toastErr, formatProvince } from "utils/index";
import { useSelector } from "react-redux";

const DEFAULT = {
  apply: false,
  authen: false
};

const CandidateJobDetail = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState({});
  const [showModal, toggleShowModal] = useState(DEFAULT);
  const provinceTotal = useSelector((state) => state.cv.provinces);
  const { token } = useSelector((state) => state.auth.candidate);
  const simJob = useSelector(
    (state) => state?.candidateJob.candidateSimilarJob
  );

  const toggleModal = () => {
    if (!token) {
      toggleShowModal({ ...DEFAULT, authen: true });
    } else {
      toggleShowModal({ ...DEFAULT, apply: true });
    }
  };
  const onCancel = () => toggleShowModal(DEFAULT);

  const {
    job_title,
    description,
    benefit,
    contract_type,
    deadline,
    amount,
    requirement,
    salary,
    provinces,
    company_name,
    company_logo,
    company_background,
    posted_in,
    saved_date
  } = job;

  const getProvince = () => {
    return (
      provinces &&
      provinces.map((p) => formatProvince(provinceTotal, p)).join(", ")
    );
  };
  useEffect(() => {
    setLoading(true);

    const fetchJob = async () => {
      await getJobDetail(id, token)
        .then(async (res) => {
          setJob({
            ...res.data.data.post
            // saved: res.data.data.saved_date
          });
        })
        .catch((err) => {
          toastErr(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchJob();
    id && dispatch(candidateJobSimilarAction(id));
  }, []);

  return (
    <>
      {loading ? (
        <div className="container" style={{marginTop: "30px"}}>
          <MyLoader />
        </div>
      ) : (
        <div className="detail-page">
          <div
            id="search-jobs"
            className="search-jobs-container search-jobs-widget"
          >
            <div className="container">
              <JobSearchAdvance history={history} />
            </div>
          </div>

          <div className="container" style={{ backgroundColor: "#fff" }}>
            <div className="row detail-page__container">
              <div className="col-ct-8">
                {/* <div className="JobTitle"> */}
                <div className="detail-page__poster">
                  <img
                    src={
                      company_background || "/assets/img/company-default-bg.jpg"
                    }
                    alt="company background"
                    className="detail-page__poster__big"
                  />
                  <img
                    src={company_logo || "/assets/img/company-default-logo.png"}
                    alt="company logo"
                    className="detail-page__poster__logo"
                  />
                </div>

                <div className="detail-page__title">
                  <h1>{job_title}</h1>
                  <div>
                    <div className="text detail-page__company">
                      {company_name}
                    </div>
                    <div className="text detail-page__province">
                      {" "}
                      {getProvince()}
                    </div>
                  </div>
                  <div className="box">
                    <a onClick={toggleModal}>Apply Now</a>
                    <div>
                      <button className="icon">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                <div className="JobDetail">
                  <div className="JobDetail__wrapper">
                    {/* <p>Develop Zalo for Work's features</p> */}
                    <div>
                      <h2 className="jobSectionHeader">
                        <b>Description: </b>
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: description }} />

                      <h2 className="jobSectionHeader">
                        <b>Role Requirements: </b>
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: requirement }} />

                      <h2 className="jobSectionHeader">
                        <b>Perks and Benefits: </b>
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: benefit }} />
                    </div>
                  </div>

                  <div className="jobsearch-JobMetadataFooter">
                    <div className="icl-u-textColor--success">
                      {company_name}
                    </div>
                    <div>
                      {getDiffTime(posted_in) > 1
                        ? getDiffTime(posted_in).toString() + " days"
                        : getDiffTime(posted_in).toString() + " day"}{" "}
                      ago
                    </div>
                    <div
                      id="originalJobLinkContainer"
                      className="icl-u-lg-inline icl-us-xs-hide"
                    >
                      <p>Original job</p>
                    </div>
                    <div>
                      <div>
                        <div>
                          <button
                            className="mosaic-reportcontent-button desktop"
                            type="button"
                          >
                            <i className="fas fa-flag"></i>
                            Report job
                          </button>
                        </div>
                        <div className="mosaic-reportcontent-content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-ct-4">
                <div className="ComSidebar">
                  <div className="jobsearch-CompanyAvatar">
                    <div className="jobsearch-CompanyAvatar-card">
                      <h2 className="right-title">Company Info</h2>
                      <div className="body">
                        <div className="jobsearch-CompanyAvatar-form">
                          <div>
                            <div>
                              <div className="jobsearch-CompanyAvatar-buttonContainer">
                                <div className="jobsearch-CompanyAvatar-radius">
                                  <img
                                    className="jobsearch-CompanyAvatar-image"
                                    src={
                                      company_logo ||
                                      "/assets/img/company-default-logo.png"
                                    }
                                    alt="company logo"
                                  />
                                </div>
                                <div className="jobsearch-CompanyAvatar-button">
                                  <button
                                    className="icl-Button  right-button"
                                    type="button"
                                  >
                                    Follow
                                  </button>
                                </div>
                                <div className="jobsearch-CompanyAvatar-cta">
                                  Get job updates from {company_name}
                                </div>
                                <div className="name-rating">
                                  <a
                                    className="jobsearch-CompanyAvatar-companyLink"
                                    href=""
                                    target="_blank"
                                  >
                                    {company_name}
                                  </a>
                                  <div className="rating">
                                    <div className="icl-Ratings-starsWrapper">
                                      <div className="icl-Ratings-starsUnfilled">
                                        <div
                                          className="icl-Ratings-starsFilled"
                                          style={{
                                            width: "61.80000114440918px"
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="icl-Ratings-count">
                                      285 reviews
                                    </div>
                                  </div>
                                </div>
                                <div className="jobsearch-CompanyAvatar-description">
                                  Whether it's helping a vulnerable child,
                                  making highways safer or restoring salmon
                                  habitat, the work that we do matters to the
                                  people of ...
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="jobsearch-CompanyAvatar"
                    style={{ width: "250px" }}
                  >
                    <div
                      className="jobsearch-CompanyAvatar-card"
                      style={{ width: "250px" }}
                    >
                      <h2 className="right-title">Let employers find you</h2>
                      <div className="body">
                        <div className="jobsearch-CompanyAvatar-form">
                          <div>
                            <div>
                              <div className="jobsearch-CompanyAvatar-buttonContainer">
                                <div className="jobsearch-CompanyAvatar-cta">
                                  Thousands of employers search for candidates
                                  on our website
                                </div>
                                <div className="jobsearch-CompanyAvatar-button">
                                  <button
                                    className="icl-Button right-button"
                                    type="button"
                                    onClick={() =>
                                      window.open(
                                        `/profile`,
                                        "_blank",
                                        "noopener,noreferrer"
                                      )
                                    }
                                  >
                                    Upload your resume
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 className="sim-name">Similar Job</h2>
            <p style={{ fontStyle: "italic" }}>
              We found {simJob.length} similar jobs
            </p>
            <div className="row">
              <div
                className="col-ct-8"
                style={{
                  backgroundColor: "#fff",
                  padding: "0 20px 20px 20px",
                  marginBottom: "20px"
                }}
              >
                {simJob.length !== 0 &&
                  simJob.map(
                    ({
                      job_post_id,
                      contact_type,
                      job_description,
                      job_title,
                      company_background,
                      company_logo,
                      company_name,
                      posted_in,
                      province_id,
                      salary
                    }) => {
                      return (
                        <SimJob
                          id={job_post_id}
                          contractType={contact_type}
                          description={job_description}
                          title={job_title}
                          companyBg={company_background}
                          companyLogo={company_logo}
                          companyName={company_name}
                          postedIn={posted_in}
                          provinceId={province_id}
                          salary={salary}
                          provinces={provinceTotal}
                        />
                      );
                    }
                  )}
                <div className="sim-name__more">
                  <Link to="/find-jobs">See more ... </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ApplyModal
        visible={showModal.apply}
        onCancel={onCancel}
        {...{
          company_name,
          job_title,
          token,
          jp_id: id,
          location: getProvince()
        }}
      />

      <LoginModal show={showModal.authen} toggleModal={onCancel} />
    </>
  );
};

export default CandidateJobDetail;

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={710}
    height={600}
    viewBox="0 0 710 600"
    backgroundColor="#b7b3b3"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="10" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="40" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="90" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="112" rx="0" ry="0" width="750" height="14" />
    <rect x="0" y="135" rx="0" ry="0" width="750" height="14" />
    <rect x="0" y="177" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="207" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="246" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="271" rx="0" ry="0" width="750" height="14" />
    <rect x="0" y="296" rx="0" ry="0" width="750" height="14" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="376" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="414" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="438" rx="0" ry="0" width="750" height="14" />
    <rect x="0" y="464" rx="0" ry="0" width="750" height="14" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="414" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="414" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
    <rect x="0" y="344" rx="0" ry="0" width="750" height="20" />
  </ContentLoader>
);
