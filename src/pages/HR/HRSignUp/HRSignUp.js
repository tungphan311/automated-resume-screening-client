// import { createFromIconfontCN, GooglePlusOutlined } from "@ant-design/icons";
import { Form, Input, Radio } from "antd";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { checkCookie } from "utils/cookies";
import "./HRSignUp.scss";

// const IconFont = createFromIconfontCN({
//   scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
// });

const validateMessages = {
  required: "Vui lòng nhập ${label}!",
  types: {
    email: "Email không hợp lệ",
    password: "Mật khẩu"
  }
};

const { TextArea } = Input;

function CandidateSignUp() {
  //Handle submit Login
  const onFinish = (values) => {
    console.log(values);
  };

  return checkCookie() ? (
    <Redirect to="/" />
  ) : (
    <div className="hr-register">
      <div className="hr-register__container">
        <div className="hr-register__container__logo">
          <Link to="/" className="hr-register__container__logo__wrapper">
            <img
              src="https://htmlstream.com/preview/space-v1.6.1/assets/svg/logos/logo.svg"
              alt="logo"
            />
          </Link>
        </div>

        {/* Content  */}
        <div className="hr-register__container__form">
          <span className="hr-register__container__form__title">
            Nhà tuyển dụng đăng&nbsp;ký
          </span>

          <p className="hr-register__container__form__bigLabel">
            Thông tin đăng nhập
          </p>

          <Form
            layout="vertical"
            name="nest-messages"
            validateMessages={validateMessages}
            onFinish={onFinish}
            className="hr-register__container__form__confirm"
          >
            {/* Fullname */}
            <Form.Item
              label="Họ và tên"
              name="fullname"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
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
                className="hr-register__container__form__confirm__input"
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
                className="hr-register__container__form__confirm__input"
                placeholder="Mật khẩu"
              />
            </Form.Item>
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
                className="hr-register__container__form__confirm__input"
              />
            </Form.Item>
            {/* Phonenumber */}
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Số điện thoại"
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
              name="gender"
            >
              <Radio.Group>
                <Radio value={true}>Nam</Radio>
                <Radio value={false}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <p className="hr-register__container__form__bigLabel">
              Thông tin công ty
            </p>
            {/* Company name  */}
            <Form.Item
              label="Tên công ty"
              name="companyName"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Tên công ty"
              />
            </Form.Item>
            {/* Address  */}
            <Form.Item
              label="Địa chỉ"
              name="companyAddress"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Địa chỉ"
              />
            </Form.Item>

            {/* Company Email  */}
            <Form.Item
              label="Email liên hệ"
              name="companyMail"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Email liên hệ"
              />
            </Form.Item>

            {/* Company Address */}
            <Form.Item
              label="Số điện thoại liên hệ"
              name="companyPhone"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Số điện thoại liên hệ"
              />
            </Form.Item>

            {/* Company Logo  */}
            <Form.Item
              label="Logo"
              name="companyLogo"
              rules={[{ required: true }]}
            >
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Logo"
              />
            </Form.Item>

            {/* Company website */}
            <Form.Item label="Website" name="companyWebsite">
              <Input
                className="hr-register__container__form__confirm__input"
                placeholder="Website"
              />
            </Form.Item>

            {/* Description  */}
            <Form.Item label="Description" name="companyDescription">
              <TextArea
                rows={4}
                className="hr-register__container__form__confirm__input"
                placeholder="Mô tả"
              />
            </Form.Item>

            <p className="hr-register__container__form__confirm__text">
              Đã có tài khoản?{" "}
              <Link to="/sign-in/hr">
                <strong>Đăng nhập ngay</strong>
              </Link>
            </p>
            {/* Button Login  */}
            <button
              htmlType="submit"
              className="hr-register__container__form__confirm__btn"
            >
              Đăng ký
              {/* {isLoading && <div className="dashed-loading"></div>} */}
            </button>
          </Form>
          <div className="hr-register__container__form__link">
            <p className="hr-register__container__form__link__text">
              Người tìm việc{" "}
              <Link to="/sign-up/candidate">đăng kí tài khoản</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSignUp;
