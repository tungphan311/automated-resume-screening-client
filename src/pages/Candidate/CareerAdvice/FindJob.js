import JobSearch from "components/Forms/JobSearch/JobSearch";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { Tabs, Tab } from "react-bootstrap";
import { PushpinOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./FindJob.scss";

function FindJob() {
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
      </div>
    </div>
  );
}

export default FindJob;
