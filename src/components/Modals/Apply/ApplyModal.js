import React, { useState } from "react";
import { Modal } from "antd";
import "./ApplyModal.scss";

function ApplyModal({ visible, onCancel }) {
  const [selected, setSelected] = useState(null);

  return (
    <Modal
      title={"Ứng tuyển"}
      visible={visible}
      onCancel={onCancel}
      okText="Nộp CV"
      cancelText="Trở về"
    >
      <div>
        <div style={{ marginBottom: "0.5rem" }}>
          <div>
            <div className="apply-headerContainer">
              <div className="apply-title">Web Application Developer</div>
              <div className="apply-subtitle">
                <span>Knockerball Greenville</span>
                {" - "}
                <span>Thanh pho Ho Chi Minh</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "1.5rem" }}>
            <div className="resumeSelector-title">Chọn 1 CV để ứng tuyển:</div>
            <Resume id={1} selected={selected} setSelected={setSelected} />
            <Resume id={2} selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ApplyModal;

const Resume = ({ selected, id, setSelected }) => (
  <div
    className={`resumeSelector-box ${
      selected === id ? "resumeSelector-box--selected" : ""
    }`}
    onClick={() => setSelected(id)}
  >
    <div className="resumeSelector-information">
      <div className="resumeSelector-resumeIcon">
        <span className="resumeIcon-pdf"></span>
        {/* <span className="resumeIcon-docx"></span> */}
      </div>
      <div className="resumeSelector-resumeTitle">
        <div className="resumeSelector-itemTitle">CV_PhanThanhTung.pdf</div>
      </div>
    </div>
  </div>
);
