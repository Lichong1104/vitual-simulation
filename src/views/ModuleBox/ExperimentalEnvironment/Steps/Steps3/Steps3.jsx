import React, { useState } from "react";
import style from "./Steps3.module.scss";
import { useHistory } from "react-router-dom";
import FormComponents from "./FormComponents/FormComponents";
import Contract from "@/components/Contract/Contract";
import MyModal from "@/components/MyModal/MyModal";

function Steps3() {
  const history = useHistory();
  const [isNext, setIsNext] = useState(false);
  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <MyModal next={isNext} to="/experimentalEnvironment/steps4">
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
                  在该合同签订场景中，学员将扮演进口商的角色，模拟双方签订买卖合同的过程。以下是具体操作步骤：
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
                </p>
              </div>
            </div>
          </MyModal>

          <Contract />
          <p className="title">实验步骤一：合同签订流程1-2</p>
          {/* <p className={style.text}>
            请填写根据签订的合同信息，填写订购合同的合同编号和账户信息，并核对信息，准确无误后，点击确认按钮
          </p> */}
          {/* <h1 className={style.title}>数字人民币大宗商品交易平台</h1> */}
          <div className={style.content}>
            <h1 style={{ textIndent: "1.2vw", width: "100%", fontSize: "1.2vw" }}>
              链式合约管理-数字人民币大宗商品交易平台
            </h1>
            <FormComponents
              finish={() => {
                setIsNext(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps3;
