import React from "react";
import { Layout, theme } from "antd";
import ModuleRouter from "../../router/ModuleRouter";

const { Content } = Layout;

function BodyContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      style={{
        background: colorBgContainer,
      }}
    >
      <div className="bodyContent">
        {/* 主体内容路由 */}
        <ModuleRouter />
      </div>
    </Content>
  );
}

export default BodyContent;
