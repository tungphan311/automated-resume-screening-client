import { Modal, Tabs, Tab } from "react-bootstrap";
import React from "react";
import { Form, Input, Radio, DatePicker } from "antd";
import "./LoginModal.scss";
import { CloseOutlined } from "@ant-design/icons";

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

function LoginModal({ show, toggleModal }) {
  return (
    <Modal show={show} onHide={toggleModal} dialogClassName="ir-modal">
      <Modal.Body>
        <button class="btn-close text-gray" onClick={toggleModal}>
          <CloseOutlined />
        </button>
        <div>
          <Tabs defaultActiveKey="login">
            <Tab eventKey="login" title="Đăng nhập">
              <div className="text-note text-center text-dark-gray">
                Đăng nhập hoặc Đăng ký để ứng tuyển công việc này!
              </div>
              <Login />
            </Tab>
            <Tab eventKey="signup" title="Đăng ký">
              <div className="text-note text-center text-dark-gray">
                Đăng nhập hoặc Đăng ký để ứng tuyển công việc này!
              </div>
              <Signup />
            </Tab>
          </Tabs>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;

const Login = () => (
  <Form
    layout="vertical"
    name="nest-messages"
    validateMessages={validateMessages}
    //   onFinish={onFinish}
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
    <button htmlType="submit" className="hr-login__container__left__form__btn">
      Đăng nhập
      {/* {isLoading && <div className="dashed-loading"></div>} */}
    </button>
  </Form>
);

const Signup = () => (
  <Form
    layout="vertical"
    name="nest-messages"
    validateMessages={validateMessages}
    // onFinish={onFinish}
    className="candidate-register__container__left__form"
  >
    {/* Fullname */}
    <Form.Item label="Họ và tên" name="fullName" rules={[{ required: true }]}>
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
        rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
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

    {/* Button Login  */}
    <button
      htmlType="submit"
      className="candidate-register__container__left__form__btn"
    >
      Đăng ký
      {/* {isLoading && <div className="dashed-loading"></div>} */}
    </button>
  </Form>
);
