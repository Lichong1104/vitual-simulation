import { Modal } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import React, { useState } from "react";

function Contract({ url = "./货物买卖合同.pdf" }) {
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <div className="poi-topRig">
      <FileTextOutlined style={{ fontSize: "2.5vw" }} onClick={showModal} />

      <Modal
        style={{ marginTop: "0", marginLeft: "22vw" }}
        width={"65vw"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <div style={{ height: "60vh" }}>
          <iframe src={url} height={"100%"} width={"100%"} frameBorder="0"></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default Contract;
