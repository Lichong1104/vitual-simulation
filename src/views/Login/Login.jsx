import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loginApi } from "../../api/httpApi";
import { message } from "antd";
import { setToken } from "../../utils/handleToken";
import style from "./Login.module.scss";
import NProgress from "nprogress";

function Login() {
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    message.success("请输入用户名和密码登录！");
  }, []);

  const login = () => {
    if ((username.current.value, password.current.value)) {
      NProgress.start();
      loginApi(username.current.value, password.current.value).then((res) => {
        NProgress.done();
        if (res.data[0]) {
          message.success("登录成功！");
          setToken(res.data[0].edu_user.token);
          Jump("/");
        } else {
          message.error("用户名或密码输入错误！");
        }
      });
      // setTimeout(() => {
      //   if (username.current.value === "12344321@qq.com" && password.current.value === "123456") {
      //     message.success("登录成功！");
      //     setToken("token");
      //     Jump("/");
      //   } else {
      //     message.error("用户名或密码输入错误！");
      //   }
      //   NProgress.done();
      // }, 1500);
    } else {
      message.warning("请输入用户名或密码！");
    }
  };

  //带进度跳转
  const Jump = (url) => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
      history.push(url);
    }, 1000);
  };

  return (
    <div className={style.loginBox}>
      <div className={style.lef}>
        <h1 className={style.title}>四川外国语大学</h1>
        <div className={style.form}>
          <p>用户名</p>
          <input className={style.input} type="text" ref={username} />
          <p>密 码</p>
          <input
            className={style.input}
            type="password"
            ref={password}
            onKeyUp={({ keyCode }) => (keyCode === 13 ? login() : undefined)}
          />
          <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => Jump("/registered")}
          >
            没有账号？点击注册
          </p>
          <div className={style.btnBox}>
            <div className={style.btn} onClick={login}>
              登录
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
