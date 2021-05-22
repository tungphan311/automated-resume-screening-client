import CandidateLayout from "layouts/CandidateLayout/CandidateLayout";
import RecruiterLayout from "layouts/RecruiterLayout/RecruiterLayout";
import EmptyLayout from "layouts/EmptyLayout/EmptyLayout";
import ConfirmMail from "pages/Empty/ConfirmMail/ConfirmMail";

import CandidateSignIn from "pages/Candidate/CandidateSignIn/CandidateSignIn";
import CandidateSignUp from "pages/Candidate/CandidateSignUp/CandidateSignUp";
import CandidateHome from "pages/Candidate/Home/Home";
import CandidateJobList from "pages/Candidate/JobList/JobList";
import CandidateJobDetail from "pages/Candidate/JobDetail/JobDetail";
import CandidateCareerAdvice from "pages/Candidate/CareerAdvice/CareerAdvice";
import CandidateProfile from "pages/Candidate/Profile/Profile";
import CandidateReviewCV from "pages/Candidate/ReviewCV/ReviewCV";
import CareerDirection from "pages/Candidate/CareerDirection/CareerDirection";
import CandidateSavedJobs from "pages/Candidate/Jobs/SavedJobs/SavedJobs";
import CandidateAppliedJobs from "pages/Candidate/Jobs/AppliedJobs/AppliedJobs";
import CareerRole from "pages/Candidate/CareerRole/CareerRole";

import HRLandingPage from "pages/HR/LandingPage/LandingPage";
import HRHome from "pages/HR/Home/Home";
import HRSignIn from "pages/HR/HRSignIn/HRSignIn";
import HRSignUp from "pages/HR/HRSignUp/HRSignUp";
import HRJobManage from "pages/HR/JobDetail/JobManage";
import HRJobList from "pages/HR/JobList/JobList";
import HRPostJob from "pages/HR/PostJob/PostJob";
import HRUpdateCompany from "pages/HR/UpdateCompany/UpdateCompany";
import HRFilterCandidates from "pages/HR/FindCandidates/FilterCandidates";
import HRAddFilter from "pages/HR/AddFilter/AddFilter";
import HRFilterDetail from "pages/HR/FilterDetail/FilterDetail";
import HRSaveCandidates from "pages/HR/SaveCandidates/SaveCandidates";
import HRUpdateJob from "pages/HR/UpdateJob/UpdateJob";

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { checkCookie } from "../utils/cookies";
import MyProfile from "pages/Candidate/CandidateProfile/CandidateProfile";

// component for admin site to determine user is logined or not
export const AuthorizedRoute = ({
  component: Component,
  redirect,
  token_key,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      checkCookie(token_key) !== null ? (
        <Component {...props} {...rest} />
      ) : (
        <MyRedirect redirect={redirect} location={props.location.pathname} />
      )
    }
  />
);

export const MyRedirect = ({ location, redirect }) => {
  localStorage.setItem("location", location);

  return (
    <Redirect
      to={{
        pathname: redirect
      }}
    />
  );
};

export const CandidateRoute = ({
  token_key = "candidate_token",
  redirect = "/sign-in",
  ...rest
}) => <AuthorizedRoute token_key={token_key} redirect={redirect} {...rest} />;

export const RecruiterRoute = ({
  token_key = "recruiter_token",
  redirect = "/recruiter/sign-in",
  ...rest
}) => <AuthorizedRoute token_key={token_key} redirect={redirect} {...rest} />;

