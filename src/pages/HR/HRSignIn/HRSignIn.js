import { Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUserService } from "services/authenticationService";
import { loginUserAction } from "state/actions/authenticationActions";
import { checkCookie } from "utils/cookies";
import { toast } from "utils/index";
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
    const data = loginUserService(values.user);
    data
      .then((res) => {
        setIsLoading(false);
        dispatch(loginUserAction(res.data.access_token));
      })
      .catch(() => {
        setIsLoading(false);
        toast({ type: "error", message: "Sai tài khoản hoặc email" });
      });
  };

  //Handle set cookie after login success
  // if (isLogin) {
  //   setCookie("token", accessToken, 1);
  //   toast({ type: "success", message: "Đăng nhập thành công" });
  // }

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

            <a href="https://www.google.com.vn/">Quên mật khẩu?</a>

            {/* Button Login  */}
            <button
              htmlType="submit"
              className="hr-login__container__left__form__btn"
            >
              Đăng nhập
              {isLoading && <div class="dashed-loading"></div>}
            </button>
          </Form>

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
