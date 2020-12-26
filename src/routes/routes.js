import CandidateLayout from "layouts/CandidateLayout/CandidateLayout";
import RecruiterLayout from "layouts/RecruiterLayout/RecruiterLayout";
import EmptyLayout from "layouts/EmptyLayout/EmptyLayout";
import CandidateSignIn from "pages/Candidate/CandidateSignIn/CandidateSignIn";
import CandidateSignUp from "pages/Candidate/CandidateSignUp/CandidateSignUp";
import CandidateHome from "pages/Candidate/Home/Home";
import CandidateJobList from "pages/Candidate/JobList/JobList";
import CandidateProfile from "pages/Candidate/Profile/Profile";
import CandidateReviewCV from "pages/Candidate/ReviewCV/ReviewCV";
import ConfirmMail from "pages/Empty/ConfirmMail/ConfirmMail";
import HRHome from "pages/HR/Home/Home";
import HRSignIn from "pages/HR/HRSignIn/HRSignIn";
import HRSignUp from "pages/HR/HRSignUp/HRSignUp";
import HRJobManage from "pages/HR/JobDetail/JobManage";
import HRJobList from "pages/HR/JobList/JobList";
import HRPostJob from "pages/HR/PostJob/PostJob";
import HRUpdateCompany from "pages/HR/UpdateCompany/UpdateCompany";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { checkCookie } from "../utils/cookies";

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
        <Redirect
          to={{
            pathname: redirect
          }}
        />
      )
    }
  />
);

export const CandidateRoute = ({
  token_key = "candidate_token",
  redirect = "/sign-in",
  ...rest
}) => <AuthorizedRoute token_key={token_key} redirect={redirect} {...rest} />;

export const RecruiterRoute = ({
  token_key = "recruiter_token",
  redirect = "/sign-in",
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
        path={["/", "/profile", "/recruiter", "/profile/review", "/find-jobs"]}
      >
        <CandidateLayout>
          <UnauthorizedRoute exact path="/" component={CandidateHome} />
          <UnauthorizedRoute exact path="/recruiter" component={HRHome} />
          <CandidateRoute exact path="/profile" component={CandidateProfile} />
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
          "/recruiter/jobs/:id",
          "/recruiter/jobs/:id/candidates",
          "/recruiter/company/update",
          "/recruiter/jobs",
          "/recruiter/new-job"
        ]}
      >
        <RecruiterLayout>
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
            path="/recruiter/jobs/:id/candidates"
            component={HRJobManage}
          />
        </RecruiterLayout>
      </Route>
    </Switch>
  );
}

export default Routes;
