import JobSearch from "components/Forms/JobSearch/JobSearch";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import ExploreWithSkills from "./ExploreSkills/ExploreWithSkills";
import FindJob from "./FindJob/FindJob";

import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { Tabs, Tab } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import "./CareerAdvice.scss";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { candidateProfileAction } from "state/actions/profileAction";
import { useSelector, useDispatch } from "react-redux";

function CandidateCareerAdvice({ history }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.candidateProfile);
  const token = useSelector((state) => state.auth.candidate.token);

  const { domains } = useSelector((state) => state.jobDomain);
  const { provinces } = useSelector((state) => state.cv);

  useEffect(() => {
    token && dispatch(candidateProfileAction(token));
  }, []);

  return (
    <div className="career-advice">
      {/* Tabs  */}
      <Tabs className="main-tabs" defaultActiveKey="explore">
        <Tab eventKey="explore" title="Explore what I can do with my skills">
          <ExploreWithSkills profile={profile} />
        </Tab>
        <Tab eventKey="find" title="Find the right job for me">
          <FindJob history={history} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default CandidateCareerAdvice;
