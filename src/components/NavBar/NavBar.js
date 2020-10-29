import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div
      id="navBar"
      className="collapse navbar-collapse header__navbar-collapse py-0"
    >
      <div className="navbar-nav header__navbar-nav">
        <NavItem title="Tìm việc" />
        <NavItem title="Đánh giá công ty" />
      </div>
    </div>
  );
}

export default NavBar;

const NavItem = ({ title }) => (
  <Link to="#" className="nav-link with-border">
    <span className="nav-link__text">{title}</span>
  </Link>
);
