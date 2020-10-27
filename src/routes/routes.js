import CandidateHome from "pages/Candidate/Home/Home";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
            pathname: redirect,
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
      <Route exact path={["/"]}>
        <UnauthorizedRoute exact path="/" component={CandidateHome} />
      </Route>
    </Switch>
  );
}

export default Routes;
