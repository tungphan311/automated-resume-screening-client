import React from "react";
import "./ReviewForm.scss";
import { Form, Input, Select, Button } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CV_VALUES } from "state/reducers/cvReducer";

function BasicForm({ curStep, handleChangeStep }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const provinces = useSelector((state) => state.cv.provinces);
  const basic = useSelector((state) => state.cv.basic);

  const validateMessages = {
    required: "Vui lòng nhập không bỏ trống"
  };

  const handleSubmit = () => {
    form.submit();
  };

  const onFinish = (values) => {
    dispatch({
      type: UPDATE_CV_VALUES,
      key: "basic",
      value: values
    });

    handleChangeStep(curStep + 1);
  };

  return (
    <>
      <div className="panel panel--light">
        <div className="panel-body">
          <div className="container-fluid">
            <div className="heading-margin sg-heading3 title">
              Thông tin liên lạc
            </div>
          </div>
          <div className="wizard-page-children container-fluid">
            <Form
              name="basic"
              form={form}
              layout="vertical"
              validateMessages={validateMessages}
              onFinish={onFinish}
              initialValues={basic}
            >
              <Form.Item
                label="Họ tên"
                name="name"
                required
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="Nhập họ và tên"
                  size="large"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="Số điện thoại"
                  size="large"
                  prefix={<PhoneOutlined />}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="Email"
                  size="large"
                  prefix={<MailOutlined />}
                />
              </Form.Item>
              <Form.Item
                label="Tỉnh/ thành sinh sống"
                name="location"
                required
                rules={[{ required: true }]}
              >
                <Select size="large">
                  {provinces.map(({ province_id, province_name }) => (
                    <Select.Option key={province_id} value={province_id}>
                      {province_name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <Button type="primary" onClick={handleSubmit}>
          Tới trang sau
        </Button>
        {curStep > 1 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => handleChangeStep(curStep - 1)}
          >
            Quay lại
          </Button>
        )}
      </div>
    </>
  );
}

export default BasicForm;
