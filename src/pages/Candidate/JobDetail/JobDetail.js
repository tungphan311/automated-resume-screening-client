/* eslint-disable jsx-a11y/anchor-is-valid */
import Dropdown from "components/Dropdown/Dropdown";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import JobItem from "components/JobItem/JobItem";
import { CONTACTS, PAGE_SIZES, DATES } from "constants/index";
import React, { useEffect, useState } from "react";
import "./JobDetail.scss";
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

      <h1>Detail code</h1>
    </div>
  );
}

export default CandidateJobDetail;
