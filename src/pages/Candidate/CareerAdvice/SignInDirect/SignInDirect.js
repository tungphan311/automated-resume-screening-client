import React from "react";
import "./SignInDirect.scss";
import { Link } from "react-router-dom";

const SignInDirect = ({ isNeedCV = false }) => {
  return (
    <div className="sign-direct">
      <h2 className="sign-direct__title">
        {isNeedCV
          ? "Create a Profile to see tailored matches"
          : " Sign in or register a Profile to see tailored matches"}
      </h2>

      <ul className="sign-direct__list">
        <li className="sign-direct__list__item">
          Identify the skills you already have, based on your experience so far
        </li>
        <li className="sign-direct__list__item">
          See how your skill set could make you a match for different roles or
          industries
        </li>
        <li className="sign-direct__list__item">
          Rate your skills levels and what you enjoy to refine your options
        </li>
        <li className="sign-direct__list__item">
          Discover ways to make a change or expand your horizons with new skills
        </li>
      </ul>

      <div className="sign-direct__button">
        {isNeedCV ? (
          <>
            {" "}
            <Link to="/profile" className="sign-direct__button__sign-in">
              Upload your resume
            </Link>
            {/* <p>or</p>
            <Link to="/profile" className="sign-direct__button__register">
             
            </Link>{" "} */}
          </>
        ) : (
          <>
            {" "}
            <Link to="/sign-in" className="sign-direct__button__sign-in">
              Sign In
            </Link>
            <p>or</p>
            <Link to="/sign-up" className="sign-direct__button__register">
              Register
            </Link>{" "}
          </>
        )}
      </div>

      <div className="sign-direct__img">
        <img src="https://www.seek.com.au/career-advice/assets/9d11997f.svg" />
      </div>
    </div>
  );
};

export default SignInDirect;
