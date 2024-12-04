import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, message } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const MyModal = ({ to, modalStyle, modalWidth, children, onClose, next, next1, btnShow }) => {
  const history = useHistory();
  //modal
  const [isModalOpen, setIsModalOpen] = useState(btnShow ? true : false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  useEffect(() => {
    isModalOpen ? undefined : onClose();
  }, [isModalOpen]);
  return (
    <div>
      <div className="poi-lef">{btnShow ? <MessageOutlined onClick={showModal} /> : undefined}</div>
      <div className="poi-rig">
        <Button
          type="primary"
          onClick={() => {
            next && next1 ? history.push(to) : message.warning("请您先完成流程！");
          }}
        >
          下一步
        </Button>
      </div>
      <Modal
        style={modalStyle}
        width={modalWidth}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        {children}
      </Modal>
    </div>
  );
};

MyModal.defaultProps = {
  modalWidth: "65vw",
  onClose: () => {},
  modalStyle: { marginTop: "20vh", marginLeft: "22vw" },
  next: true,
  next1: true,
  btnShow: true,
};

export default MyModal;
