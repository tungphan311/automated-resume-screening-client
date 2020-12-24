import CandidateLayout from "layouts/CandidateLayout/CandidateLayout";
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
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { checkCookie } from "../utils/cookies";

// component for admin site to determine user is logined or not
export const AuthorizedRoute = ({
  component: Component,
  redirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      checkCookie() !== null ? (
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
          "/recruiter",
          "/recruiter/jobs/new-job",
          "/profile/review",
          "/recruiter/jobs",
          "/find-jobs",
          "/recruiter/jobs/:id"
        ]}
      >
        <CandidateLayout>
          <UnauthorizedRoute exact path="/" component={CandidateHome} />
          <UnauthorizedRoute exact path="/recruiter" component={HRHome} />
          <AuthorizedRoute exact path="/profile" component={CandidateProfile} />
          <AuthorizedRoute
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
            path="/recruiter/jobs/new-job"
            component={HRPostJob}
          />
          <UnauthorizedRoute
            exact
            path="/recruiter/jobs"
            component={HRJobList}
          />
          <UnauthorizedRoute
            exact
            path="/recruiter/jobs/:id"
            component={HRJobManage}
          />
        </CandidateLayout>
      </Route>

      <Route
        exact
        path={[
          "/sign-in/candidate",
          "/sign-in/hr",
          "/confirm-mail/",
          "/confirm-mail/?token=:token&type=:type",
          "/sign-up/candidate",
          "/sign-up/hr"
        ]}
      >
        <EmptyLayout>
          <UnauthorizedRoute
            exact
            path="/sign-in/candidate"
            component={CandidateSignIn}
          />
          <UnauthorizedRoute exact path="/sign-in/hr" component={HRSignIn} />
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
            path="/sign-up/candidate"
            component={CandidateSignUp}
          />
          <UnauthorizedRoute exact path="/sign-up/hr" component={HRSignUp} />
        </EmptyLayout>
      </Route>
    </Switch>
  );
}

export default Routes;
