import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { verifyUserAction } from "state/actions/authenticationActions";
import "./ConfirmMail.scss";

const ConfirmMail = (props) => {
  const dispatch = useDispatch();
  const emailVerify = useSelector((state) => state.auth.email);

  let token = props.match.params.token;

  useEffect(() => {
    token && dispatch(verifyUserAction(token));
  });

  return (
    <div className="confirm">
      <div className="blank-pages"></div>
      <div className="clearfix"></div>
      <div className="confirm__page">
        <div className="text-center">
          <Link to="/" className="confirm__page__logo">
            <img
              src="https://htmlstream.com/preview/space-v1.6.1/assets/svg/logos/logo.svg"
              alt="logo"
            />
          </Link>

          <h5 className="confirm__page__text ext-muted m-t-0 font-600">
            Easy to find, easy to get
          </h5>
        </div>
        <div className="m-t-40 card-box">
          <div className="text-center">
            <h4 className="text-uppercase font-bold m-b-0 confirm__title">
              Confirm Email
            </h4>
          </div>
          <div className="panel-body text-center">
            <img
              src="/assets/img/mail_confirm.png"
              alt="img"
              className="thumb-lg m-t-20 center-block"
            />
            {!token ? (
              <p className="text-muted font-13 m-t-20">
                A email has been send to <strong>{emailVerify}</strong>. Please
                check for an email from us and click on the included link to
                verify your account.
              </p>
            ) : (
              <p>Email has been verify. Please login to join with us</p>
            )}
          </div>
        </div>

        {token && (
          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="text-muted">
                Return to{" "}
                <Link to="/sign-in/candidate" className="text-primary m-l-5">
                  <strong>Sign in</strong>
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmMail;
