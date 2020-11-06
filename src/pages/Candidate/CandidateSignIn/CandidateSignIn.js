import React from "react";
import { Link } from "react-router-dom";

import { GooglePlusOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { Input, Form } from "antd";

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
          <div className="candidate-login__container__right__logo">
            <Link
              to="/"
              className="candidate-login__container__right__logo__wrapper"
            >
              <img
                src="https://htmlstream.com/preview/space-v1.6.1/assets/svg/logos/logo.svg"
                alt="logo"
              />
            </Link>
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
            <button
              htmlType="submit"
              className="candidate-login__container__right__form__btn"
            >
              Đăng nhập
            </button>

            {/* Login with social  */}
            <span className="candidate-login__container__right__form__with text-center">
              Hoặc bạn có thể
            </span>

            <div class="candidate-login__container__right__form__social">
              {/* Login with facebook  */}
              <button
                htmlType="submit"
                className="candidate-login__container__right__form__social__item candidate-login__container__right__form__social__item--fb"
              >
                <IconFont
                  className="candidate-login__container__right__form__social__item--fb__icon"
                  type="icon-facebook"
                />
                Đăng nhập với Facebook
              </button>

              {/* Login with gmail  */}
              <button
                htmlType="submit"
                className="candidate-login__container__right__form__social__item candidate-login__container__right__form__social__item--gmail"
              >
                <GooglePlusOutlined className="candidate-login__container__right__form__social__item--gmail__icon" />
                Đăng nhập với Google
              </button>
            </div>
          </Form>

          <div className="candidate-login__container__right__link">
            <p className="candidate-login__container__right__link__text">
              Nhà tuyển dụng <Link to="/sign-in/hr">đăng nhập</Link>
            </p>
          </div>
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
