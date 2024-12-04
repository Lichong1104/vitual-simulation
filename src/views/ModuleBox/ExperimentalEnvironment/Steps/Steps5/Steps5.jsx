import React, { useState } from "react";
import style from "./Steps5.module.scss";
import MyModal from "@/components/MyModal/MyModal";
import CourseModal from "@/components/CourseModal/CourseModal";
import FormComponents from "./FormComponents/FormComponents";
import img from "../image/mod1.png";

function Steps4() {
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);
  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          {" "}
          <MyModal next={isNext} next1={isNext1} to="/experimentalEnvironment/steps6">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程三：传递信用证</h1>
                <br></br>
                <p>
                  在该场景中，学员将扮演开证行和通知行的角色，模拟传递信用证的过程。以下是具体操作步骤：
                </p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>
                  2.根据签订的合同信息已开证申请的信息等内容，信用证需要填写的内容可参考以下提示：
                </p>
                <img src={img} alt="" />
                <p>
                  也可点击“开启提示”，即可在输入框内预览提示词答案。填写信用证对应信息内容，填写完毕后，点击“上传”按钮将信用证信息上传到链上，即可按申请书的内容开立以出口商为受益人的信用证，系统返回“开证成功”。
                </p>
                <p>
                  3.在通知行下方点击“通知”按钮，通知出口商信用证到，出口商收到通知后，系统返回“通知成功”。
                </p>
                <p> 完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>
          <CourseModal
            url={"https://3chuandixinyongzheng.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <p className="title">实验步骤三：传递信用证流程1-1</p>
          <div className={style.content}>
            <h1 style={{ textIndent: "1.2vw", width: "100%", fontSize: "1.2vw" }}>
              传递信用证-数字人民币大宗商品交易平台
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
