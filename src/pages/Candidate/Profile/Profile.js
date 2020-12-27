import { UploadOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useRef, useState } from "react";
import { toast } from "utils/index";
import "./Profile.scss";
import FormData from "form-data";
import { useDispatch } from "react-redux";
import { uploadCVAction } from "state/actions/index";
import Loading from "components/Loading/Loading";

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

  return (
    <div className="container profile__wrapper" style={{ marginTop: "20px" }}>
      <Loading loading={loading} />
      <div className="row">
        <div className="col-sm-8">
          <Card title="Tải lên CV của bạn">
            <div className="row">
              <div className="col-sm-6">
                <Button onClick={handleSelectFile} icon={<UploadOutlined />}>
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
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default CandidateProfile;
