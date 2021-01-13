import { UploadOutlined } from "@ant-design/icons";
import React, { useRef, useState, useEffect } from "react";

import { toast } from "utils/index";
import "./Profile.scss";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";
import ProfileCVItem from "components/ProfileCVItem/ProfileCVItem";
import { Switch } from "antd";
import { Collapse } from "antd";
import ContentEditable from "react-contenteditable";
import { InputNumber } from "antd";
import { Button, Input, Select, Card } from "antd";
// import { PlusOutlined, EditOutlined, DeleteFilled } from "@ant-design/icons";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import { candidateProfileAction } from "state/actions/profileAction";
import { updateCVProfileAction } from "state/actions/index";

const { Panel } = Collapse;

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile() {
  // state
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(false);
  // ref
  const inputRef = useRef();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.candidate.token);
  const profile = useSelector((state) => state.profile.candidateProfile);
  const domains = useSelector((state) => state.jobDomain.domains);

  let resume = profile && profile.resumes;
  resume = resume && resume[0];
  const resumeId = resume && resume.id;
  const edu = resume && resume.educations;
  const ex = resume && resume.experiences;
  const sk = resume && resume.technical_skills;
  const month = resume && resume.months_of_experience;
  const jobDomain = resume && resume.job_domain;
  const jobDomainName = jobDomain && jobDomain.name;
  const jobDomainId = jobDomain && jobDomain.id;

  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [monthEx, setMonthEx] = useState();
  let [editType, setEditType] = useState(false);

  const [error, setError] = useState(false);

  const handleChangeEdu = (evt) => {
    setIsChange(true);
    setEducation(evt.target.value);
  };

  const handleChangeEx = (evt) => {
    setIsChange(true);
    setExperience(evt.target.value);
  };

  const handleSelectFile = () => {
    inputRef.current.click();
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const [open, setOpen] = useState();
  const handleColapse = (e) => {
    e.preventDefault();
    setOpen([1]);
  };

  const handleInputChange = async (e) => {
    const file = e.target.files[0];

    if (!ACCEPTS.includes(file.type)) {
      toast({ type: "error", message: "Định dạng tệp không hợp lệ" });
    } else {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      dispatch(uploadCVAction(formData));

      // await uploadFile(formData);
    }
  };

  const getIndexArray = (arr) => {
    let newArr = [];
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        newArr.push({ key: i, value: arr[i] });
      }
    }

    return newArr;
  };

  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState("");
  const [displayDomain, setDisplayDomain] = useState();
  const [domain, setDomain] = useState(jobDomainId);

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

  const handleSkillChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!domain) {
      setError(true);
      return;
    } else {
      setLoading(true);
      const values = skills.map((ele) => ele.value);

      dispatch(
        updateCVProfileAction({
          resumeId,
          education,
          experience,
          values,
          domain,
          monthEx
        })
      )
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const changeDomains = (value) => {
    setDomain(value);
    const item = domains.find((item) => item.id === value);
    setDisplayDomain(item && item.name);
    setError(false);
    setEditType(false);
    setIsChange(true);
  };

  const hanldeEdit = () => {
    editType = !editType;
    setEditType(editType);
  };

  useEffect(() => {
    dispatch(candidateProfileAction(token));
    dispatch({ type: GET_JOB_DOMAIN });
    setEducation(edu);
    setMonthEx(month);
    setExperience(ex);
    setDomain(jobDomainId);
    setDisplayDomain(jobDomainName);
    setSkills(getIndexArray(sk));
  }, [edu, ex, month, jobDomainName]);

  return (
    <div className="container profile__wrapper" style={{ marginTop: "20px" }}>
      <Loading loading={loading} />
      <div className="row">
        <div className="col-sm-8">
          {resume ? (
            <Resume
              {...{
                isChange,
                error,
                handleChangeEdu,
                handleChangeEx,
                handleColapse,
                open,
                displayDomain,
                onChangeSkills,
                onDelete,
                onAddSkill,
                handleSkillChange,
                handleSubmit,
                changeDomains,
                hanldeEdit
              }}
            />
          ) : (
            <div className="row">
              <div className="col-sm">
                <Card title="Tải lên CV của bạn">
                  <div className="row">
                    <div className="col-sm-6">
                      <Button
                        onClick={handleSelectFile}
                        icon={<UploadOutlined />}
                      >
                        Tải lên 1 CV
                      </Button>
                      <input
                        type="file"
                        name="CV"
                        className="d-none"
                        accept=".doc,.docx,.pdf"
                        onChange={handleInputChange}
                        ref={inputRef}
                      />
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>

        <div className="col-sm-4">
          <div className="profile__wrapper__info">
            <div className="profile__wrapper__info__general">
              <div className="profile__wrapper__info__general__avatar">
                <img
                  src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                  alt="logo"
                />
                <p className="profile__wrapper__info__general__avatar__update">
                  Cập nhập ảnh
                </p>
              </div>
              <div className="profile__wrapper__info__general__detail">
                <p>Chào bạn</p>
                <p className="profile__wrapper__info__general__detail__name">
                  {profile.fullName}
                </p>
                <p className="profile__wrapper__info__general__detail__note">
                  Tải khoản ứng viên
                </p>
              </div>
            </div>

            <div className="profile__wrapper__info__personal">
              <div className="profile__wrapper__info__personal__status">
                <strong>Trạng thái</strong>
                <Switch
                  defaultChecked
                  disable={profile.status === "2"}
                  onChange={onChange}
                />
              </div>

              <p>
                <strong>Email: </strong>
                {profile.email}
              </p>

              <p>
                <strong>Giới tính: </strong>
                {profile.dateOfBirth ? "Nam" : "Nữ"}
              </p>

              <p>
                <strong>Ngày sinh: </strong>
                {profile.dateOfBirth}
              </p>

              <p>
                <strong>SĐT: </strong> {profile.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;

// const Skill = ({ id, skill, onChange, onDelete }) => {
//   const handleChange = (evt) => {
//     const value = evt.target.value;

//     onChange(id, value);
//   };

//   return (
//     <div>
//       <div className="hr-wizard"></div>
//       <div className="saved-item saved-item-new container-fluid">
//         <div className="row">
//           <div className="clearfix col-xs-12">
//             <div className="float-right edit-option">
//               <button className="buttonAsLink delete-button">
//                 <DeleteFilled onClick={() => onDelete(id)} />
//               </button>
//             </div>
//             <div className="skill-editable">
//               <ContentEditable
//                 className="content-editable"
//                 html={skill} // innerHTML of the editable div
//                 disabled={false} // use true to disable edition
//                 onChange={handleChange} // handle innerHTML change
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Resume = ({
  resume_filename,
  store_url,
  handleColapse,
  open,
  setOpen,
  education,
  handleChangeEdu,
  monthEx,
  setMonthEx,
  experience,
  handleChangeEx,
  loading,
  displayDomain,
  hanldeEdit,
  editType,
  domains,
  domain,
  changeDomains,
  value,
  handleSkillChange,
  error,
  onAddSkill,
  isChange,
  handleSubmit
}) => (
  <div className="row">
    <div className="col-sm">
      <Card title="CV của bạn">
        <ProfileCVItem
          image="/assets/img/CV-default.png"
          name={resume_filename}
          date="1212121"
          url={store_url}
          onClick={handleColapse}
        />
      </Card>
      <Collapse activeKey={open} onChange={() => setOpen(() => [1])} accordion>
        <Panel
          onChange={() => setOpen(() => [0])}
          showArrow={false}
          header="This is panel header with no arrow icon"
          key="1"
        >
          {/* Education  */}
          <div className="panel panel--light">
            <div className="panel-body">
              <div className="rv-content">
                <div className="container-fluid">
                  <div className="heading-margin sg-heading3 title">
                    Học vấn
                  </div>
                </div>
                <div className="wizard-page-children container-fluid">
                  <ContentEditable
                    html={education} // innerHTML of the editable div
                    disabled={false} // use true to disable edition
                    onChange={handleChangeEdu} // handle innerHTML change
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Experience  */}
          <div className="panel panel--light">
            <div className="panel-body">
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
                      value={monthEx}
                      onChange={(val) => {
                        setMonthEx(val);
                      }}
                    />
                    <span>
                      {" "}
                      tháng <span className="text-danger">*</span>
                    </span>
                  </div>
                </div>
                <div className="wizard-page-children container-fluid">
                  <ContentEditable
                    html={experience} // innerHTML of the editable div
                    disabled={false} // use true to disable edition
                    onChange={handleChangeEx} // handle innerHTML change
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Skills  */}
          <Loading loading={loading} />
          <div className="panel panel--light">
            <div className="panel-body">
              <div className="rv-content">
                <div className="container-fluid">
                  <div className="heading-margin sg-heading3 title">
                    Kỹ năng
                  </div>
                </div>
                <div
                  className="wizard-page-children container-fluid"
                  spellCheck="false"
                >
                  {/* Display information  */}
                  <div className="display-type">
                    <div className="TextInput-label">
                      Loại công việc: <span className="text-danger">*</span>
                    </div>
                    <div className="display-type__input">
                      <Input readOnly size="large" value={displayDomain} />
                      <EditOutlined
                        onClick={hanldeEdit}
                        className="display-type__input__icon"
                      />
                    </div>
                  </div>

                  {editType && (
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
                  )}

                  <div className="inline-skill-container is-compact">
                    <div className="inline-skill-input">
                      <div>
                        <div className="TextInput-labelWrapper">
                          <label className="TextInput-label">
                            Thêm kỹ năng
                          </label>
                          <p className="TextInput-helpText">vd: Javascript</p>
                        </div>
                        <div className="TextInput-wrapper">
                          <Input
                            size="large"
                            value={value}
                            onChange={handleSkillChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-skill-button">
                      {value && (
                        <Button
                          type="primary"
                          size="large"
                          icon={<PlusOutlined />}
                          onClick={onAddSkill}
                        >
                          Thêm
                        </Button>
                      )}
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    {/* {skills.map(({ key, value }) => (
                      <Skill
                        skill={value}
                        key={key}
                        id={key}
                        onChange={onChangeSkills}
                        onDelete={onDelete}
                      />
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button
              className={!isChange && "hide-btn"}
              type="primary"
              onClick={handleSubmit}
            >
              Hoàn tất
            </Button>
          </div>
        </Panel>
      </Collapse>
    </div>
  </div>
);
