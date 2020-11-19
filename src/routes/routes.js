import CandidateLayout from "layouts/CandidateLayout/CandidateLayout";
import EmptyLayout from "layouts/EmptyLayout/EmptyLayout";
import CandidateSignIn from "pages/Candidate/CandidateSignIn/CandidateSignIn";
import HRSignIn from "pages/HR/HRSignIn/HRSignIn";
import CandidateHome from "pages/Candidate/Home/Home";
import CandidateProfile from "pages/Candidate/Profile/Profile";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HRHome from "pages/HR/Home/Home";
import HRPostJob from "pages/HR/PostJob/PostJob";

// component for admin site to determine user is logined or not
export const AuthorizedRoute = ({
  component: Component,
  isUser = true,
  redirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isUser ? (
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
        path={["/", "/profile", "/recruitment", "/recruitment/jobs/new-job"]}
      >
        <CandidateLayout>
          <UnauthorizedRoute exact path="/" component={CandidateHome} />
          <UnauthorizedRoute exact path="/recruitment" component={HRHome} />
          <AuthorizedRoute exact path="/profile" component={CandidateProfile} />
          <AuthorizedRoute
            exact
            path="/recruitment/jobs/new-job"
            component={HRPostJob}
          />
        </CandidateLayout>
      </Route>

      <Route exact path={["/sign-in/candidate", "/sign-in/hr"]}>
        <EmptyLayout>
          <UnauthorizedRoute
            exact
            path="/sign-in/candidate"
            component={CandidateSignIn}
          />
          <UnauthorizedRoute exact path="/sign-in/hr" component={HRSignIn} />
        </EmptyLayout>
      </Route>
    </Switch>
  );
}

export default Routes;
