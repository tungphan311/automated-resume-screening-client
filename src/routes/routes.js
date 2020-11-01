import CandidateLayout from "layouts/CandidateLayout/CandidateLayout";
import CandidateHome from "pages/Candidate/Home/Home";
import CandidateProfile from "pages/Candidate/Profile/Profile";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

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
      <Route exact path={["/", "/profile"]}>
        <CandidateLayout>
          <UnauthorizedRoute exact path="/" component={CandidateHome} />
          <AuthorizedRoute exact path="/profile" component={CandidateProfile} />
        </CandidateLayout>
      </Route>
    </Switch>
  );
}

export default Routes;
