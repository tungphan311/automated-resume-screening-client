import { FileTextOutlined, PlusSquareOutlined } from "@ant-design/icons";
import React from "react";

export const NAVIGATIONS = [
  { title: "Tìm việc", url: "/find-jobs", link: true },
  { title: "Đánh giá công ty", url: "/companies", link: true }
];

export const RECRUITER_NAV = [
  { title: "Tìm ứng viên", url: "/recruiter/find-candidates", link: true },
  { title: "Tin tuyển dụng", url: "/recruiter/jobs", link: true }
];

export const JOBS_MENU = [
  {
    href: "/recruiter/jobs",
    icon: <FileTextOutlined />,
    label: "Danh sách tin tuyển dụng"
  },
  {
    href: "/recruiter/new-job",
    icon: <PlusSquareOutlined />,
    label: "Đăng tin tuyển dụng mới"
  }
];
