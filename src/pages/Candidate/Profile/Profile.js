import React, { useRef, useState, useEffect } from "react";
import { toast } from "utils/index";
import "./Profile.scss";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";
import ProfileCVItem from "components/ProfileCVItem/ProfileCVItem";
import { Button, Card, Switch } from "antd";
// import { PlusOutlined, EditOutlined, DeleteFilled } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import { candidateProfileAction } from "state/actions/profileAction";
// import { updateCVProfileAction } from "state/actions/index";

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile() {
  // state
  const [loading, setLoading] = useState(false);
  // const [isChange, setIsChange] = useState(false);
  // ref
  const inputRef = useRef();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.candidate.token);
  const profile = useSelector((state) => state.profile.candidateProfile);
  // const domains = useSelector((state) => state.jobDomain.domains);

  let resumes = profile && profile.resumes;
  // resume = resume && resume[0];
  // const resumeId = resume && resume.id;
  // const edu = resume && resume.educations;
  // const ex = resume && resume.experiences;
  // const sk = resume && resume.technical_skills;
  // const month = resume && resume.months_of_experience;
  // const jobDomain = resume && resume.job_domain;
  // const jobDomainName = jobDomain && jobDomain.name;
  // const jobDomainId = jobDomain && jobDomain.id;

  // const [education, setEducation] = useState();
  // const [experience, setExperience] = useState();
  // const [monthEx, setMonthEx] = useState();
  // let [editType, setEditType] = useState(false);

  // const [error, setError] = useState(false);

  // const handleChangeEdu = (evt) => {
  //   setIsChange(true);
  //   setEducation(evt.target.value);
  // };

  // const handleChangeEx = (evt) => {
  //   setIsChange(true);
  //   setExperience(evt.target.value);
  // };

  const handleSelectFile = () => {
    inputRef.current.click();
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
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

  // const getIndexArray = (arr) => {
  //   let newArr = [];
  //   if (arr) {
  //     for (let i = 0; i < arr.length; i++) {
  //       newArr.push({ key: i, value: arr[i] });
  //     }
  //   }

  //   return newArr;
  // };

  // const [skills, setSkills] = useState([]);
  // const [value, setValue] = useState("");
  // const [displayDomain, setDisplayDomain] = useState();
  // const [domain, setDomain] = useState(jobDomainId);

  // const onChangeSkills = (key, value) => {
  //   const skill = skills.find((ele) => ele.key === key);
  //   let newSkills = skills.filter((ele) => ele.key !== key);
  //   const newSkill = { ...skill, value };
  //   newSkills.push(newSkill);
  //   newSkills.sort((a, b) => a.key - b.key);

  //   setSkills(newSkills);
  //   setIsChange(true);
  // };

  // const onDelete = (key) => {
  //   const newSkills = skills.filter((ele) => ele.key !== key);
  //   setSkills(newSkills);
  //   setIsChange(true);
  // };

  // const onAddSkill = () => {
  //   const key = skills.length && skills[skills.length - 1].key + 1;
  //   const newSkills = [...skills, { key, value }];
  //   setSkills(newSkills);
  //   setValue("");
  //   setIsChange(true);
  // };

  // const handleSkillChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = () => {
  //   if (!domain) {
  //     setError(true);
  //     return;
  //   } else {
  //     setLoading(true);
  //     const values = skills.map((ele) => ele.value);

  //     dispatch(
  //       updateCVProfileAction({
  //         resumeId,
  //         education,
  //         experience,
  //         values,
  //         domain,
  //         monthEx
  //       })
  //     )
  //       .then(() => {
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   }
  // };

  // const changeDomains = (value) => {
  //   setDomain(value);
  //   const item = domains.find((item) => item.id === value);
  //   setDisplayDomain(item && item.name);
  //   setError(false);
  //   setEditType(false);
  //   setIsChange(true);
  // };

  // const hanldeEdit = () => {
  //   editType = !editType;
  //   setEditType(editType);
  // };

  useEffect(() => {
    dispatch(candidateProfileAction(token));
    dispatch({ type: GET_JOB_DOMAIN });
    // setEducation(edu);
    // setMonthEx(month);
    // setExperience(ex);
    // setDomain(jobDomainId);
    // setDisplayDomain(jobDomainName);
    // setSkills(getIndexArray(sk));
  }, []);

  return (
    <div className="container profile__wrapper" style={{ marginTop: "20px" }}>
      <Loading loading={loading} />
      <div className="row">
        <div className="col-sm-8">
          {resumes ? (
            <div className="row">
              <div className="col-sm">
                <Card
                  title="CV của bạn"
                  extra={
                    <Button icon={<UploadOutlined />}>Tải lên 1 CV</Button>
                  }
                >
                  {resumes.map(
                    ({ resume_filename, store_url, id, edit }, index) => (
                      <ProfileCVItem
                        key={index}
                        image="/assets/img/CV-default.png"
                        name={resume_filename}
                        date={edit}
                        url={store_url}
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
