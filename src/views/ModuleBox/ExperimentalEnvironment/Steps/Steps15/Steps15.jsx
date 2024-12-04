import React, { useState, useRef } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps15.module.scss";
import { message, Button, Table, Modal, Space } from "antd";
import CourseModal from "@/components/CourseModal/CourseModal";
import NProgress from "nprogress";

function Steps15() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const inputRef = useRef(null);
  const columns = [
    { title: "步骤", dataIndex: "index", width: "80px" },

    {
      title: "角色1",
      dataIndex: "jia",
    },
    {
      title: "角色2",
      dataIndex: "yi",
    },
    { title: "事件", dataIndex: "evt" },
    {
      title: "时间",
      dataIndex: "time",
    },
    {
      title: "金额",
      dataIndex: "amount",
    },
    { title: "token", dataIndex: "token" },
  ];

  const [data, setData] = useState([]);

  const inputChange = () => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
      message.success("上传成功！");
    }, 1500);
  };

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <p className="title">实验步骤十：贸易完成流程</p>
          <MyModal next={isNext} to="/experimentalEnvironment">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程十：贸易完成</h1>
                <br></br>
                <p>在该场景中，学员将扮演进口商的角色，模拟贸易完成的过程。以下是具体操作步骤：</p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>
                  2.完成前面步骤，确认无误后，点击“确认”按钮，即可预览前面流程的步骤信息，点击“上传文件”将上一步下载的收货单上传到贸易合约链上
                </p>
                <p>请完成课程练习后点击”下一步“到首页</p>
              </div>
            </div>
          </MyModal>
          <CourseModal
            url={"https://10maoyiwancheng.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <div className={style.content}>
            <div className={style.contentLef}>
              <div className={style.imgCard}>
                <img
                  src="https://tse2-mm.cn.bing.net/th/id/OIP-C.UheeH4eWV7k0BE2FUd_t4AHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
                <h1>进口商</h1>
                <hr style={{ marginTop: "4px", opacity: "0.3" }} />
                <div className={style.cardBot}>
                  <p style={{ margin: "6px 0" }}>
                    此步骤是大宗商品贸易流程最后一步，您可以在此预览之前每一步的交易时间、步骤、金额、token等
                  </p>
                  <p style={{ margin: "6px 0" }}>点击此按钮加载预览表格</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 12px ",
                    alignItems: "flex-end",
                  }}
                >
                  <input
                    type="file"
                    onChange={inputChange}
                    ref={inputRef}
                    style={{ display: "none" }}
                  />
                  <Button
                    type="primary"
                    onClick={() => {
                      inputRef.current.click();
                    }}
                  >
                    上传文件
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                        message.success("核验成功！");
                        setData(JSON.parse(sessionStorage.getItem("allSteps")));
                        setTimeout(() => {
                          message.success("您已完成所有步骤，请完成课程练习后点击下一步到首页！");
                        }, 1500);
                      }, 1500);
                    }}
                  >
                    确认
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.contentRig}>
              <div className="myScroll" style={{ height: "100%" }}>
                <Table
                  loading={isLoading}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps15;
