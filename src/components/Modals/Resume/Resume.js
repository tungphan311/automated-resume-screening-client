import React from "react";
import { Modal } from "react-bootstrap";
import "./Resume.scss";

function ResumeModal({
  show,
  toggleModal,
  saved,
  handleSave,
  url,
  download_url
}) {
  const onHide = () => {
    toggleModal();
  };
  return (
    <Modal show={show} onHide={onHide} dialogClassName="resume-modal">
      <div className="row">
        <div id="candidate-viewer-cv">
          <iframe
            title="candidate resume"
            src={url}
            style={{ width: "100%", height: "90vh" }}
          />
          <div className="action-list">
            <button className="btn btn-border btn-default" onClick={handleSave}>
              {saved ? (
                <>
                  <i className="fa fa-user-times mr-5"></i>
                  Loại khỏi danh sách theo dõi
                </>
              ) : (
                <>
                  <i className="fa fa-user-plus mr-5"></i>
                  Lưu vào danh sách theo dõi
                </>
              )}
            </button>

            <a href={download_url} className="btn btn-border btn-default">
              <i className="fa fa-download mr-5"></i>
              Tải CV
            </a>
            <button
              className="btn btn-border btn-default"
              onClick={toggleModal}
            >
              <i className="fa fa-times mr-5"></i>
              Đóng lại
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ResumeModal;
