import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import LoadingContent from "components/Loading/LoadingContent";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeModal({
  show,
  toggleModal,
  saved,
  handleSave,
  url,
  download_url
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const toNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const toPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <Modal show={show} onHide={toggleModal} dialogClassName="resume-modal">
      <div className="row">
        <div id="candidate-viewer-cv">
          <Document
            file={{
              url: `https://cors-anywhere.herokuapp.com/${url}`
            }}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<LoadingContent loading={true} />}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="page-controls">
              <button type="button" onClick={toPreviousPage}>
                ‹
              </button>
              <span>
                Trang {pageNumber} / {numPages}
              </span>
              <button type="button" onClick={toNextPage}>
                ›
              </button>
            </div>
          </div>
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
