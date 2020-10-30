import { Button } from "antd";
import { NAVIGATIONS } from "constants/index";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div
      id="navBar"
      className="collapse navbar-collapse header__navbar-collapse py-0"
    >
      <ul className="navbar-nav header__navbar-nav">
        {NAVIGATIONS.map(({ title, url, link, button }) => (
          <NavItem key={title} {...{ title, url, link, button }} />
        ))}
        <span className="nav-separator nav-separator--grey"></span>
        <Button type="primary" size="large">
          Nhà tuyển dụng
        </Button>
      </ul>
    </div>
  );
}

export default NavBar;

const NavItem = ({ title, url, link = false, button = false }) => (
  <li className="nav-item header__nav-item">
    {link && (
      <Link to={url} className="nav-link header__nav-link">
        {title}
      </Link>
    )}
    {button && (
      <Link to={url} className="nav-link header__nav-button">
        {title}
      </Link>
    )}
  </li>
);
