import React, { useRef, useState, useEffect } from "react";
import { toast } from "utils/index";
import "./CandidateProfile.scss";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";
import { Button, Input, InputNumber, Form } from "antd";

import {
  CloseOutlined,
  PlusOutlined,
  UploadOutlined,
  DownloadOutlined,
  EyeOutlined,
  DeleteOutlined,
  ProfileTwoTone,
  ProfileOutlined
} from "@ant-design/icons";

import isEmpty from "lodash/isEmpty";
import { toastErr } from "utils/index";
import ContentEditable from "react-contenteditable";

import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import { getCandidateProfile } from "services/candidateProfileServices";
import { candidateProfileAction } from "state/actions/profileAction";
import { getIndexArray } from "utils/index";
import AddSkillSuggest from "components/AddSkillSuggest/AddSkillSuggest";

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function MyProfile() {
  // state
  const [loading, setLoading] = useState(false);

  // ref
  const inputRef = useRef();

  const eduFormRef = useRef();
  const exFormRef = useRef();
  const skillFormRef = useRef();
  const resumeFormRef = useRef();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.candidate.token);
  const profile = useSelector((state) => state.profile.candidateProfile);

  const [resume, setResume] = useState();

  const [eduForm, setEduForm] = useState(false);
  const [exForm, setExForm] = useState(false);
  const [skillForm, setSkillForm] = useState(false);
  const [resumeForm, setResumeForm] = useState(false);
  const [profileForm, setProfileForm] = useState(false);

  // Handle chips
  const [isAdd, setIsAdd] = useState(false);
  const [value, setValue] = useState("");
  const [skills, setSkills] = useState();
  const [defaultSkills, setDefaultSkills] = useState();

  const toggleEduForm = () => {
    setEduForm(true);
    eduFormRef.current.scrollIntoView();
  };

  const toggleExForm = () => {
    setExForm(true);
    exFormRef.current.scrollIntoView();
  };

  const toggleSkillForm = () => {
    setSkillForm(true);
    skillFormRef.current.scrollIntoView();
  };

  const toggleResumeForm = () => {
    setResumeForm(true);
    resumeFormRef.current.scrollIntoView();
  };

  const toggleProFormEdit = () => {
    setProfileForm(true);
  };

  const onDelete = (key) => {
    const newSkills =
      skills && skills.length && skills.filter((ele) => ele.key !== key);
    setSkills(newSkills);
  };

  const getNewSkill = (value) => {
    console.log("new skill", value);
    setValue(value);
    setIsAdd(false);
  };

  const onAddSkill = () => {
    const key = skills && skills.length && skills[skills.length - 1].key + 1;
    const newSkills = [...skills, { key, value }];
    setSkills(newSkills);
    setValue("");
    setIsAdd(true);
  };

  const onCancelSkills = () => {
    setSkillForm(false);
    setSkills(defaultSkills);
  };

  console.log("skills", skills);

  // Hanlde upload file

  const handleSelectFile = () => {
    inputRef.current.click();
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

  const handleChangeResume = (name, value) => {
    setResume((curState) => ({
      ...curState,
      [name]: value
    }));
  };
  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        setLoading(true);

        await getCandidateProfile(token)
          .then(async (res) => {
            setResume({
              ...res.data.data.resumes[0]
            });
            setSkills(getIndexArray(res.data.data.resumes[0].technical_skills));
            setDefaultSkills(
              getIndexArray(res.data.data.resumes[0].technical_skills)
            );
          })
          .catch((err) => {
            toastErr(err);
          })
          .finally(() => {
            setLoading(false);
          });
      };
      fetchProfile();
      dispatch(candidateProfileAction(token));

      dispatch({ type: GET_JOB_DOMAIN });
    }
  }, []);

  // useEffect(() => {
  //   dispatch(candidateProfileAction(token));
  // }, []);

  return (
    <div className="my-profile">
      <Loading loading={loading} />
      {!isEmpty(profile) && (
        <div className="my-profile__candidate">
          <div className="container" style={{ position: "relative" }}>
            <h2 className="my-profile__candidate__name"> {profile.fullName}</h2>
            <span className="my-profile__candidate__email">
              {" "}
              {profile.email}
            </span>
            <p className="my-profile__candidate__phone"> {profile.phone}</p>
            <button
              onClick={toggleProFormEdit}
              className="my-profile__candidate__button"
            >
              Edit personal details
            </button>

            {profileForm && (
              <div className="col-sm-8 my-profile__candidate__edit edit-mode-container">
                <h3>Edit personal details</h3>
                <Form
                  layout="vertical"
                  name="nest-messages"
                  // validateMessages={validateMessages}
                  // onFinish={onFinish}
                  className="candidate-login__container__left__form"
                >
                  {/* Email */}
                  <Form.Item
                    label="Email address"
                    name={["user", "email"]}
                    rules={[{ type: "email", required: true }]}
                  >
                    <Input
                      className="candidate-login__container__left__form__input"
                      placeholder="Enter email..."
                    />
                  </Form.Item>

                  {/* Password  */}
                  <Form.Item
                    label="Password"
                    name={["user", "password"]}
                    rules={[{ required: true }]}
                  >
                    <Input.Password
                      className="candidate-login__container__left__form__input"
                      placeholder="Enter password..."
                    />
                  </Form.Item>

                  {/* Button Login  */}
                  {/* <button
                    htmlType="submit"
                    className="candidate-login__container__left__form__btn"
                  > */}
                  {/* {isLoading && <div className="dashed-loading"></div>} */}
                  <div className="profile-button-gr">
                    <button
                      className="save-btn profile-button"
                      onClick={toggleProFormEdit}
                    >
                      Save
                    </button>
                    <button
                      className="profile-button-cancel"
                      onClick={() => setProfileForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="my-profile__resume container">
        <div className="my-profile__resume__upload row">
          <div className="my-profile__resume__upload__left">
            <h4 className="profile-title">
              Create a new resume from your FASTJOB Profile
            </h4>
            <div className="my-profile__resume__upload__left__btn-gr row">
              <button className="my-profile__resume__upload__left__btn-gr__start">
                Get started
              </button>
              <span
                className="my-profile__resume__upload__left__btn-gr__or"
                onClick={() => resumeFormRef.current.scrollIntoView()}
              >
                Or, upload your resume
              </span>
            </div>
          </div>

          <div className="my-profile__resume__upload__right">
            <img src="/assets/img/profile.png" alt="CV" />
          </div>
        </div>

        {/* Resume information  */}
        <div className="row">
          <div className="col-sm-8">
            {!isEmpty(resume) && (
              <>
                {/* Education  */}
                <div
                  ref={eduFormRef}
                  className={
                    "my-profile__resume__education profile-section " +
                    (eduForm && "edit-mode-container")
                  }
                >
                  <h4 className="profile-title" style={{ fontWeight: "700" }}>
                    Education
                  </h4>
                  <div
                    className={
                      eduForm
                        ? "wizard-page-children my-profile__resume__education__content edit-mode"
                        : "wizard-page-children my-profile__resume__education__content"
                    }
                  >
                    <ContentEditable
                      html={resume.educations} // innerHTML of the editable div
                      disabled={!eduForm} // use true to disable edition
                      // onChange={(evt) =>
                      //   handleChangeResume("educations", evt.target.value)
                      // } // handle innerHTML change
                    />
                    <div className="profile-gradient"></div>
                  </div>
                  <div className="profile-button-gr">
                    <button
                      className={
                        eduForm ? "save-btn profile-button" : "profile-button"
                      }
                      onClick={toggleEduForm}
                    >
                      {!eduForm ? "Edit education" : "Save"}
                    </button>
                    {eduForm && (
                      <button
                        className="profile-button-cancel"
                        onClick={() => setEduForm(false)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

                {/* Experience  */}
                <div
                  ref={exFormRef}
                  className={
                    "my-profile__resume__education profile-section " +
                    (exForm && "edit-mode-container")
                  }
                >
                  <h4 className="profile-title" style={{ fontWeight: "700" }}>
                    Experience
                  </h4>
                  <div className="wizard-page-children my-profile__resume__education__content">
                    <div className="rv-content">
                      <div
                        className="custom"
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
                            bordered={exForm}
                            readOnly={!exForm}
                            defaultValue={resume.months_of_experience}
                            onChange={(val) => {
                              console.log("changed", val);
                            }}
                          />
                          <span style={{ marginLeft: "10px" }}>
                            tháng <span className="text-danger">*</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className={exForm && "wizard-page-children edit-mode"}
                      >
                        <ContentEditable
                          html={resume.experiences} // innerHTML of the editable div
                          disabled={!exForm} // use true to disable edition
                          // onChange={(evt) =>
                          //   handleChangeResume("experiences", evt.target.value)
                          // } // handle innerHTML change
                        />
                      </div>
                    </div>
                  </div>
                  <div className="profile-button-gr">
                    <button
                      className={
                        exForm ? "save-btn profile-button" : "profile-button"
                      }
                      onClick={toggleExForm}
                    >
                      {!exForm ? "Edit Experience" : "Save"}
                    </button>
                    {exForm && (
                      <button
                        className="profile-button-cancel"
                        onClick={() => setExForm(false)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

                {/* Skills  */}
                <div
                  className={
                    "my-profile__resume__skills " +
                    (skillForm && "edit-mode-container")
                  }
                >
                  <h4 className="profile-title" style={{ fontWeight: "700" }}>
                    Skills
                  </h4>
                  <div className="chip" style={{ marginTop: "20px" }}>
                    {skills &&
                      skills.length &&
                      skills.map(({ key, value }) => (
                        <Skill
                          skill={value}
                          key={key}
                          id={key}
                          onDelete={onDelete}
                          isAction={skillForm}
                        />
                      ))}
                  </div>

                  {skillForm && (
                    <div className="my-profile__resume__skills__add__sub">
                      Click add to add more skills help employers find you
                    </div>
                  )}
                  <div
                    className="inline-skill-container is-compact my-profile__resume__skills__add"
                    style={{
                      marginRight: "40px",
                      display: skillForm && "flex"
                    }}
                  >
                    <div className="inline-skill-input">
                      <div className="TextInput-wrapper">
                        <AddSkillSuggest
                          handleAdd={getNewSkill}
                          isAdd={isAdd}
                          isCorner={true}
                        />
                      </div>
                    </div>
                    <div className="inline-skill-button">
                      <Button
                        className="my-profile__resume__skills__add__btn"
                        type="primary"
                        size="large"
                        disabled={!value}
                        icon={<PlusOutlined />}
                        onClick={onAddSkill}
                      >
                        Add skill
                      </Button>
                    </div>
                  </div>

                  {/* Button  */}
                  <div className="profile-button-gr">
                    <button
                      ref={skillFormRef}
                      className={
                        skillForm ? "save-btn profile-button" : "profile-button"
                      }
                      onClick={toggleSkillForm}
                    >
                      {!skillForm ? "Add skills" : "Save"}
                    </button>
                    {skillForm && (
                      <button
                        className="profile-button-cancel"
                        onClick={onCancelSkills}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

                {/* Resume file*/}
                <div
                  ref={resumeFormRef}
                  className={
                    "my-profile__resume__info profile-section " +
                    (resumeForm && "edit-mode-container")
                  }
                >
                  <h4 className="profile-title" style={{ fontWeight: "700" }}>
                    Resume
                  </h4>

                  {/* Resume exist */}
                  {!isEmpty(profile) ? (
                    <>
                      <div className="my-profile__resume__info__row">
                        <img
                          className="cv-item__img"
                          src="/assets/img/CV-default.png"
                          alt="Ảnh CV"
                        />

                        <div className="my-profile__resume__info__row__left">
                          <div className="my-profile__resume__info__tag">
                            Default
                          </div>

                          <a
                            href={resume.download_url}
                            className="my-profile__resume__info__name"
                          >
                            {resume.resume_filename +
                              "." +
                              resume.resume_file_extension}
                            <DownloadOutlined className="cv-item__info__bottom__btn__icon" />
                          </a>
                          <div className="my-profile__resume__info__days">
                            Added 2 days ago
                          </div>
                        </div>
                      </div>

                      {resumeForm && (
                        <>
                          <div className="row cv-item__info__bottom ">
                            <button
                              type="button"
                              className="cv-item__info__bottom__btn btn btn-outline-secondary"
                              onClick={() =>
                                window.open(resume.store_url, "_blank")
                              }
                            >
                              <EyeOutlined className="cv-item__info__bottom__btn__icon" />
                              Xem
                            </button>

                            <a
                              href={resume.download_url}
                              className="cv-item__info__bottom__btn btn btn-sm btn-outline-secondary "
                            >
                              <DownloadOutlined className="cv-item__info__bottom__btn__icon" />
                              Tải xuống
                            </a>

                            <button
                              type="button"
                              className="cv-item__info__bottom__btn btn btn-sm  btn-outline-secondary"
                              // onClick={handleDelete}
                            >
                              <DeleteOutlined className="cv-item__info__bottom__btn__icon" />
                              Xóa
                            </button>
                          </div>

                          {/* Handle upload resume  */}
                        </>
                      )}
                    </>
                  ) : (
                    <div className="my-profile__resume__upload-file">
                      <p className="my-profile__resume__upload-file__note">
                        Add 1 resume. Accepted file types: Microsoft Word (.doc
                        or .docx) or Adobe PDF (.pdf)
                      </p>
                      <div
                        className="my-profile__resume__upload-file__box"
                        onClick={handleSelectFile}
                      >
                        <ProfileOutlined
                          style={{
                            fontSize: "50px",
                            color: "#707070"
                          }}
                        />
                        <span className="my-profile__resume__upload-file__box__add">
                          To add a resume, click here or simply browse for a
                          file.
                        </span>
                        <Button
                          onClick={handleSelectFile}
                          icon={<UploadOutlined />}
                          className="my-profile__resume__upload-file__box__btn"
                        >
                          Upload
                          <input
                            type="file"
                            name="CV"
                            className="d-none"
                            accept=".doc,.docx,.pdf"
                            onChange={handleInputChange}
                            ref={inputRef}
                          />
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="profile-button-gr">
                    {!resumeForm ? (
                      <button
                        className="profile-button"
                        onClick={toggleResumeForm}
                      >
                        Manage resume
                      </button>
                    ) : (
                      <button
                        className="save-btn profile-button"
                        onClick={() => setResumeForm(false)}
                      >
                        Done
                      </button>
                    )}
                  </div>
                  {/* <button
                    className="profile-button"
                    style={{ marginTop: "32px" }}
                    onClick={() => window.open(resume.store_url, "_blank")}
                  >
                    View online
                  </button> */}
                </div>
              </>
            )}
          </div>
          <div className="col-sm-4">
            <div className="my-profile__resume__strength">
              <div className="row my-profile__resume__strength__group">
                <h3 className="profile-title">Profile visibility</h3>
                <ProfileTwoTone
                  style={{
                    fontSize: "32px",
                    marginLeft: "20px",
                    paddingBottom: "7px"
                  }}
                />
              </div>

              <p className="my-profile__resume__strength__subtitle">
                Your profile is the only one in the system, employers can
                approach you with job opportunities.
              </p>
              <p className="my-profile__resume__strength__weight">Standard</p>
              <p className="my-profile__resume__strength__last">
                For all information you provided, your Profile including any
                verified credentials will be sent to the employer with your
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-sm-8">
          {resumes ? (
            <div className="row">
              <div className="col-sm">
                <Card
                  title="CV của bạn"
                  extra={
                    <Button
                      onClick={handleSelectFile}
                      icon={<UploadOutlined />}
                    >
                      Tải lên 1 CV
                      <input
                        type="file"
                        name="CV"
                        className="d-none"
                        accept=".doc,.docx,.pdf"
                        onChange={handleInputChange}
                        ref={inputRef}
                      />
                    </Button>
                  }
                >
                  {resumes.map(
                    (
                      { resume_filename, store_url, id, edit, download_url },
                      index
                    ) => (
                      <ProfileCVItem
                        key={index}
                        image="/assets/img/CV-default.png"
                        name={resume_filename}
                        date={edit}
                        url={store_url}
                        download_url={download_url}
                        id={id}
                      />
                    )
                  )}
                </Card>
              </div>
            </div>
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
      </div> */}
    </div>
  );
}

export default MyProfile;

const Skill = ({ id, skill, onDelete, isAction }) => {
  return (
    <div className="chip-skill__item">
      <div className="container-fluid">
        <div className="row">
          <div className="skill-editable">
            <ContentEditable
              className="content-editable chip-skill__item__content"
              html={skill} // innerHTML of the editable div
              disabled={true} // use true to disable edition
            />
          </div>
          <div className="float-right chip-skill__item__delete">
            {isAction && (
              <button className=" delete-button">
                <CloseOutlined onClick={() => onDelete(id)} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
