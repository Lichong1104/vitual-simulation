import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { registerApi } from "../../api/httpApi";
import { message } from "antd";
import { setToken } from "../../utils/handleToken";
import style from "../Login/Login.module.scss";
import NProgress from "nprogress";

function Registered() {
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    message.success("请输入邮箱和密码注册！");
  }, []);

  //带进度跳转
  const Jump = (url) => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
      history.push(url);
    }, 1000);
  };

  const register = () => {
    if ((username.current.value, password.current.value)) {
      NProgress.start();
      registerApi(username.current.value, password.current.value).then((res) => {
        NProgress.done();
        if (res.data[0]) {
          message.success("注册成功！即将返回登录页");
          history.push("/login");
        } else {
          message.error("请您规范输入邮箱和密码");
        }
      });
    } else {
      message.warning("请输入邮箱或密码！");
    }
  };
  return (
    <div className={style.loginBox}>
      <div className={style.lef}>
        <h1 className={style.title}>四川外国语大学</h1>
        <div className={style.form}>
          <p>邮箱</p>
          <input className={style.input} type="text" ref={username} />
          <p>密 码</p>
          <input
            className={style.input}
            type="password"
            ref={password}
            onKeyUp={({ keyCode }) => (keyCode === 13 ? register() : undefined)}
          />
          <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => Jump("/login")}
          >
            已有账号？点击登录
          </p>
          <div className={style.btnBox}>
            <div className={style.btn} onClick={register}>
              注册
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registered;
