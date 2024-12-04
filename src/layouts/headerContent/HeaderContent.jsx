import React from "react";
import { Dropdown, Breadcrumb, Layout } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { removeToken } from "../../utils/handleToken";
import { getSubstringAfterSlash } from "../../utils/tools";
import NProgress from "nprogress";
import { crumbsList } from "./crumbsList";

const { Header } = Layout;

function HeaderContent() {
  const history = useHistory();
  const location = useLocation();

  function pushAndShift(value) {
    let arr;
    if (!sessionStorage.getItem("router")) {
      arr = [];
    } else {
      arr = JSON.parse(sessionStorage.getItem("router"));
    }

    const index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    if (arr.length === 4) {
      arr.shift();
    }
    arr.push(value);
    sessionStorage.setItem("router", JSON.stringify(arr));
  }

  pushAndShift(getSubstringAfterSlash(location.pathname));

  const items = JSON.parse(sessionStorage.getItem("router")).map((item) => {
    return {
      title: item,
    };
  });
  const newItems = items.map((item) => {
    return crumbsList.find((v) => v.name === item.title);
  });
  const logout = () => {
    removeToken();
    Jump("/login");
  };
  //带进度跳转
  const Jump = (url) => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
      history.push(url);
    }, 1000);
  };

  const userInfoList = {
    items: [
      {
        key: "1",
        danger: true,
        label: <span onClick={logout}>退出登录</span>,
      },
    ],
  };

  return (
    <Header
      style={{
        backgroundColor: "white",
        padding: "0 36px",
        borderBottom: "1px solid rgba(128, 128, 128, 0.217)",
        height: "50px",
      }}
    >
      <div className="headerBox">
        <Breadcrumb items={newItems} />

        <Dropdown menu={userInfoList} placement="bottom">
          <div className="userInfo">
            <img
              src="https://tse2-mm.cn.bing.net/th/id/OIP-C.RROpnco7brbsZotvKAYkZwAAAA?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
            />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderContent;
