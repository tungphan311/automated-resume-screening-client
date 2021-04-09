import JobSearch from "components/Forms/JobSearch/JobSearch";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { Tabs, Tab } from "react-bootstrap";
import { PushpinOutlined, EditOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./FindJob.scss";

function FindJob() {
  const onClickRole = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="find-job">
      <div className="container">
        <div className="find-job__greeting">
          <strong>Hi there,</strong>{" "}
          <span>
            ready to explore advice and career options tailored to you?
          </span>
          <PushpinOutlined className="find-job__greeting__pin" />
        </div>
        <div className="find-job__title">Find the right job for me</div>
        {/* If not exist role */}
        <div className="find-job__not-role">
          <div className="find-job__not-role__content">
            <p>
              Learn what you need to know about a role, from salary to job
              satisfaction.
            </p>
            <div>
              Select a{" "}
              <a
                className="find-job__not-role__content__group"
                onClick={onClickRole}
              >
                role{" "}
                <EditOutlined className="find-job__not-role__content__group__icon" />
              </a>{" "}
              you're interested in to see more.
            </div>
          </div>

          <img
            src="https://www.seek.com.au/career-advice/assets/c3f39bdb.svg"
            alt="Career Advice image"
          />
        </div>

        {/* If already has role */}
        <div className="find-job__has-role"></div>
      </div>
    </div>
  );
}

export default FindJob;
