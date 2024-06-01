import React from "react";
import { useDispatch } from "react-redux";

import {Layout, Avatar, Menu, Dropdown, Divider} from "antd";

import { FileTextOutlined, UserOutlined , LoginOutlined} from "@ant-design/icons";
import { logout } from "@/redux/auth/actions";
import uniqueId from "@/utils/uinqueId";
import {Link} from "react-router-dom";
const { Header } = Layout;

export default function HeaderContent() {
  const dispatch = useDispatch();

  const menu = (
    <Menu>
        <Menu.Item key={`${uniqueId()}`} icon={<UserOutlined />}>
            <Link to="/customer">Add Customer</Link>
        </Menu.Item>
        <Menu.Item key={`${uniqueId()}`} icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Add Sales Lead
        </Menu.Item>
        <Divider style={{margin:'5px'}} />
        <Menu.Item icon={<LoginOutlined />} key={`${uniqueId()}`} onClick={() => dispatch(logout())}>
            logout
        </Menu.Item>
    </Menu>
  );
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, background: "none" }}
    >
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
}
