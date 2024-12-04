import React, { useState, useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";
import { PulseLoader } from "react-spinners";
import { Button, Space, message } from "antd";
import pdfImage from "../../image/pdfImage.jpg";
function PdfView({ pdfPath, url }) {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument } = usePdf({
    file: pdfPath,
    page,
    canvasRef,
  });

  return (
    <div
      className="pdfView"
      style={{ height: "100%", display: "flex", border: "1px solid rgba(128, 128, 128, 0.205)" }}
    >
      {!pdfDocument && (
        <PulseLoader color={"#123abc"} loading={true} size={10} speedMultiplier={0.7} />
      )}
      <div style={{ height: "100%", width: "53%" }}>
        <canvas ref={canvasRef} />
      </div>

      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <div>
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
            }}
          >
            <Space style={{ marginTop: "60px" }}>
              <img src={pdfImage} style={{ width: "380px" }} alt="" />
              <a href={url}>
                <Button style={{ marginLeft: "-25px" }} type="primary">
                  实验范本下载
                </Button>
              </a>
            </Space>
            <Space size="large" style={{ marginLeft: "65px" }}>
              <Button
                type="primary"
                onClick={() => {
                  if (page === 1) {
                    message.warning("已经是第一页！");
                    return;
                  }
                  setPage(page - 1);
                }}
              >
                上一页
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  if (page === pdfDocument.numPages) {
                    message.warning("已经是最后一页！");
                    return;
                  }
                  setPage(page + 1);
                }}
              >
                下一页
              </Button>
            </Space>
          </Space>
        </div>
      )}
    </div>
  );
}

export default PdfView;
