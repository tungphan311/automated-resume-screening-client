import React, { useState } from "react";
import { Button, Input, InputNumber } from "antd";
import ContentEditable from "react-contenteditable";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loading from "components/Loading/Loading";
import { updateCVProfileAction } from "state/actions/index";

const getIndexArray = (arr) => {
  let newArr = [];
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push({ key: i, value: arr[i] });
    }
  }

  return newArr;
};

function ProfileModal({ show, toggleModal, id }) {
  const RESUME = useSelector((state) =>
    id ? state.profile.candidateProfile.resumes.find((e) => e.id === id) : {}
  );
  const dispatch = useDispatch();
  // const domains = useSelector((state) => state.jobDomain.domains);

  const [resume, setResume] = useState(RESUME);
  const [value, setValue] = useState("");
  const [isChange, setIsChange] = useState(false);
  // const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    educations,
    experiences,
    technical_skills,
    months_of_experience
    // job_domain_id
  } = resume;

  // const [domain, setDomain] = useState(
  //   domains ? domains.find((e) => e.id === job_domain_id).name : ""
  // );
  // const [domainSelect, setDomainSelect] = useState(job_domain_id);
  const [skills, setSkills] = useState(getIndexArray(technical_skills));

  const handleChangeResume = (name, value) => {
    setResume((curState) => ({
      ...curState,
      [name]: value
    }));
  };

  const onChangeSkills = (key, value) => {
    const skill = skills.find((ele) => ele.key === key);
    let newSkills = skills.filter((ele) => ele.key !== key);
    const newSkill = { ...skill, value };
    newSkills.push(newSkill);
    newSkills.sort((a, b) => a.key - b.key);

    setSkills(newSkills);
    setIsChange(true);
  };

  const onDelete = (key) => {
    const newSkills = skills.filter((ele) => ele.key !== key);
    setSkills(newSkills);
    setIsChange(true);
  };

  const onAddSkill = () => {
    const key = skills.length && skills[skills.length - 1].key + 1;
    const newSkills = [...skills, { key, value }];
    setSkills(newSkills);
    setValue("");
    setIsChange(true);
  };

  const resetForm = () => {
    setResume(RESUME);
    setSkills(getIndexArray(RESUME.technical_skills));
    setIsChange(false);
  };

  const handleCloseModal = () => {
    setValue("");
    toggleModal();
  };

  const handleSubmit = () => {
    setLoading(true);
    const values = skills.map((ele) => ele.value);

    dispatch(
      updateCVProfileAction({
        resumeId: id,
        education: resume.educations,
        experience: resume.experiences,
        values,
        domain: resume.job_domain_id,
        monthEx: resume.months_of_experience
      })
    )
      .then(() => {
        setLoading(false);
        setIsChange(false);
        toggleModal();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Modal show={show} onHide={handleCloseModal} dialogClassName="resume-modal">
      <Loading loading={loading} />
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
                    onClick={onAddSkill}
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
                    onChange={onChangeSkills}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ textAlign: "right" }}>
          <div style={{ paddingRight: 15 }}>
            <Button
              className={!isChange ? "hide-btn" : "mr-5"}
              type="default"
              onClick={resetForm}
            >
              Huỷ bỏ
            </Button>
            <Button
              className={!isChange && "hide-btn"}
              type="primary"
              onClick={handleSubmit}
            >
              Lưu chỉnh sửa
            </Button>
          </div>
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
