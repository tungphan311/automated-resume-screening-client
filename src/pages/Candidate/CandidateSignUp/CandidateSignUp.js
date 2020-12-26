// import { createFromIconfontCN, GooglePlusOutlined } from "@ant-design/icons";
import { Form, Input, Radio, DatePicker } from "antd";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerCandidateAction } from "state/actions/authenticationActions";
import { checkCookie } from "utils/cookies";
import "./CandidateSignUp.scss";

const config = {
  rules: [
    { type: "object", required: true, message: "Vui lòng chọn ngày sinh!" }
  ]
};

const validateMessages = {
  required: "Vui lòng nhập ${label}!",
  types: {
    email: "Email không hợp lệ",
    password: "Mật khẩu"
  }
};

function CandidateSignUp() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  //Handle submit Login
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      dateOfBirth: fieldsValue["dateOfBirth"].format("YYYY-MM-DD")
    };

    delete values.confirm;

    setLoading(true);

    dispatch(registerCandidateAction(values)).catch(() => {
      setLoading(false);
    });
  };

  return checkCookie("candidate_token") ? (
    <Redirect to="/" />
  ) : (
    <div className="candidate-register">
      <div className="candidate-register__container">
        {/* Login Form  */}
        <div className="candidate-register__container__left">
          <div className="candidate-register__container__left__logo">
            <Link
              to="/"
              className="candidate-register__container__left__logo__wrapper"
            >
              <img
                src="https://htmlstream.com/preview/space-v1.6.1/assets/svg/logos/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <span className="candidate-register__container__left__title">
            Người&nbsp;tìm&nbsp;việc&nbsp;đăng&nbsp;ký
          </span>

          <Form
            layout="vertical"
            name="nest-messages"
            validateMessages={validateMessages}
            onFinish={onFinish}
            className="candidate-register__container__left__form"
          >
            {/* Fullname */}
            <Form.Item
              label="Họ và tên"
              name="fullName"
              rules={[{ required: true }]}
            >
              <Input
                className="candidate-register__container__left__form__input"
                placeholder="Họ và tên"
              />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ type: "email", required: true }]}
            >
              <Input
                className="candidate-register__container__left__form__input"
                placeholder="Email"
              />
            </Form.Item>

            {/* Password  */}
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!"
                }
              ]}
              hasFeedback
            >
              <Input.Password
                className="candidate-register__container__left__form__input"
                placeholder="Mật khẩu"
              />
            </Form.Item>

            {/* Confirm password  */}
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận mật khẩu!"
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Password không trùng khớp, vui lòng kiểm tra lại!"
                    );
                  }
                })
              ]}
            >
              <Input.Password
                placeholder="Xác nhận mật khẩu"
                className="candidate-register__container__left__form__input"
              />
            </Form.Item>

            <div className="candidate-register__container__left__form__group">
              {/* Date of birth */}
              <Form.Item name="dateOfBirth" label="Ngày sinh" {...config}>
                <DatePicker
                  placeholder="Ngày sinh"
                  className="candidate-register__container__left__form__input"
                />
              </Form.Item>

              {/* Gender  */}
              <Form.Item
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" }
                ]}
                name="gender"
              >
                <Radio.Group>
                  <Radio value={true}>Nam</Radio>
                  <Radio value={false}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            {/* Phonenumber */}
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true },
                {
                  pattern: /^[\d]{0,11}$/,
                  message: "Số điện thoại tối đa 11 số"
                },
                { min: 10, message: "Số điện thoại phải từ 10-11 số" }
              ]}
            >
              <Input
                className="candidate-register__container__left__form__input"
                placeholder="Số điện thoại"
                type="number"
              />
            </Form.Item>

            <p className="candidate-register__container__form__confirm__text">
              Đã có tài khoản?{" "}
              <Link to="/sign-in">
                <strong>Đăng nhập ngay</strong>
              </Link>
            </p>

            {/* Button Login  */}
            <button
              htmlType="submit"
              className="candidate-register__container__left__form__btn"
            >
              Đăng ký
              {isLoading && <div className="dashed-loading"></div>}
            </button>
          </Form>
          {/* 
          <div className="candidate-register__container__left__link">
            <p className="candidate-register__container__left__link__text">
              Nhà tuyển dụng <Link to="/sign-up/hr">đăng ký</Link>
            </p>
          </div> */}
        </div>

        {/* Background Image  */}
        <div
          className="candidate-register__bg"
          style={{
            backgroundImage: "url('/assets/img/login-candidate-bg.jpg')"
          }}
        ></div>
      </div>
    </div>
  );
}

export default CandidateSignUp;
