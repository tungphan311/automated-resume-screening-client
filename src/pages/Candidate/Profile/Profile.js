import React, { useRef, useState, useEffect } from "react";
import { toast } from "utils/index";
import "./Profile.scss";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";
import ProfileCVItem from "components/ProfileCVItem/ProfileCVItem";
import { Button, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import { candidateProfileAction } from "state/actions/profileAction";

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile() {
  // state
  const [loading, setLoading] = useState(false);

  // ref
  const inputRef = useRef();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.candidate.token);
  const profile = useSelector((state) => state.profile.candidateProfile);

  let resumes = profile && profile.resumes;

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

  useEffect(() => {
    dispatch(candidateProfileAction(token));
    dispatch({ type: GET_JOB_DOMAIN });
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
              {/* <div className="profile__wrapper__info__personal__status">
                <strong>Trạng thái</strong>
                <Switch
                  defaultChecked
                  disable={profile.status === "2"}
                  onChange={onChange}
                />
              </div> */}

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
