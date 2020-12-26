// import { Button } from "antd";
import { RECRUITER_NAV } from "constants/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserAction } from "state/actions/authenticationActions";
// import history from "state/history";
import { checkCookie, setCookie } from "utils/cookies";
import "./NavBar.scss";

function RecruiterNavBar() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.recruiter.token);

  //Handle logout
  const logOut = () => {
    setCookie("recruiter_token", accessToken, 0);
    dispatch(logoutUserAction());
  };

  return (
    <div
      id="navBar"
      className="collapse navbar-collapse header__navbar-collapse py-0"
    >
      <ul className="navbar-nav header__navbar-nav">
        {RECRUITER_NAV.map(({ title, url, link, button }) => (
          <NavItem key={title} {...{ title, url, link, button }} />
        ))}
        {checkCookie("recruiter_token") ? (
          <NavItem
            btnClick={logOut}
            {...{ title: "Đăng xuất", url: "/recruiter", button: true }}
          />
        ) : (
          <NavItem
            {...{
              title: "Đăng nhập",
              url: "/recruiter/sign-in",
              button: true
            }}
          />
        )}
        {/* <span className="nav-separator nav-separator--grey"></span> */}
        {/* <Button
          type="primary"
          size="large"
          onClick={() => history.push("/recruiter")}
        >
          Nhà tuyển dụng
        </Button> */}
      </ul>
    </div>
  );
}

export default RecruiterNavBar;

const NavItem = ({ title, url, link = false, button = false, btnClick }) => (
  <li className="nav-item header__nav-item">
    {link && (
      <Link to={url} className="nav-link header__nav-link">
        {title}
      </Link>
    )}
    {button && (
      <Link onClick={btnClick} to={url} className="nav-link header__nav-button">
        {title}
      </Link>
    )}
  </li>
);
