import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-left">
          <h3>
            Automated&nbsp;<span>Screening</span>
          </h3>
          <p className="footer-links">
            <Link to="/" className="mr-5">
              Trang chủ
            </Link>
            <span className="mr-5">-</span>
            <Link to="#" className="mr-5">
              Giới thiệu
            </Link>
            <span className="mr-5">-</span>
            <Link to="#" className="mr-5">
              Liên hệ
            </Link>
            <span className="mr-5">-</span>
            <Link to="#" className="mr-5">
              Hỏi đáp
            </Link>
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p>
              <span>KP6, Linh Trung, Thủ Đức</span>
              Thành phồ Hồ Chí Minh
            </p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>0333367634</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <a href="mailto:16521399@gm.uit.eud.vn">16521399@gm.uit.eud.vn</a>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Về Automated Screening</span>
            Đây là sản phẩm khoá luận tốt nghiệp của nhóm sinh viên Phan Thanh
            Tùng và Phạm Quang Vinh sau quá trình học tập tại Trường Đại học
            Công nghệ Thông tin
          </p>
          <div className="footer-icons">
            <a href="#" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
