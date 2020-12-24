import React from "react";
import { Link } from "react-router-dom";
import "./JobDetailMenu.scss";
import { DownOutlined } from "@ant-design/icons";

function JobDetailMenu() {
  return (
    <div className="header-sub-menu">
      <div className="container">
        <nav
          className="j-navbar j-navbar-default j-navbar-sub-menu"
          style={{ width: "100%" }}
        >
          <div
            className="j-collapse j-navbar-collapse j-sub-menu"
            style={{ width: "100%" }}
          >
            <div className="split-menu">
              <button className="submenu-jobtitle">
                Frontend Developer <DownOutlined style={{ marginLeft: 10 }} />
              </button>
              <ul className="j-nav j-navbar-nav">
                <Item
                  href="/recruiter/jobs/1"
                  label="Thông tin tuyển dụng"
                  active={true}
                />
                <Item
                  href="/recruiter/jobs/1/candidates"
                  label="Danh sách ứng viên"
                  active={false}
                />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default JobDetailMenu;

const Item = ({ href, label, active }) => (
  <li className={`${active ? "active" : ""}`}>
    <Link to={href}>{` ${label}`}</Link>
  </li>
);
