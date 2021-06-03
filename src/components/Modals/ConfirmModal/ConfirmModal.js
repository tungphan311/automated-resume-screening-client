import React from "react";
import { Modal } from "antd";
import "./ConfirmModal.scss";

function ConfirmModal({ visible, onCancel }) {
  return (
    <Modal
      title="Review CV"
      centered
      onCancel={onCancel}
      visible={visible}
      footer={null}
    >
      <div className="review-cv--layout review-cv--vertical">
        <button
          className="rv-button rv-button--primary rv-button--lg rv-button--block"
          onClick={onCancel}
        >
          Review
        </button>
        <div className="message-Xfb-4">
          {/* <h2>We prefilled your editable online resume</h2> */}
          <div className="review-cv__icon">
            <img src="/assets/svg/ChecklistVariant.svg" alt="checklist" />
          </div>
          <ul>
            {/* <li>Kiểm tra một vài lỗi mà chúng tôi có thể tạo ra</li>
            <li>Tinh chỉnh lại CV của bạn</li> */}
            <li>Check for mistakes we might have made</li>
            <li>Refine using personalized tips</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
