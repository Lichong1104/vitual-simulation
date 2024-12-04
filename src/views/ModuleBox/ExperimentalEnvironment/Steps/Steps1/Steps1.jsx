import React from "react";
import MyModal from "@/components/MyModal/MyModal";
import style from "./Steps1.module.scss";

function Steps1() {
  return (
    <div className="pageBox">
      <div className="borderBox">
        <div className={style.mainBox}>
          <h1 className={style.title}>数字人民币国际大宗商品交易创新虚拟仿真实验</h1>
          <div className={style.article}>
            <p>
              区块链技术是一种去中心化的分布式账本技术，它的主要特点是安全、透明、不可篡改和去中心化。区块链技术的应用非常广泛，包括金融、物流、医疗、能源、政府等行业。区块链技术的发展历史可以追溯到比特币的出现，随着时间的推移，区块链技术不断发展壮大，逐渐成为了一个独立的技术领域。区块链技术的应用空间非常广泛，可以用于数字货币、智能合约、供应链管理、身份认证等领域。未来，随着区块链技术的不断发展和完善，它将会在更多的领域得到应用，为人们的生活带来更多的便利和创新
            </p>
            <MyModal
              to="/experimentalEnvironment/steps2"
              modalStyle={{ marginTop: "20vh", marginLeft: "22vw" }}
            >
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
                  <p>
                    本次实验项目共十个流程，学员将担任进出口贸易参与方的角色。模拟进出口贸易中的信用证付款流程，并通过区块链技术来增信和管理合约信息。学员将扮演买卖双方，在实践中学习合同签订、信用证开立、单据垫付等具体操作，以提升他们在进出口贸易领域的实际应用能力。通过这个实验，学员可以深入了解进出口贸易中的各个环节，并理解如何利用区块链技术提高交易的可信度、安全性和效率。
                  </p>
                </div>
              </div>
            </MyModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps1;
