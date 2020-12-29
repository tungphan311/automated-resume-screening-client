import React from "react";
import { Link } from "react-router-dom";
import "./JobMenu.scss";

function JobMenu({ menu }) {
  const { pathname } = window.location;

  return (
    <div className="header-sub-menu">
      <div className="container">
        <nav className="j-navbar j-navbar-default j-navbar-sub-menu">
          <div className="j-collapse j-navbar-collapse j-sub-menu">
            <ul className="j-nav j-navbar-nav">
              {menu.map((m, index) => (
                <Item key={index} {...m} active={pathname.startsWith(m.href)} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default JobMenu;

const Item = ({ href, icon, label, active }) => (
  <li className={`${active ? "active" : ""}`}>
    <Link to={href}>
      {icon}
      {` ${label}`}
    </Link>
  </li>
);
