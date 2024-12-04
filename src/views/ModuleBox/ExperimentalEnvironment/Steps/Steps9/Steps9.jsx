import React, { useState, useRef } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps9.module.scss";
import { Button, message, Input } from "antd";
import { animated } from "react-spring";
import img from "../image/mod2.png";

import { animationFn, storedProcedures } from "@/utils/tools";

import MyToken from "@/components/MyToken/MyToken";

function Steps9() {
  //开始通知动画
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);
  const [tokenShow, setTokenShow] = useState(false);

  //开始拨付
  const startPayment = () => {
    if (inputRef.current.input.value) {
      if (inputRef.current.input.value === "9dbf93nlknda92qoihd") {
        setIsVisible(true);
        setTimeout(() => {
          message.success("拨付成功!");
          setTokenShow(true);
          setIsNext1(true);
          storedProcedures(
            "议付行",
            "出口商",
            "交单垫付流程",
            "第五步",
            "1000000",
            "9dbf93nlknda92qoihd"
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
          <MyToken token={isNext1 ? "44dflcnlkgdaonq8rhd" : "9dbf93nlknda92qoihd"} />
          <MyModal next1={isNext1} to="/experimentalEnvironment/steps10">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程五：交单垫付</h1>
                <br></br>
                <p>
                  在该场景中，学员将扮演出口商和议付行的角色，模拟交单垫付的过程。以下是具体操作步骤：
                </p>
                <p>
                  2.
                  填写付款申请单，请在将空白输入框填写完全，并核对信息。付款申请单需要填写的内容可参考以下提示：
                </p>
                <img src={img} alt="" />
                <p>
                  也可点击“开启提示”，即可在输入框内预览提示词答案。确认无误后，点击“提交”按钮将申请书的信息上传到链上，系统显示“真正审核中”，审核完成后显示“审核成功”，同时生成对应的token，请学员记住这个token值。
                </p>
                <p>
                  3．点击“下一步”，将生成的token值填入输入框内，点击“开始拨付”按钮，在贸易合约链上进行合约金额（数字人民币账户）的支付，向出口商的数字货币账户支付数字货币。拨付成功后，出口商下方会生成一个新的token值，请学员记住这个token值。
                </p>
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节</p>
              </div>
            </div>
          </MyModal>{" "}
          <p className="title">实验步骤五：交单垫付流程1-2</p>
          <div className={style.content}>
            <div className={style.contentLef}>
              <iframe
                src={"付款申请单.pdf"}
                frameBorder="0"
                height={"100%"}
                width={"100%"}
              ></iframe>
            </div>
            <div className={style.contentRig}>
              <div className={style.imgBox}>
                <div className={style.imgLef}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.vpHwwmyUEjK3KyQ_AdUjRwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>议付行</h1>
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
                        ...animationFn(280, 0, isVisible),
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
                <div className={style.imgRig}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.yGb4V76hOrzLXMk1IdFPzQHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>出口商</h1>
                    <hr style={{ marginTop: "4px", opacity: "0.3" }} />
                    <div className={style.cardBot}>
                      <p style={{ margin: "6px 0" }}>应付金额:1000000</p>
                      <p>token:{tokenShow ? "44dflcnlkgdaonq8rhd" : "9dbf93nlknda92qoihd"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.btn}>
                <div>
                  <Button type="primary" onClick={startPayment}>
                    开始拨付
                  </Button>
                </div>
                <div>
                  <h1>PS：请点击通知行下的开始拨付按钮</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps9;
