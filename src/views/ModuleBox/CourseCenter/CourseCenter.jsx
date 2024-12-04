import React from "react";
import { useHistory } from "react-router-dom";
import { HeartOutlined, ReadOutlined } from "@ant-design/icons";
import { Space, message } from "antd";
import style from "./CourseCenter.module.scss";
import courseList from "./courseList";

function CourseCenter() {
  const history = useHistory();

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 91) + 10;
  };
  return (
    <div>
      <h1 className="title">课程实验中心</h1>
      <div className={style.list}>
        {courseList.map((item) => {
          return (
            <div
              className={style.item}
              key={item.key}
              onClick={() =>
                item.url === "1"
                  ? message.warning("该课程正在建设！")
                  : history.push({
                      pathname: "/courseCenter/courseItem/" + encodeURIComponent(item.url),
                      //encodeURIComponent对带有//格式的参数转码避免浏览器url解析问题
                    })
              }
            >
              <div className={style.image}>
                <img src={item.img} alt="" />
              </div>
              <div className={style.itemBody}>
                <p>{item.title}</p>
                <div className={style.itemFoot}>
                  <div className={style.itemFootLeft}>
                    <Space size="large">
                      <div>
                        <Space>
                          <HeartOutlined />
                          <span>{generateRandomNumber()}</span>
                        </Space>
                      </div>
                      <div>
                        <Space>
                          <ReadOutlined />
                          <span>{generateRandomNumber()}</span>
                        </Space>
                      </div>
                    </Space>
                  </div>
                  <div className={style.itemFootRig}>章节：{item.chapter}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={style.itemPlaceholder}></div>
        <div className={style.itemPlaceholder}></div>
      </div>
    </div>
  );
}

export default CourseCenter;
