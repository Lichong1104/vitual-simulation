import React, { useState } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps14.module.scss";
import tableData from "./tableData";
import { Button, Table, message } from "antd";
import { storedProcedures } from "@/utils/tools";
import CourseModal from "@/components/CourseModal/CourseModal";
import NProgress from "nprogress";
import MyToken from "@/components/MyToken/MyToken";
import img from "../image/steps14-shouhuo.png";

function Steps14() {
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);

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

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <p className="title">实验步骤九：核验货物流程</p>{" "}
          <MyToken token={isNext1 ? "cn8ajs7v0k9amcu7s67" : "0amc73bd0k6aoa83bc7"} />
          <MyModal next={isNext} to="/experimentalEnvironment/steps15">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程九：核验货物</h1>
                <br></br>
                <p>在该场景中，学员将扮演进口商的角色，模拟核验货物的过程。以下是具体操作步骤：</p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>
                  2.系统出现上一步获取的提货单据和进口商收到运货公司的收货单信息。学员对比两张表信息，检查确定交割货物的质量和数量是否满足合约要求
                </p>
                <p>3．确认无误后，点击“确认”，完成交割货物的确认。</p>
                <p>4.请点击收货单据上面的下载按钮下载pdf</p>
                <img src={img} alt="" />
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>{" "}
          <CourseModal
            url={"https://9heyanhuowu.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <div className={style.content}>
            <div>
              <div style={{ height: "100%" }}>
                <iframe src="收货单.pdf" height={"100%"} width={"100%"} frameBorder="0"></iframe>
              </div>
            </div>
            <div>
              <div className="myScroll" style={{ height: "100%" }}>
                <Table
                  columns={columns}
                  dataSource={tableData}
                  bordered
                  pagination={false}
                  title={() => <h1>提货单据</h1>}
                />
              </div>
            </div>
            <div className={style.contentRig}>
              <div className={style.imgCard}>
                <img
                  src="https://tse1-mm.cn.bing.net/th/id/OIP-C.sWMdDiKjyX9lwUvjwikB-wHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
                <h1>进口商</h1>
                <hr style={{ marginTop: "4px", opacity: "0.3" }} />
                <div className={style.cardBot}>
                  <p style={{ margin: "6px 0" }}>
                    请仔细查看并比对上一步获取的提货单据和进口商收到运货公司的提货单信息。
                  </p>
                  <p style={{ margin: "6px 0" }}>
                    如果收货单信息比对准确无误请点击确认并开始下一步
                  </p>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      type="primary"
                      onClick={() => {
                        NProgress.start();
                        setTimeout(() => {
                          NProgress.done();
                          setIsNext1(true);
                          message.success("核验成功！");
                          storedProcedures("进口商", "出口商", "核验货物流程", "第九步");
                        }, 1500);
                      }}
                    >
                      确认
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps14;
