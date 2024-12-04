import React, { useState, useEffect } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import { Menu, Layout } from "antd";
import { sideBarList } from "./sideBarData";
import { extractValueFromPath } from "../../utils/tools";
import logo from "../../image/微信图片_20230606161559.png";

const { Sider } = Layout;
const rootSubmenuKeys = ["/dataCenter"];

function SideBar() {
  const history = useHistory();
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  //手风琴
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const firstSegment = extractValueFromPath(location.pathname);
    const shouldOpenKey = rootSubmenuKeys.includes(firstSegment) ? [firstSegment] : [];
    setOpenKeys(shouldOpenKey);
  }, [location.pathname]);

  return (
    <Sider
      className="sideBarBox"
      width={190}
      theme="dark"
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="50px"
      onBreakpoint={(broken) => {
        setCollapsed(broken ? true : false);
      }}
    >
      <div className="logo">
        {collapsed ? (
          ""
        ) : (
          // <h1 style={{ fontSize: "22px", whiteSpace: "nowrap" }}>运输管理实验平台</h1>
          <img src={logo} alt="" />
        )}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={sideBarList}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={(v) => {
          history.push(v.key);
        }}
      />
      <div className="collapsed">
        <MenuFoldOutlined style={{ cursor: "pointer" }} onClick={() => setCollapsed(!collapsed)} />
      </div>
    </Sider>
  );
}

export default SideBar;
