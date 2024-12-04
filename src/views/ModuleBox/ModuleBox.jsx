import React from "react";
import { Layout } from "antd";
import "../../layouts/scss/Layout.scss";

import SideBar from "../../layouts/sideBar/SideBar";
import HeaderContent from "../../layouts/headerContent/HeaderContent";
import BodyContent from "../../layouts/bodyContent/BodyContent";

function ModuleBox() {
  return (
    <Layout>
      {/* <SideBar /> */}
      <Layout>
        <HeaderContent />
        <BodyContent />
      </Layout>
    </Layout>
  );
}

export default ModuleBox;
