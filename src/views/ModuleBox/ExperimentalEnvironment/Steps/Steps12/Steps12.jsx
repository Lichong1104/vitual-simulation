import React, { useState } from "react";
import style from "./Steps12.module.scss";
import MyModal from "@/components/MyModal/MyModal";
import { Button, Space, Table, message, Modal } from "antd";
import tableData from "../Steps7/Steps7TableData";

import CourseModal from "@/components/CourseModal/CourseModal";

const columns = [
  {
    title: "字段",
    dataIndex: "field",
    width: "50%",
  },
  {
    title: "值",
    dataIndex: "value",
  },
];

function Steps12() {
  const [isNext, setIsNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  //预览
  const preview = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setData(tableData);
      message.success("获取成功！");
      setIsDisabled(false);
    }, 1500);
  };

  // //modal
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => setIsModalOpen(true);
  // const handleOk = () => setIsModalOpen(false);
  // const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <MyModal next={isNext} to="/experimentalEnvironment/steps13">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程八：提货交割</h1>
                <br></br>
                <p>在该场景中，学员将扮演进口商的角色，模拟提货交割的过程。以下是具体操作步骤</p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>
                  2.进口商获取银行提货单据，点击“获取”按钮，系统显示提货单据信息表，并返回“获取成功”。
                </p>
                <p>
                  3.然后点击“下一步”，即进口商去交割仓库进行盘点和交割，系统显示出实际送达三个仓库的货物吨数、含铁率、含硫率、含硅率、含铝率及含磷率等信息，请根据这些的信息，分别计算出其综合值，并填入输入框内，点击“提交”。
                </p>
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>{" "}
          <CourseModal
            url={"https://8tihuojiaoge.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <p className="title">实验步骤八：提货交割流程1-1</p>
          <div className={style.content}>
            <div className={style.contentLef}>
              <div className={style.borderBox}>
                <p className={style.accTitle}>进口商账户列表</p>
                <div className={style.accCont}>
                  <p>应付金额：￥0</p>
                  <p>已付金额：￥1000000</p>
                  <p>当前物流：已发货</p>
                  <p>运货单据：已收到</p>
                  <p>当前状态：正在提货</p>
                  <p>流程进度：85%</p>
                  <p>是否完成：未完成</p>
                </div>
                <hr style={{ opacity: "0.4" }} />
                <p className={style.accFooter}>PS：当前物流与资金的状态显示</p>
                {/* {通知动画} */}
              </div>
            </div>
            <div className={style.contentMid}>
              <div className={style.borderBox}>
                <p className={style.accTitle}>运货公司账户列表</p>
                <div className={style.accCont}>
                  <p>应收金额：￥0</p>
                  <p>已收金额：￥0</p>
                  <p>当前物流：已发货</p>
                  <p>运货单据：已发出</p>
                  <p>当前状态：正在出货</p>
                  <p>流程进度：85%</p>
                  <p>是否完成：未完成</p>
                </div>
                <hr style={{ opacity: "0.4" }} />
                <p className={style.accFooter}>PS：当前物流与资金的状态显示</p>
              </div>
            </div>
            <div className={style.contentRig}>
              <div className={style.tableBox}>
                <Table
                  loading={isLoading}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </div>

              <div className={style.footer}>
                <Space size="large">
                  <Button type="primary" onClick={preview}>
                    获取
                  </Button>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps12;
