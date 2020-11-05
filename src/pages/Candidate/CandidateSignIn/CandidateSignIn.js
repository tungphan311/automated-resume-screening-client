import React from "react";
import { Link } from "react-router-dom";

import { MailOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { Input, Form, Button } from "antd";

import "./CandidateSignIn.scss";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

const validateMessages = {
  required: "Vui lòng nhập ${label}",
  types: {
    email: "Email không hợp lệ",
    password: "Mật khẩu"
  }
};

function CandidateSignIn() {
  return (
    <div className="candidate-login">
      <div className="candidate-login__container">
        {/* Login Form  */}
        <div className="candidate-login__container__right">
          <div className="candidate-login__container__right__link">
            <Link
              to="/"
              className="candidate-login__container__right__link__back"
            >
              x
            </Link>
            <p className="candidate-login__container__right__link__text">
              Nhà tuyển dụng <Link to="/sign-in/hr">đăng nhập</Link>
            </p>
          </div>

          <Form
            layout="vertical"
            name="nest-messages"
            validateMessages={validateMessages}
            className="candidate-login__container__right__form"
          >
            <span className="candidate-login__container__right__form__title">
              Người tìm việc đăng nhập
            </span>

            {/* Email */}
            <Form.Item
              label="Email"
              name={["user", "email"]}
              rules={[{ type: "email", required: true }]}
            >
              <Input
                className="candidate-login__container__right__form__input"
                placeholder="Nhập Email"
              />
            </Form.Item>

            {/* Password  */}
            <Form.Item
              label="Mật khẩu"
              name={["user", "password"]}
              rules={[{ required: true }]}
            >
              <Input.Password
                className="candidate-login__container__right__form__input"
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>

            <a href="https://www.google.com.vn/">Quên mật khẩu?</a>

            {/* Button Login  */}
            <Button
              type="primary"
              htmlType="submit"
              className="candidate-login__container__right__form__btn"
            >
              Đăng nhập
            </Button>

            {/* Login with social  */}
            <div className="candidate-login__container__right__form__with text-center">
              <span>Hoặc đăng nhập với </span>
            </div>
            <div class="candidate-login__container__right__form__social">
              {/* Login with facebook  */}
              <a
                href="https://www.facebook.com/"
                className="candidate-login__container__right__form__social__item "
              >
                <IconFont
                  type="icon-facebook"
                  className="candidate-login__container__right__form__social__item--fb"
                />
              </a>

              {/* Login with gmail  */}
              <a
                href="https://mail.google.com/"
                className="candidate-login__container__right__form__social__item"
              >
                <MailOutlined className="candidate-login__container__right__form__social__item--gmail" />
              </a>
            </div>
          </Form>
        </div>

        {/* Background Image  */}
        <div
          className="candidate-login__bg"
          style={{
            backgroundImage: "url('/assets/img/login-candidate-bg.jpg')"
          }}
        ></div>
      </div>
    </div>
  );
}

export default CandidateSignIn;
