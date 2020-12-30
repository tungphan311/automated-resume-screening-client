import { UploadOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useRef, useState } from "react";
import { toast } from "utils/index";
import "./Profile.scss";
import FormData from "form-data";
import { useDispatch } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";
import ProfileCVItem from "components/ProfileCVItem/ProfileCVItem";
import { Switch } from "antd";
import { Collapse } from "antd";

import EducationForm from "components/Forms/ReviewForm/EducationForm";
import ExperienceForm from "components/Forms/ReviewForm/ExperienceForm";
import SkillForm from "components/Forms/ReviewForm/SkillForm";

const { Panel } = Collapse;

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile() {
  // state
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(true);

  // ref
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleSelectFile = () => {
    inputRef.current.click();
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const callbackEdu = (value) => {
    setIsChange(!value);
  };

  const callbackEx = (value) => {
    setIsChange(!value);
  };

  const callbackSk = (isChange, domain) => {
    console.log("object", domain);

    setIsChange(!isChange);
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

          <div className="row">
            <div className="col-sm">
              <Card title="CV của bạn">
                <ProfileCVItem
                  image="https://www.topcv.vn/images/cv/screenshots/thumbs/en/mau-cv-default.png"
                  name="Profile 12132323232"
                  date="1212121"
                  url="http:'aajaahgajdhgajyagdasyjh"
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
                  <EducationForm changeCallback={callbackEdu} hideBtn={true} />
                  <ExperienceForm changeCallback={callbackEx} hideBtn={true} />
                  <SkillForm changeCallback={callbackSk} hideBtn={isChange} />
                </Panel>
              </Collapse>
              ,
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="profile__wrapper__info">
            <div className="profile__wrapper__info__general">
              <div className="profile__wrapper__info__general__avatar">
                <img
                  src="https://graph.facebook.com/1057700137763728/picture?type=large"
                  alt="logo"
                />
                <p className="profile__wrapper__info__general__avatar__update">
                  Cập nhập ảnh
                </p>
              </div>
              <div className="profile__wrapper__info__general__detail">
                <p>Chào bạn</p>
                <p className="profile__wrapper__info__general__detail__name">
                  Lê Nguyễn Hoàng Vũ
                </p>
                <p className="profile__wrapper__info__general__detail__note">
                  Tải khoản ứng viên
                </p>
              </div>
            </div>

            <div className="profile__wrapper__info__personal">
              <div className="profile__wrapper__info__personal__status">
                <strong>Trạng thái</strong>
                <Switch defaultChecked onChange={onChange} />
              </div>

              <p>
                <strong>Email: </strong>
                123lnhvu@gmail.com
              </p>

              <p>
                <strong>Giới tính: </strong>
                27/03/1999
              </p>

              <p>
                <strong>Ngày sinh: </strong>
                27/03/1999
              </p>

              <p>
                <strong> Địa chỉ:</strong> 181 Hoàng Nhân, ACNCC, Tân Phú, TP
                HCM
              </p>

              <p>
                <strong>SĐT: </strong> 10101010101010
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
