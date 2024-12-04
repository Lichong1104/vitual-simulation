import React, { useEffect, useState } from "react";
import MyModal from "@/components/MyModal/MyModal";
import CourseModal from "@/components/CourseModal/CourseModal";
import TypeCard from "@/components/TypingCard/index.jsx";
import style from "./Steps2.module.scss";
import { message } from "antd";
import { animated } from "react-spring";
import { animationFn, storedProcedures } from "@/utils/tools";
import MyToken from "@/components/MyToken/MyToken";

function Steps2() {
  const [textLoad, setTextLoad] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("./货物买卖合同.pdf");

  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);

  //开始拨付动画
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setPdfUrl("./合同.pdf");
        message.success("合同签订成功！");
        setIsNext1(true);
        storedProcedures("进口商", "出口商", "合同签订流程", "第一步");
      }, 2000);
    }
  }, [isVisible]);

  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <MyToken token={isNext1 ? "0am27cn0sk3a02n8rhd" : "暂未定义"} />
          <p className="title">实验步骤一：合同签订流程1-1</p>
          <div className={style.content}>
            <div className={style.contentLef}>
              <iframe src={pdfUrl} frameBorder="0" height={"100%"} width={"100%"}></iframe>
            </div>
            <div className={style.contentRig}>
              <div className={style.action}>
                {textLoad ? (
                  <div className={style.cloudContainer}>
                    <div>
                      <TypeCard source="你好，请点击这里的章印,完成盖章操作！" />
                    </div>
                    <div className={style.arrow}></div>
                  </div>
                ) : undefined}

                <div>
                  <img
                    className={style.teacher}
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.CuM0uI5SkG_8J27KTSMhVAHaH7?w=191&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                  />

                  <div
                    style={{
                      position: "relative",
                      float: "left",
                    }}
                  >
                    <img
                      onClick={() => {
                        setIsVisible(true);
                      }}
                      style={{ height: "6vw", cursor: "pointer", marginTop: "5vw" }}
                      src="https://tse1-mm.cn.bing.net/th/id/OIP-C.WQVWuxu9w_jwqEV1au-F0AAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />{" "}
                    <animated.div
                      style={{
                        ...animationFn(-760, 0, isVisible),
                        position: "absolute",
                        width: "12vw",
                        height: "12vw",
                        // backgroundColor: "red",
                      }}
                      className="animated-div"
                    >
                      <img
                        src={
                          "https://tse1-mm.cn.bing.net/th/id/OIP-C.WQVWuxu9w_jwqEV1au-F0AAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        }
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </animated.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CourseModal
            url={"https://1hetongqianding.netlify.app"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <MyModal
            next={isNext}
            next1={isNext1}
            onClose={() => setTextLoad(true)}
            to="/experimentalEnvironment/steps3"
          >
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程一：合同签订</h1>
                <br></br>
                <p>
                  在该合同签订场景中，学员将扮演进口商的角色，模拟双方签订买卖合同的过程。以下是具体操作步骤：{" "}
                </p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>
                  {" "}
                  2.根据系统生成的买卖合同，阅读合同的条款和内容之后，使用电子化印章进行签约。请点击章印,完成盖章操作。
                </p>
                <p>
                  {" "}
                  3.点击“下一步”，根据签订的合同信息，填写订购合同的信息，并核对信息。可点击右上角的文档图标，查看提示信息（请务必按照合同中突出显示的重要信息手动填写，切勿复制粘贴）；也可点击“开启提示”，即可在输入框内显示提示词。确认无误后，点击“提交”按钮。
                </p>
                <p> 完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>
        </div>
      </div>
    </div>
  );
}

export default Steps2;
