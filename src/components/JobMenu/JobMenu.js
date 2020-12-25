import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FileTextOutlined, PlusSquareOutlined } from "@ant-design/icons";
import "./JobMenu.scss";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

function JobMenu() {
  const { pathname } = window.location;

  const isPostingJob = pathname.startsWith("/recruitment/jobs/new-job");

  const token = useSelector((state) => state.auth.token);

  const {
    identity: { company_id: companyId }
  } = jwt_decode(token);

  if (companyId === null) {
    return <Redirect to="/recruiter/company/update" />;
  }

  return (
    <div className="header-sub-menu">
      <div className="container">
        <nav className="j-navbar j-navbar-default j-navbar-sub-menu">
          <div className="j-collapse j-navbar-collapse j-sub-menu">
            <ul className="j-nav j-navbar-nav">
              <Item
                href="/recruitment/jobs"
                icon={<FileTextOutlined />}
                label="Danh sách tin tuyển dụng"
                active={!isPostingJob}
              />
              <Item
                href="/recruitment/jobs/new-job"
                icon={<PlusSquareOutlined />}
                label="Đăng tin tuyển dụng mới"
                active={isPostingJob}
              />
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
