import React, { useState } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps7.module.scss";
import { animated } from "react-spring";
import tongzhi from "../image/steps6-tongzhi.png";
import { Button, Table, message } from "antd";
import tableData from "./Steps7TableData";
import { animationFn, storedProcedures } from "@/utils/tools";
import CourseModal from "@/components/CourseModal/CourseModal";
import MyToken from "@/components/MyToken/MyToken";

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

function Steps7() {
  //开始通知动画
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <MyToken token={isNext1 ? "ma9fj395a0am0ash7t6" : "cm28dha5amc83y20amc"} />
          <CourseModal
            url={"https://4fahuotidan.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <MyModal next={isNext} next1={isNext1} to="/experimentalEnvironment/steps8">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程四：发货提单</h1>
                <br></br>
                <p>在该场景中，学员将扮演出口商的角色，模拟发货提单的过程。以下是具体操作步骤</p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>2.点击“开始发货”按钮，即可按信用证和合同中规定安排备货、发货、出货。</p>
                <p>
                  3．完成发货后，点击“制作单据”按钮，开始制作信用证中要求的相关单据，系统返回“制作单据成功”，学员即可查看详细单据内容。
                </p>
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节</p>
              </div>
            </div>
          </MyModal>
          <p className="title">实验步骤四：发货提单流程</p>
          <div className={style.content}>
            <div className={style.contentLef}>
              <div className={style.imgBox}>
                <div className={style.imgCard}>
                  <img
                    src="https://tse2-mm.cn.bing.net/th/id/OIP-C.yGb4V76hOrzLXMk1IdFPzQHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                  />
                  <h1>出口商</h1>
                  {/* {通知动画} */}
                  <animated.div
                    style={{
                      ...animationFn(280, 0, isVisible),
                      position: "absolute",
                      width: "12vw",
                      height: "12vw",
                    }}
                    className="animated-div"
                  >
                    <img src={tongzhi} style={{ width: "100%" }} alt="" />
                  </animated.div>
                </div>
                <div className={style.imgCard}>
                  <img
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.If9n9e9q7DCUs7yz7TeAuAHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                  />
                  <h1>运货公司</h1>
                </div>
              </div>
              <div className={style.btn}>
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsVisible(true);
                      setTimeout(() => {
                        message.success("发货成功！");
                        setIsDisabled(false);
                      }, 1500);
                    }}
                  >
                    开始发货
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                        setData(tableData);
                        message.success("制作单据成功！");
                        setIsNext1(true);
                        storedProcedures("出口商", "运货公司", "发货提单流程", "第四步");
                      }, 1500);
                    }}
                    disabled={isDisabled}
                  >
                    制作单据
                  </Button>
                </div>
              </div>
              <p style={{ marginTop: "30px", textIndent: "2.1vw" }}>
                PS：发货完成后请点击制作单据查看详细内容
              </p>
            </div>
            <div className={style.contentRig}>
              <h1 style={{ width: "100%", fontSize: "1.2vw", margin: "16px 0" }}>
                发货提单-数字人民币大宗商品交易平台
              </h1>
              <div className="myScroll" style={{ height: "50%" }}>
                <Table
                  loading={isLoading}
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </div>

              <p style={{ marginTop: "30px" }}>PS：请在这里查看详细单据内容</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps7;
