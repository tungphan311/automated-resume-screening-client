import { Button } from "antd";
import { NAVIGATIONS } from "constants/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserAction } from "state/actions/authenticationActions";
import history from "state/history";
import { checkCookie, setCookie } from "utils/cookies";
import "./NavBar.scss";

function NavBar() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);

  //Handle logout
  const logOut = () => {
    setCookie("token", accessToken, 0);
    dispatch(logoutUserAction());
  };

  return (
    <div
      id="navBar"
      className="collapse navbar-collapse header__navbar-collapse py-0"
    >
      <ul className="navbar-nav header__navbar-nav">
        {NAVIGATIONS.map(({ title, url, link, button }) => (
          <NavItem key={title} {...{ title, url, link, button }} />
        ))}
        {checkCookie() ? (
          <NavItem
            btnClick={logOut}
            {...{ title: "Đăng xuất", url: "/", button: true }}
          />
        ) : (
          <NavItem
            {...{
              title: "Đăng nhập",
              url: "/sign-in/candidate",
              button: true
            }}
          />
        )}
        <span className="nav-separator nav-separator--grey"></span>
        <Button
          type="primary"
          size="large"
          onClick={() => history.push("/recruitment")}
        >
          Nhà tuyển dụng
        </Button>
      </ul>
    </div>
  );
}

export default NavBar;

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
