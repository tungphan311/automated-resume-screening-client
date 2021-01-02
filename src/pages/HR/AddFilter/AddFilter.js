import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useRef, useEffect, useState } from "react";
import { Input, Form, Select } from "antd";
import "./AddFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import TagInput from "components/TagInput/TagInput";
import { addNewFilterAction } from "state/actions/index";

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
  const [isLoading, setIsLoading] = useState(false);

  const [skills, setSkills] = useState({
    atleastSkills: [],
    requiredSkills: [],
    notAllowedSkills: []
  });

  const dispatch = useDispatch();
  let { domains } = useSelector((state) => state.jobDomain);
  domains = domains.length
    ? domains.map(({ id, name }) => ({ value: id, label: name }))
    : [];

  let { provinces } = useSelector((state) => state.cv);
  provinces = provinces.length
    ? provinces.map(({ province_id, province_name }) => ({
        value: province_id,
        label: province_name
      }))
    : [];

  const [form] = Form.useForm();
  const inputRef = useRef();
  const divRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setHeight(divRef.current.clientHeight);

    dispatch({ type: GET_JOB_DOMAIN });
  }, []);

  const onFinish = (values) => {
    const { name } = values;
    let form = {};

    if (!advance) {
      form = {
        name,
        job_domains: null,
        provinces: null,
        atleast_skills: null,
        required_skills: null,
        not_allowed_skills: null
      };
    } else {
      const { job_domains, provinces } = values;
      const { atleastSkills, requiredSkills, notAllowedSkills } = skills;

      const atleast_skills = atleastSkills.map((s) => s.text).join(",");
      const required_skills = requiredSkills.map((s) => s.text).join(",");
      const not_allowed_skills = notAllowedSkills.map((s) => s.text).join(",");

      form = {
        name,
        job_domains: job_domains ? job_domains.join(",") : null,
        provinces: provinces ? provinces.join(",") : null,
        atleast_skills,
        required_skills,
        not_allowed_skills
      };
    }

    console.log(atleastSkills.join(","));

    setIsLoading(true);
    dispatch(addNewFilterAction(form)).catch(() => {
      setIsLoading(false);
    });
  };

  const handleSelectTag = (name, tags) => {
    setSkills({ ...skills, [name]: tags });
  };

  const { atleastSkills, requiredSkills, notAllowedSkills } = skills;

  return (
    <>
      <JobMenu menu={CANDIDATES_MENU} />
      <div className="container" id="add-filter-box">
        <div className="panel panel-light">
          <div className="panel-heading">Tạo bộ lọc mới</div>
          <div className="panel-body">
            <Form
              {...layout}
              form={form}
              validateMessages={validateMessages}
              onFinish={onFinish}
            >
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
                  <Form.Item label="Vị trí công việc" name="job_domains">
                    <Select
                      mode="multiple"
                      placeholder="Chọn vị trí công việc"
                      options={domains}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label="Địa điểm làm việc" name="provinces">
                    <Select
                      mode="multiple"
                      placeholder="Chọn một hoặc nhiều địa điểm"
                      options={provinces}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Có một trong các từ khoá"
                    name="atleast_skills"
                  >
                    <TagInput
                      tags={atleastSkills}
                      name="atleastSkills"
                      onChange={handleSelectTag}
                    />
                  </Form.Item>
                  <Form.Item label="Bắt buộc có từ khoá" name="required_skills">
                    <TagInput
                      tags={requiredSkills}
                      name="requiredSkills"
                      onChange={handleSelectTag}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Không có các từ khoá"
                    name="not_allowed_skills"
                  >
                    <TagInput
                      tags={notAllowedSkills}
                      name="notAllowedSkills"
                      onChange={handleSelectTag}
                    />
                  </Form.Item>
                  <div style={{ height: 1 }}></div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button disabled={isLoading} className="btn btn-primary d-flex">
                  Tạo bộ lọc
                  {isLoading && (
                    <div className="dashed-loading" style={{ width: 25 }}></div>
                  )}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRAddFilter;
