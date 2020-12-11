import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "state/actions/authenticationActions";
import { checkCookie } from "utils/cookies";
import "./HRSignIn.scss";

const validateMessages = {
  required: "Vui lòng nhập ${label}",
  types: {
    email: "Email không hợp lệ",
    password: "Mật khẩu"
  }
};

function HRSignIn() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // const isLogin = useSelector((state) => state.login.isLogin);
  // const accessToken = useSelector((state) => state.login.token);

  //Handle submit Login
  const onFinish = (values) => {
    setIsLoading(true);
    dispatch(loginAction({ user: values.user })).catch(() => {
      setIsLoading(false);
    });
  };

  return checkCookie() ? (
    <Redirect to="/" />
  ) : (
    <div className="hr-login">
      <div className="hr-login__container">
        {/* Login Form  */}
        <div className="hr-login__container__left">
          <div className="hr-login__container__left__logo">
            <Link to="/" className="hr-login__container__left__logo__wrapper">
              <img
                src="https://htmlstream.com/preview/space-v1.6.1/assets/svg/logos/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <span className="hr-login__container__left__title">
            Nhà&nbsp;tuyển&nbsp;dụng&nbsp;đăng&nbsp;nhập
          </span>

          <Form
            layout="vertical"
            name="nest-messages"
            validateMessages={validateMessages}
            onFinish={onFinish}
            className="hr-login__container__left__form"
          >
            {/* Email */}
            <Form.Item
              label="Email"
              name={["user", "email"]}
              rules={[{ type: "email", required: true }]}
            >
              <Input
                className="hr-login__container__left__form__input"
                placeholder="Nhập email"
              />
            </Form.Item>

            {/* Password  */}
            <Form.Item
              label="Mật khẩu"
              name={["user", "password"]}
              rules={[{ required: true }]}
            >
              <Input.Password
                className="hr-login__container__left__form__input"
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>

            {/* <Link to="/sign-up/hr">Đăng kí tài khoản</Link> */}

            {/* Button Login  */}
            <button
              htmlType="submit"
              className="hr-login__container__left__form__btn"
            >
              Đăng nhập
              {isLoading && <div className="dashed-loading"></div>}
            </button>
          </Form>

          <button className="hr-login__container__left__form__social__item hr-login__container__left__form__social__item--register">
            <Link to="/sign-up/hr">
              <span> Đăng ký tài khoản mới</span>
            </Link>
          </button>

          <div className="hr-login__container__left__link">
            <p className="hr-login__container__left__link__text">
              Người tìm việc <Link to="/sign-in/candidate">đăng nhập</Link>
            </p>
          </div>
        </div>

        {/* Background Image  */}
        <div
          className="hr-login__bg"
          style={{
            backgroundImage: "url('/assets/img/login-hr-bg.jpg')"
          }}
        ></div>
      </div>
    </div>
  );
}

export default HRSignIn;
