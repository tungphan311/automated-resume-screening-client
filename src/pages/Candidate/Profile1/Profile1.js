import { UploadOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useRef, useState, useEffect } from "react";

import { toast } from "utils/index";
import "./Profile1.scss";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";
import ProfileCVItem from "components/ProfileCVItem/ProfileCVItem";
import { Switch } from "antd";
import { Collapse } from "antd";

import EducationForm from "components/Forms/ReviewForm/EducationForm";
import ExperienceForm from "components/Forms/ReviewForm/ExperienceForm";
import SkillForm from "components/Forms/ReviewForm/SkillForm";

import { candidateProfileAction } from "state/actions/profileAction";

const { Panel } = Collapse;

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile1() {
  // state
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(true);
  // ref
  const inputRef = useRef();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.candidate.token);
  const profile = useSelector((state) => state.profile.candidateProfile);

  const resume = profile ? profile.resumes : null;
  const edu = resume ? resume.educations : null;
  const ex = resume ? resume.experiences : null;
  const sk = resume ? resume.technical_skills : null;
  const month = resume ? resume.months_of_experience : null;

  const [skill, setSkill] = useState(sk);
  const [education, setEducation] = useState(edu);
  const [experience, setExperience] = useState(ex);
  const [monthEx, setMonthEx] = useState(month);
  const [domain, setDomain] = useState();
  // const [techSkills, setTechSills] = useState();

  const handleSelectFile = () => {
    inputRef.current.click();
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const callbackEdu = (isChange) => {
    setIsChange(!isChange);
  };

  const callbackEx = (isChange) => {
    setIsChange(!isChange);
  };

  const callbackSk = (isChange, domain) => {
    setDomain(domain);
    setIsChange(!isChange);
  };

  const getSkills = (value) => {
    // setTechSills(value);
    console.log("skills", value);
  };

  console.log("isChange", isChange);

  const [open, setOpen] = useState();
  const handleColapse = (e) => {
    e.preventDefault();
    setOpen([1]);
  };

  useEffect(() => {
    dispatch(candidateProfileAction(token));
  }, []);

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

  // console.log("education", education);
  // console.log("-----------------------");
  // console.log("experience", experience);
  // console.log("-----------------------");
  // console.log("month", monthEx);
  // console.log("-----------------------");
  console.log("domain", domain);
  // console.log("-----------------------");

  return (
    <div className="container profile__wrapper" style={{ marginTop: "20px" }}>
      <Loading loading={loading} />
      <div className="row">
        <div className="col-sm-8">
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

          {resume && (
            <div className="row">
              <div className="col-sm">
                <Card title="CV của bạn">
                  <ProfileCVItem
                    image="https://www.topcv.vn/images/cv/screenshots/thumbs/en/mau-cv-default.png"
                    name={resume.resume_filename}
                    date="1212121"
                    url={resume.store_url}
                    onClick={handleColapse}
                  />
                </Card>
                <Collapse activeKey={open} onChange={() => setOpen(() => [1])}>
                  <Panel
                    onChange={() => setOpen(() => [1])}
                    showArrow={false}
                    header="This is panel header with no arrow icon"
                    key="1"
                  >
                    <EducationForm
                      detailMode={true}
                      eduHtml={education ? education : resume.educations}
                      onChang={(val) => {
                        setEducation(val);
                      }}
                      changeCallback={callbackEdu}
                    />
                    <ExperienceForm
                      changeCallback={callbackEx}
                      detailMode={true}
                      exMonth={resume.months_of_experience}
                      exHtml={experience ? experience : resume.experiences}
                      onChangMonth={(val) => {
                        setMonthEx(val);
                      }}
                      onChang={(val) => {
                        setExperience(val);
                      }}
                    />
                    <SkillForm
                      changeCallback={callbackSk}
                      skillCallback={getSkills}
                      detailMode={true}
                      isEdited={isChange}
                      techSkill={skill ? skill : resume.technical_skills}
                      jobPosition={resume.job_domain}
                      onChang={(val) => {
                        setSkill(val);
                      }}
                      eduProps={education ? education : resume.educations}
                      exProps={experience ? experience : resume.experiences}
                      monthProps={
                        monthEx ? monthEx : resume.months_of_experience
                      }
                    />
                  </Panel>
                </Collapse>
              </div>
            </div>
          )}
        </div>

        {profile && (
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
                  <strong> Địa chỉ:</strong> 181 Hoàng Nhân, ACNCC, Tân Phú, TP
                  HCM
                </p>

                <p>
                  <strong>SĐT: </strong> {profile.phone}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidateProfile1;
