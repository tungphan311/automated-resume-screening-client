import { Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginCandidateProAction } from "state/actions/authenticationActions";
import history from "state/history";
import { checkCookie } from "utils/cookies";
import "./CandidateSignIn.scss";

const validateMessages = {
  required: "Vui lòng nhập ${label}",
  types: {
    email: "Email không hợp lệ",
    password: "Mật khẩu"
  }
};

function CandidateSignIn() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // const isLogin = useSelector((state) => state.login.isLogin);
  // const accessToken = useSelector((state) => state.login.token);

  //Handle submit Login
  const onFinish = (values) => {
    setIsLoading(true);

    dispatch(loginCandidateProAction({ user: values.user }))
      .then(() => {
        const location = localStorage.getItem("location");
        if (location) {
          history.push(location);
          localStorage.removeItem("location");
        } else {
          history.push("/");
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return checkCookie("candidate_token") ? (
    <Redirect to="/" />
  ) : (
    <div className="candidate-login">
      <div className="candidate-login__container">
        {/* Login Form  */}
        <div className="candidate-login__container__left">
          <div className="candidate-login__container__left__logo">
            <Link
              to="/"
              className="candidate-login__container__left__logo__wrapper"
            >
              <h3>
                Automated&nbsp;<span>Screening</span>
              </h3>
            </Link>
          </div>

          <span className="candidate-login__container__left__title">
            Người&nbsp;tìm&nbsp;việc&nbsp;đăng&nbsp;nhập
          </span>

          <Form
            layout="vertical"
            name="nest-messages"
            validateMessages={validateMessages}
            onFinish={onFinish}
            className="candidate-login__container__left__form"
          >
            {/* Email */}
            <Form.Item
              label="Email"
              name={["user", "email"]}
              rules={[{ type: "email", required: true }]}
            >
              <Input
                className="candidate-login__container__left__form__input"
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
                className="candidate-login__container__left__form__input"
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>

            {/* Button Login  */}
            <button
              htmlType="submit"
              className="candidate-login__container__left__form__btn"
            >
              Đăng nhập
              {isLoading && <div className="dashed-loading"></div>}
            </button>

            {/* Login with social  */}
            {/* <span className="candidate-login__container__left__form__with text-center">
              Hoặc bạn có thể
            </span> */}
          </Form>

          <div className="candidate-login__container__left__form__social">
            {/* Login with gmail  */}
            <Link to="/sign-up">
              <button className="candidate-login__container__left__form__social__item candidate-login__container__left__form__social__item--register">
                <span> Đăng ký tài khoản mới</span>
              </button>
            </Link>
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