export const UnauthorizedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} {...rest} />} />
);

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path={[
          "/",
          "/profile",
          "/profile/review",
          "/find-jobs",
          "/saved-jobs",
          "/applied-jobs",
          "/job-detail/:id",
          "/career-advice",
          "/career-advice/skill=:skill",
          "/career-advice/id=:id&role=:role",
        ]}
      >
        <CandidateLayout>
          <UnauthorizedRoute exact path="/" component={CandidateHome} />
          <CandidateRoute
            exact
            path="/profile/review"
            component={CandidateReviewCV}
          />
          <UnauthorizedRoute
            exact
            path="/find-jobs"
            component={CandidateJobList}
          />
          <UnauthorizedRoute
            exact
            path="/job-detail/:id"
            component={CandidateJobDetail}
          />
          <UnauthorizedRoute
            exact
            path="/career-advice"
            component={CandidateCareerAdvice}
          />
          <UnauthorizedRoute
            exact
            path="/career-advice/skill=:skill"
            component={CareerDirection}
          />
          <UnauthorizedRoute
            exact
            path="/career-advice/id=:id&role=:role"
            component={CareerRole}
          />
          <CandidateRoute
            exact
            path="/saved-jobs"
            component={CandidateSavedJobs}
          />
          <CandidateRoute
            exact
            path="/applied-jobs"
            component={CandidateAppliedJobs}
          />
          <CandidateRoute exact path="/profile" component={MyProfile} />
        </CandidateLayout>
      </Route>

      <Route
        exact
        path={[
          "/sign-in",
          "/recruiter/sign-in",
          "/confirm-mail/",
          "/confirm-mail/?token=:token&type=:type",
          "/sign-up",
          "/recruiter/sign-up"
        ]}
      >
        <EmptyLayout>
          <UnauthorizedRoute
            exact
            path="/sign-in"
            component={CandidateSignIn}
          />
          <UnauthorizedRoute
            exact
            path="/recruiter/sign-in"
            component={HRSignIn}
          />
          <UnauthorizedRoute
            exact
            path="/confirm-mail/"
            component={ConfirmMail}
          />
          <UnauthorizedRoute
            exact
            path="/confirm-mail/?token=:token&type=:type"
            component={ConfirmMail}
          />
          <UnauthorizedRoute
            exact
            path="/sign-up"
            component={CandidateSignUp}
          />
          <UnauthorizedRoute
            exact
            path="/recruiter/sign-up"
            component={HRSignUp}
          />
        </EmptyLayout>
      </Route>

      <Route
        exact
        path={[
          "/recruiter/home",
          "/recruiter",
          "/recruiter/jobs/:id",
          "/recruiter/jobs/:id/edit",
          "/recruiter/jobs/:id/candidates",
          "/recruiter/company/update",
          "/recruiter/jobs",
          "/recruiter/new-job",
          "/recruiter/find-candidates",
          "/recruiter/find-candidates/:id",
          "/recruiter/new-filter",
          "/recruiter/save-candidates"
        ]}
      >
        <RecruiterLayout>
          <UnauthorizedRoute
            exact
            path="/recruiter/home"
            component={HRLandingPage}
          />
          <RecruiterRoute exact path="/recruiter" component={HRHome} />
          <RecruiterRoute
            exact
            path="/recruiter/new-job"
            component={HRPostJob}
          />
          <RecruiterRoute exact path="/recruiter/jobs" component={HRJobList} />
          <RecruiterRoute
            exact
            path="/recruiter/company/update"
            component={HRUpdateCompany}
          />
          <RecruiterRoute
            exact
            path="/recruiter/jobs?status:status"
            component={HRJobList}
          />
          <RecruiterRoute
            exact
            path="/recruiter/jobs/:id"
            component={HRJobManage}
          />
          <RecruiterRoute
            exact
            path="/recruiter/jobs/:id/edit"
            component={HRUpdateJob}
          />
          <RecruiterRoute
            exact
            path="/recruiter/jobs/:id/candidates"
            component={HRJobManage}
          />
          <RecruiterRoute
            exact
            path="/recruiter/find-candidates"
            component={HRFilterCandidates}
          />
          <RecruiterRoute
            exact
            path="/recruiter/find-candidates/:id"
            component={HRFilterDetail}
          />
          <RecruiterRoute
            exact
            path="/recruiter/new-filter"
            component={HRAddFilter}
          />
          <RecruiterRoute
            exact
            path="/recruiter/save-candidates"
            component={HRSaveCandidates}
          />
        </RecruiterLayout>
      </Route>
    </Switch>
  );
}

export default Routes;
