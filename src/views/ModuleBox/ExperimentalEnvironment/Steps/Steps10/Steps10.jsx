import React, { useState, useRef } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps10.module.scss";
import { Button, message, Input } from "antd";
import { animated } from "react-spring";
import tongzhi from "../image/steps6-tongzhi.png";
import { animationFn, storedProcedures } from "@/utils/tools";
import CourseModal from "@/components/CourseModal/CourseModal";
import MyToken from "@/components/MyToken/MyToken";

function Steps10() {
  //开始通知动画
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);

  const [tokenShow, setTokenShow] = useState(false);
  const inputRef = useRef(null);
  //开始拨付
  const startPayment = () => {
    if (inputRef.current.input.value) {
      if (inputRef.current.input.value === "44dflcnlkgdaonq8rhd") {
        setIsVisible(true);
        setTimeout(() => {
          message.success("拨付成功！");
          setTokenShow(true);
          setIsNext1(true);
          storedProcedures(
            "开证行",
            "议付行",
            "寄票偿付流程",
            "第六步",
            "1000000",
            "44dflcnlkgdaonq8rhd"
          );
        }, 1500);
      } else {
        message.error("token错误!");
      }
    } else {
      message.warning("请输入token");
    }
  };

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <MyToken token={isNext1 ? "ck9slcnl0k8ao0a3ntd" : "44dflcnlkgdaonq8rhd"} />
          <MyModal next={isNext} next1={isNext1} to="/experimentalEnvironment/steps11">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程六：寄票偿付</h1>
                <br></br>
                <p>
                  在该场景中，学员将扮演开证行和议付行的角色，模拟寄票偿付的过程。以下是具体操作步骤：
                </p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>2.在议付行下方点击“寄票”按钮，将单据和汇票寄给开证行，系统返回“寄票成功”。</p>
                <p>
                  3.最后，将上一个流程生成的token值填入输入框内，点击“开始拨付”按钮，在贸易合约链上进行合约金额（数字人民币账户）的支付，向议付行的数字货币账户支付数字货币。拨付成功后，议付行下方会生成一个新的token值，请学员记住这个token值。
                </p>
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>
          <CourseModal
            url={"https://6jipiaochangfu.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <p className="title">实验步骤六：寄票偿付流程</p>
          <div className={style.content}>
            <div className={style.contentRig}>
              <div className={style.imgBox}>
                <div className={style.imgRig}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.vpHwwmyUEjK3KyQ_AdUjRwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>议付行</h1>
                    <hr style={{ marginTop: "4px", opacity: "0.3" }} />
                    <div className={style.cardBot}>
                      <p style={{ margin: "6px 0" }}>应收金额:1000000</p>
                      <p>token:{tokenShow ? "ck9slcnl0k8ao0a3ntd" : "44dflcnlkgdaonq8rhd"}</p>
                    </div>
                    {/* {通知动画} */}
                    <animated.div
                      style={{
                        ...animationFn(280, 0, isVisible1),
                        position: "absolute",
                        width: "12vw",
                        height: "12vw",
                      }}
                      className="animated-div"
                    >
                      <img src={tongzhi} style={{ width: "100%" }} alt="" />
                    </animated.div>
                  </div>
                </div>
                <div className={style.imgLef}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Mala_zh9WnA_FXQHgFwjRgHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>开证行</h1>
                    <hr style={{ marginTop: "4px", opacity: "0.3" }} />
                    <div className={style.cardBot}>
                      <p style={{ margin: "6px 0" }}>应付金额:1000000</p>

                      <Input
                        style={{ margin: "12px 0" }}
                        ref={inputRef}
                        placeholder="请输入token"
                      />
                    </div>
                    {/* {通知动画} */}
                    <animated.div
                      style={{
                        ...animationFn(-280, 0, isVisible),
                        position: "absolute",
                        width: "12vw",
                        height: "12vw",
                      }}
                      className="animated-div"
                    >
                      <img
                        src="https://tse2-mm.cn.bing.net/th/id/OIP-C.MDyL16bZHPb2_J2y-hro_AHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </animated.div>
                  </div>
                </div>
              </div>
              <div className={style.btn}>
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsVisible1(true);
                      setTimeout(() => {
                        message.success("寄票成功！");
                        setIsDisabled(false);
                      }, 1500);
                    }}
                  >
                    寄票
                  </Button>
                </div>
                <div>
                  <Button type="primary" onClick={startPayment} disabled={isDisabled}>
                    开始拨付
                  </Button>
                </div>
              </div>
            </div>{" "}
            <div className={style.contentLef}>
              <iframe src={"收货单.pdf"} frameBorder="0" height={"100%"} width={"100%"}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps10;
