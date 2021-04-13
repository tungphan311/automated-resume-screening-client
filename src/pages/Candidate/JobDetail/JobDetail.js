/* eslint-disable jsx-a11y/anchor-is-valid */
import Dropdown from "components/Dropdown/Dropdown";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import JobItem from "components/JobItem/JobItem";
import { CONTACTS, PAGE_SIZES, DATES } from "constants/index";
import React, { useEffect, useState } from "react";
import "./JobDetail.scss";
import './JobDetail.css';
import { Pagination, Select } from "antd";
import { findJobs } from "services/jobServices";
import { formatSearchHistory, toastErr } from "utils/index";
import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import qs from "query-string";
import { Link, useLocation } from "react-router-dom";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={410}
    height={600}
    viewBox="0 0 410 600"
    backgroundColor="#b7b3b3"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="10" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="40" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="90" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="112" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="135" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="177" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="207" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="246" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="271" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="296" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="344" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="376" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="414" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="438" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="464" rx="0" ry="0" width="400" height="14" />
  </ContentLoader>
);

function CandidateJobDetail({ history }) {
  return (
    <div className="detail-page">
      <div
        id="search-jobs"
        className="search-jobs-container search-jobs-widget"
      >
        <div className="container">
          <JobSearchAdvance history={history} />
        </div>
      </div>

      <div className="container" style={{backgroundColor: '#fff'}}>
        <div className="row">
          <div className="col-ct-8">
            <div className="JobTitle">
              <h1>Front-end Development Fresher (ReactJS)</h1>
              <div>
                  <div className="text">Zalo</div>
                  <div className="text">Thành phố Hồ Chí Minh</div>
              </div>
              <div className="box">
                <a>Apply Now</a>
                <div>
                    <button className="icon">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
              </div>
            </div>

            
            <div className="JobDetail">
                <div>
                <p>Develop Zalo for Work's features</p>
                <div><h2 class="jobSectionHeader"><b>What you will do</b></h2>
                <ul><li>Join a team to learn and research how to develop new features for Zalo for work - a web application in ReactJS;</li>
                <li>Continuously grow by participating in valuable training sessions from experienced mentors.</li>
                </ul><h2 class="jobSectionHeader"><b>What you will need</b></h2>
                <ul><li>3rd/4th year student or fresh graduates in Computer Science, Engineering or related field;</li>
                <li>Bold passion in programming with ReactJS and having knowledge of Javascript Core;</li>
                <li>Understanding of data structures and algorithms;</li>
                <li>A team player who can work both as individual and as a team;</li>
                <li>Having a strong sense of ownership, being open-minded and eager to learn.</li></ul></div>
                </div>
                
                <div class="jobsearch-JobMetadataFooter">
                    <div class="icl-u-textColor--success">Zalo</div>
                    <div>30+ days ago</div>
                    <div id="originalJobLinkContainer" class="icl-u-lg-inline icl-us-xs-hide">
                        <a>original job</a>
                    </div>
                    <div>
                        <div>
                            <div>
                                <button class="mosaic-reportcontent-button desktop" type="button">
                                <i class="fas fa-flag"></i>
                                Report job
                                </button>
                            </div>
                        <div class="mosaic-reportcontent-content"></div></div></div></div>
            </div>

          </div>
          <div className="col-ct-4">
                <div className="ComSidebar">
                  <div className="jobsearch-CompanyAvatar">
                      <div  className="jobsearch-CompanyAvatar-card">
                          <h2>Company Info</h2>
                          <div className="body">
                              <div className="jobsearch-CompanyAvatar-form">
                                  <div>
                                      <div>
                                          <div className="jobsearch-CompanyAvatar-buttonContainer">
                                              <a>
                                              <img class="jobsearch-CompanyAvatar-image" src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/6e2561ea0f71d8647a00e216bd6d0440" />
                                              </a>
                                              <div className="jobsearch-CompanyAvatar-button">
                                                  <button className="icl-Button" type="button">Follow</button>
                                              </div>
                                              <div className="jobsearch-CompanyAvatar-cta">Get job updates from Zalo</div>
                                              <div className="name-rating">
                                                  <a className="jobsearch-CompanyAvatar-companyLink" href="" target="_blank">State of Washington Dept. of Corrections</a>
                                                  <div className="rating">
                                                      <div className="icl-Ratings-starsWrapper">
                                                          <div className="icl-Ratings-starsUnfilled">
                                                              <div className="icl-Ratings-starsFilled" style={{width: '61.80000114440918px'}}></div>
                                                          </div>
                                                      </div>
                                                      <div className="icl-Ratings-count" >285 reviews</div>
                                                  </div>
                                              </div>
                                              <div class="jobsearch-CompanyAvatar-description">Whether it's helping a vulnerable child, making highways safer or restoring salmon habitat, the work that we do matters to the people of ...</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div className="jobsearch-CompanyAvatar" style={{width: '250px'}}>
                      <div  className="jobsearch-CompanyAvatar-card" style={{width: '250px'}}>
                          <h2>Company Info</h2>
                          <div className="body">
                              <div className="jobsearch-CompanyAvatar-form">
                                  <div>
                                      <div>
                                          <div className="jobsearch-CompanyAvatar-buttonContainer">
                                            
                                              <div className="jobsearch-CompanyAvatar-cta">Thousands of employers search for candidates on Indeed</div>
                                              <div className="jobsearch-CompanyAvatar-button">
                                                  <button className="icl-Button" type="button">Upload your resume</button>
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
    </div>
  );
}

export default CandidateJobDetail;
