import React, { useState } from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps6.module.scss";
import { Button, message } from "antd";
import { animated } from "react-spring";
import tongzhi from "../image/steps6-tongzhi.png";
import { animationFn, storedProcedures } from "@/utils/tools";
import CourseModal from "@/components/CourseModal/CourseModal";
import MyToken from "@/components/MyToken/MyToken";

function Steps6() {
  //开始通知动画
  const [isVisible, setIsVisible] = useState(false);
  // const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          {/* <CourseModal
            url={"https://3chuandixinyongzheng.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          /> */}
          <MyToken token={isNext1 ? "cm28dha5amc83y20amc" : "pw9c2jn0amf5022nc8f"} left />
          <MyModal next1={isNext1} btnShow={false} to="/experimentalEnvironment/steps7">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>欢迎进行“基于数字人民币国际大宗交易仿真项目</h1>
                <br></br>
                <p>本次实验共分为十个步骤</p>
              </div>
            </div>
          </MyModal>
          <p className="title">实验步骤三：传递信用证流程1-2</p>
          <div className={style.content}>
            <div className={style.contentLef}>
              <iframe src={"./信用证.pdf"} frameBorder="0" height={"100%"} width={"100%"}></iframe>
            </div>
            <div className={style.contentRig}>
              <div className={style.imgBox}>
                <div className={style.imgLef}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.vpHwwmyUEjK3KyQ_AdUjRwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>通知行</h1>
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
                </div>
                <div className={style.imgRig}>
                  <div className={style.imgCard}>
                    <img
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.yGb4V76hOrzLXMk1IdFPzQHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                    <h1>出口商</h1>
                  </div>
                </div>
              </div>
              <div className={style.btn}>
                <div>
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsVisible(true);
                      setTimeout(() => {
                        storedProcedures("通知行", "出口商", "传递信用证流程", "第三步");
                        setIsNext1(true);
                        message.success("通知成功！");
                      }, 1500);
                    }}
                  >
                    通知
                  </Button>
                </div>
                <div>
                  <h1>PS：请点击通知行下的通知按钮通知出口商信用证明</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps6;
