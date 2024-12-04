import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import style from "./ExperimentalEnvironment.module.scss";
import img from "../../../image/微信图片_20230606161559.png";
import { Button, Space } from "antd";

function ExperimentalEnvironment() {
  const history = useHistory();
  const btnRef = useRef(null);
  return (
    <div style={{ height: "100%" }}>
      <div className={style.homeBox}>
        <div className={style.topBox}>
          <div className={style.title}>
            <img src={"https://www.nxnu.edu.cn/banner/logox.png"} />
          </div>
        </div>
        <div className={style.content}>
          <h1>多场景下国际大宗商品数字人民币全天候</h1>
          <h1>同步交付创新服务虚拟仿真实验</h1>
          <p></p>
          <p>“一带一路”背景下国际化应用型人才培养的模式，重庆市高等教育学会高等教育科学研究项目</p>
          <p style={{ marginTop: "-15px" }}>
            “以本为本”背景下应用型专业国际化人才培养的模式，重庆市高等教育教学改革研究重点项目
          </p>
          <div></div>
          <div></div>
          <div>
            <span
              className={style.login}
              onClick={() => history.push("/experimentalEnvironment/steps1")}
            >
              开始实验
            </span>
          </div>
          {/* <br />
          <div>
            <Space size="large">
              <a href="http://edu2.fquantplus.com/course/119" target="_blank">
                <Button type="primary">学习中心</Button>
              </a>
              <a href="http://116.204.67.82:5174/" target="_blank">
                <Button type="primary">数据中心</Button>
              </a>
              <Button type="primary" onClick={() => btnRef.current.click()}>
                数据获取
              </Button>
              <form
                action="http://116.204.67.82:8000//hub/login?next=/hub/"
                method="post"
                target="_blank"
                style={{ display: "none" }}
              >
                <input type="text" name="username" value={"12344321"} />
                <button type="submit" ref={btnRef}></button>
              </form>
            </Space>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ExperimentalEnvironment;
