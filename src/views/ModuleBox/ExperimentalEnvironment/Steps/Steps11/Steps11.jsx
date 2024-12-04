import React, { useState, useRef } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps11.module.scss";
import { Button, message, Input } from "antd";
import { animated } from "react-spring";
import tongzhi from "../image/steps6-tongzhi.png";
import { animationFn, storedProcedures } from "@/utils/tools";
import CourseModal from "@/components/CourseModal/CourseModal";
import MyToken from "@/components/MyToken/MyToken";

function Steps10() {
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);
  //开始通知动画
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef(null);
  const [tokenShow, setTokenShow] = useState(false);

  //开始拨付
  const startPayment = () => {
    if (inputRef.current.input.value) {
      if (inputRef.current.input.value === "ck9slcnl0k8ao0a3ntd") {
        setIsVisible(true);
        setTimeout(() => {
          message.success("拨付成功！");
          setIsNext1(true);
          setTokenShow(true);
          storedProcedures(
            "开证行",
            "进口商",
            "赎单付款流程",
            "第七步",
            "1000000",
            "ck9slcnl0k8ao0a3ntd"
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
          {" "}
          <MyToken token={isNext1 ? "0amc73bd0k6aoa83bc7" : "ck9slcnl0k8ao0a3ntd"} />
          <MyModal next={isNext} next1={isNext1} to="/experimentalEnvironment/steps12">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程七：赎单付款</h1>
                <br></br>
                <p>
                  在该场景中，学员将扮演开证行和进口商的角色，模拟赎单付款的过程。以下是具体操作步骤：
                </p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>2.在开证行下方点击“赎单”按钮，开证行通知进口商赎单，系统返回“赎单成功”</p>
                <p>
                  3.最后，将上一个流程生成的token值填入输入框内，点击“开始拨付”按钮，即进口商在贸易合约链上进行合约金额（数字人民币账户）的支付。拨付成功后，开证行下方会生成一个新的token值。
                </p>
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节</p>
              </div>
            </div>
          </MyModal>{" "}
          <CourseModal
            url={"https://7shudanfukuan.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <p className="title">实验步骤七：赎单付款流程</p>
          <div className={style.content}>
            <div className={style.contentRig}>
              <div className={style.imgBox}>
                <div className={style.imgRig}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Mala_zh9WnA_FXQHgFwjRgHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>开证行</h1>
                    <hr style={{ marginTop: "4px", opacity: "0.3" }} />
                    <div className={style.cardBot}>
                      <p style={{ margin: "6px 0" }}>应收金额:1000000</p>
                      <p>token:{tokenShow ? "7fy35cnl0vmak07tn0spani" : "ck9slcnl0k8ao0a3ntd"}</p>
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
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.UheeH4eWV7k0BE2FUd_t4AHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>进口商</h1>
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
                        message.success("赎单成功！");
                        setIsDisabled(false);
                      }, 1500);
                    }}
                  >
                    赎单
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
