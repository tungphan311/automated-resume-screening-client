import React from "react";
import { Modal } from "antd";
import "./ConfirmModal.scss";

function ConfirmModal({ visible, toggleModal }) {
  return (
    <Modal title="Review CV" centered visible={visible} footer={null}>
      <div className="review-cv--layout review-cv--vertical">
        <button
          className="rv-button rv-button--primary rv-button--lg rv-button--block"
          onClick={() => toggleModal()}
        >
          Review
        </button>
        <div className="message-Xfb-4">
          <div className="review-cv__icon">
            <img src="/assets/svg/ChecklistVariant.svg" alt="checklist" />
          </div>
          <ul>
            <li>Kiểm tra một vài lỗi mà chúng tôi có thể tạo ra</li>
            <li>Tinh chỉnh lại CV của bạn</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
