import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  FileTextOutlined,
  SwapOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<TeamOutlined />}>
            <Link to="/" />
            Customers Map
          </Menu.Item>
          <Menu.Item key="21" icon={<FileTextOutlined />}>
            <Link to="/leads-map" />
            Leads Map
          </Menu.Item>
          <Menu.Item key="3" icon={<SwapOutlined />}>
            <Link to="/compare" />
            Compare
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
