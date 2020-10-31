import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Progress } from "antd";
import firebase from "firebase";
import React, { useRef, useState } from "react";
import { toast } from "utils/index";
import "./Profile.scss";

const ACCEPTS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf"
];

function CandidateProfile() {
  // state
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  // ref
  const inputRef = useRef();
  const storageRef = firebase.storage().ref();

  const handleSelectFile = () => {
    inputRef.current.click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];

    if (!ACCEPTS.includes(file.type)) {
      toast({ type: "error", message: "Định dạng tệp không hợp lệ" });
    } else {
      setLoading(true);

      const metadata = {
        contentType: file.type
      };

      const uploadTask = storageRef
        .child("resumes/" + file.name)
        .put(file, metadata);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgress(p);
        },
        function (error) {
          // Handle unsuccessful uploads
          console.log(error);
        },
        function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
          });
        }
      );
    }
  };

  return (
    <div className="container profile__wrapper" style={{ marginTop: "20px" }}>
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
      <div className={`${loading ? "" : "d-none"} loading-cv`}>
        <Progress
          type="circle"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068"
          }}
          percent={progress}
        />
        <p style={{ marginTop: "20px  " }}>Đang tải lên ...</p>
      </div>
    </div>
  );
}

export default CandidateProfile;
