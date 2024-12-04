import React, { useState } from "react";
import style from "./Steps4.module.scss";
import MyModal from "@/components/MyModal/MyModal";
import CourseModal from "@/components/CourseModal/CourseModal";
import FormComponents from "./FormComponents/FormComponents";
import Contract from "@/components/Contract/Contract";
import MyToken from "@/components/MyToken/MyToken";

function Steps4() {
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);
  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <Contract url="货物买卖合同2.pdf" />
          <MyToken token={isNext1 ? "pw9c2jn0amf5022nc8f" : "0am27cn0sk3a02n8rhd"} />
          <MyModal next={isNext} next1={isNext1} to="/experimentalEnvironment/steps5">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程二：申请开证</h1>
                <br></br>
                <p>
                  在该场景中，学员将扮演进口商的角色，模拟进口商申请开证的过程。以下是具体操作步骤：
                </p>
                <p> 1.点击“课程练习”，完成本流程的知识点练习题。 </p>
                <p>
                  2.根据签订的合同信息，填写开证申请书，并核对信息。可点击右上角的文档图标，查看提示信息（请务必按照合同中突出显示的重要信息手动填写，切勿复制粘贴）；也可点击“开启提示”，即可在输入框内预览提示词答案。确认无误后，点击“提交”按钮将申请书的信息上传到链上。
                </p>
                <p>3.银行收到开证申请后，系统返回“信用资质正在审核中”。</p>
                <p>
                  4.
                  开证行收到进口商的开证申请，立即对开证申请书的内容及其与合同的关系、开证申请人的资信状况等进行审核，审核完毕后，系统返回“审核完成”。
                </p>
                <p> 完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>
          <CourseModal
            url={"https://2kaizhengshenqing.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <p className="title">实验步骤二：申请开证流程</p>
          <div className={style.content}>
            <h1 style={{ textIndent: "1.2vw", width: "100%", fontSize: "1.2vw" }}>
              数字人民币大宗商品交易平台-申请开证模块
            </h1>
            <FormComponents
              finish={() => {
                setIsNext1(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps4;
