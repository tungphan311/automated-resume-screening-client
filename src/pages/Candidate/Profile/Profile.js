import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Upload } from "antd";
import React from "react";
import { toast } from "utils";
import "./Profile.scss";

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile() {
  const props = {
    name: "Candidate upload CV",
    accept:
      ".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf",
    beforeUpload: (file) => {
      if (!ACCEPTS.includes(file.type)) {
        toast({
          type: "error",
          message: "Tệp có định dạng không hợp lệ"
        });
      }
    }
  };

  return (
    <div className="container profile__wrapper" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-sm-8">
          <Card title="Tải lên CV của bạn">
            <div className="row">
              <div className="col-sm-6">
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Tải lên 1 CV</Button>
                </Upload>
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
