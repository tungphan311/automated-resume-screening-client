import React, { useState } from "react";
import { Button, Input, InputNumber } from "antd";
import ContentEditable from "react-contenteditable";
import { EditOutlined, DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProfileModal({ show, toggleModal, id }) {
  const RESUME = useSelector((state) =>
    id ? state.profile.candidateProfile.resumes.find((e) => e.id === id) : {}
  );
  const domains = useSelector((state) => state.jobDomain.domains);

  const [resume, setResume] = useState(RESUME);
  const [value, setValue] = useState("");

  const {
    educations,
    experiences,
    technical_skills: skills,
    months_of_experience,
    job_domain_id
  } = resume;

  const [domain, setDomain] = useState(
    domains.find((e) => e.id === job_domain_id).name
  );

  const handleChangeResume = (name, value) => {
    setResume((curState) => ({
      ...curState,
      [name]: value
    }));
  };

  console.log(skills);
  console.log(setDomain);

  return (
    <Modal show={show} onHide={toggleModal} dialogClassName="resume-modal">
      <div className="row">
        <div className="col-md-12">
          {/* Education  */}
          <div className="rv-content">
            <div className="container-fluid">
              <div className="heading-margin sg-heading3 title">Học vấn</div>
            </div>
            <div className="wizard-page-children container-fluid">
              <ContentEditable
                html={educations} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={(evt) =>
                  handleChangeResume("educations", evt.target.value)
                } // handle innerHTML change
              />
            </div>
          </div>
        </div>

        {/* Experience  */}
        <div className="col-md-12">
          <div className="rv-content">
            <div
              className="container-fluid custom"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div className="heading-margin sg-heading3 title">
                Kinh nghiệm thực tế
              </div>

              <div>
                <InputNumber
                  min={0}
                  max={500}
                  value={months_of_experience}
                  onChange={(val) => {
                    handleChangeResume("months_of_experience", val);
                  }}
                />
                <span>
                  tháng <span className="text-danger">*</span>
                </span>
              </div>
            </div>
            <div className="wizard-page-children container-fluid">
              <ContentEditable
                html={experiences} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={(evt) =>
                  handleChangeResume("experiences", evt.target.value)
                } // handle innerHTML change
              />
            </div>
          </div>
        </div>

        {/* Skills  */}
        <div className="col-md-12">
          <div className="rv-content">
            <div className="container-fluid">
              <div className="heading-margin sg-heading3 title">Kỹ năng</div>
            </div>
            <div
              className="wizard-page-children container-fluid"
              spellCheck="false"
            >
              {/* Display information  */}
              <div className="display-type d-flex">
                <div className="TextInput-label">Loại công việc:</div>
                <div
                  className="d-flex"
                  style={{
                    marginLeft: 10,
                    flexGrow: 1,
                    justifyContent: "space-between"
                  }}
                >
                  <span>{domain}</span>
                  <EditOutlined
                    //   onClick={hanldeEdit}
                    className="display-type__input__icon"
                  />
                </div>
              </div>

              {/* {editType && (
                  <div className="job-domain-wrapper">
                    <div className="TextInput-label">
                      Chọn loại công việc:{" "}
                      <span className="text-danger">*</span>
                    </div>
                    <div className="select--wrapper">
                      <Select
                        className="hide-btn"
                        options={domains.map(({ id, name }) => ({
                          value: id,
                          label: name
                        }))}
                        value={domain}
                        onChange={changeDomains}
                      />
                      {error && (
                        <span
                          className="error"
                          style={{
                            position: "absolute",
                            color: "#f25961",
                            top: "33px"
                          }}
                        >
                          Vui lòng không bỏ trống
                        </span>
                      )}
                    </div>
                  </div>
                )} */}

              <div className="inline-skill-container is-compact">
                <div className="inline-skill-input">
                  <div>
                    <div className="TextInput-labelWrapper">
                      <label className="TextInput-label">Thêm kỹ năng</label>
                      <p className="TextInput-helpText">vd: Javascript</p>
                    </div>
                    <div className="TextInput-wrapper">
                      <Input
                        size="large"
                        value={value}
                        onChange={(evt) => setValue(evt.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="inline-skill-button">
                  <Button
                    type="primary"
                    size="large"
                    disabled={!value}
                    icon={<PlusOutlined />}
                    //   onClick={onAddSkill}
                  >
                    Thêm
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                {skills.map(({ key, value }) => (
                  <Skill
                    skill={value}
                    key={key}
                    id={key}
                    // onChange={onChangeSkills}
                    // onDelete={onDelete}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <Button
            //   className={!isChange && "hide-btn"}
            type="primary"
            //   onClick={handleSubmit}
          >
            Hoàn tất
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ProfileModal;

const Skill = ({ id, skill, onChange, onDelete }) => {
  const handleChange = (evt) => {
    const value = evt.target.value;

    onChange(id, value);
  };

  return (
    <div>
      <div className="hr-wizard"></div>
      <div className="saved-item saved-item-new container-fluid">
        <div className="row">
          <div className="clearfix col-xs-12">
            <div className="float-right edit-option">
              <button className="buttonAsLink delete-button">
                <DeleteFilled onClick={() => onDelete(id)} />
              </button>
            </div>
            <div className="skill-editable">
              <ContentEditable
                className="content-editable"
                html={skill} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={handleChange} // handle innerHTML change
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
