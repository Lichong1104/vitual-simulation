import React, { useState } from "react";
import style from "./Steps8.module.scss";
import MyModal from "@/components/MyModal/MyModal";
import CourseModal from "@/components/CourseModal/CourseModal";
import FormComponents from "./FormComponents/FormComponents";
import img from "../image/mod2.png";

function Steps8() {
  const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);
  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <MyModal next={isNext} next1={isNext1} to="/experimentalEnvironment/steps9">
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
          </MyModal>
          <CourseModal
            url={"https://5jiaodandianfu.netlify.app/"}
            isOpenToo={() => {
              setIsNext(true);
            }}
          />
          <p className="title">实验步骤五：交单垫付流程1-1</p>
          <div className={style.content}>
            <h1 style={{ textIndent: "1.2vw", width: "100%", fontSize: "1.2vw" }}>
              交单垫付-数字人民币大宗商品交易平台
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

export default Steps8;
