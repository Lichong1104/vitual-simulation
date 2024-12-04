import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
function CourseModal({ modalStyle, modalWidth, url, isOpenToo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      isOpenToo();
    }
  }, [isModalOpen]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="poi-mid">
        <Button type="primary" onClick={showModal}>
          课程练习
        </Button>
      </div>

      <Modal
        title="知识练习回顾"
        style={modalStyle}
        width={modalWidth}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <div style={{ height: "60vh" }}>
          <iframe src={url} frameBorder="0" height={"100%"} width={"100%"}></iframe>
        </div>
      </Modal>
    </>
  );
}
CourseModal.defaultProps = {
  modalWidth: "65vw",
  modalStyle: { marginLeft: "22vw" },
};

export default CourseModal;
