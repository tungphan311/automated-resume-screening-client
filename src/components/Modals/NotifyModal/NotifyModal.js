import React from "react";
import { Modal } from "antd";

function NotifyModal({ visible, onCancel }) {
  return (
    <Modal
      title="Thông báo"
      centered
      onCancel={onCancel}
      onOk={onCancel}
      visible={visible}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <p>Tài khoản của bạn chưa cập nhật Thông tin công ty.</p>
      <p>
        Để đăng tin tuyển dụng một cách hiệu quả, vui lòng cập nhật thông tin
        công ty của bạn.
      </p>
    </Modal>
  );
}

export default NotifyModal;
