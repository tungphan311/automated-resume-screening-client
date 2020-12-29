import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React from "react";
import { Input, Form } from "antd";
import "./AddFilter.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};

const validateMessages = {
  required: "${label} không được bỏ trống!"
};

function HRAddFilter() {
  const [advance, setAdvance] = useState(false);
  const [height, setHeight] = useState(0);

  const [form] = Form.useForm();
  const inputRef = useRef();
  const divRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setHeight(divRef.current.clientHeight);
  }, []);

  return (
    <>
      <JobMenu menu={CANDIDATES_MENU} />
      <div className="container" id="add-filter-box">
        <div className="panel panel-light">
          <div className="panel-heading">Tạo bộ lọc mới</div>
          <div className="panel-body">
            <Form {...layout} form={form} validateMessages={validateMessages}>
              <Form.Item
                label="Tên bộ lọc"
                name="name"
                rules={[{ required: true }]}
              >
                <Input
                  size="large"
                  ref={inputRef}
                  placeholder="Nhập tên bộ lọc"
                />
              </Form.Item>
              <div className="form-group">
                <div className="col-sm-9 col-sm-offset-3">
                  {!advance ? (
                    <button
                      type="button"
                      className="text-primary"
                      onClick={() => setAdvance(true)}
                    >
                      <i className="fa fa-plus-square mr-5" />
                      Cài đặt nâng cao
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="text-primary"
                      onClick={() => setAdvance(false)}
                    >
                      <i className="fa fa-minus-square mr-5" />
                      Ẩn cài đặt nâng cao
                    </button>
                  )}
                </div>
              </div>
              <div
                id="more-setting"
                style={{ height: advance ? height + 20 : 0 }}
              >
                <div ref={divRef}>
                  <hr />
                  <h4>Tiêu chí tìm kiếm</h4>
                  <Form.Item label="Vị trí công việc" name="domains">
                    <Input
                      size="large"
                      placeholder="Nhập ví trí bạn muốn tìm kiếm. Ví dụ: Frontend Developer"
                    />
                  </Form.Item>
                  <Form.Item label="Địa điểm làm việc" name="provinces">
                    <Input
                      size="large"
                      placeholder="Chọn một hoặc nhiều địa điểm"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Có một trong các từ khoá"
                    name="atleast_skills"
                  >
                    <Input
                      size="large"
                      placeholder="Nhập từ khoá, cách nhau bởi dấu phẩy"
                    />
                  </Form.Item>
                  <Form.Item label="Bắt buộc có từ khoá" name="required_skills">
                    <Input
                      size="large"
                      placeholder="Nhập từ khoá, cách nhau bởi dấu phẩy"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Không có các từ khoá"
                    name="not_allowed_skills"
                  >
                    <Input
                      size="large"
                      placeholder="Nhập từ khoá, cách nhau bởi dấu phẩy"
                    />
                  </Form.Item>
                  <div style={{ height: 1 }}></div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary">Tạo bộ lọc</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRAddFilter;
