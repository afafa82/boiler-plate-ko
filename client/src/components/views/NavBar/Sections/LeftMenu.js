import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, HomeFilled } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const navigation = useNavigate();
  return (
    // <Menu
    //   mode={props.mode}
    //   items={[
    //     { label: "Home", key: "home", icon: <HomeFilled /> },
    //     { label: "Favorite", key: "favorite", icon: <DashboardOutlined />},
    //   ]}
    // ></Menu>
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
      <HomeFilled /><a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="favorite">
      <DashboardOutlined /><a href="/favorite">Favorite</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
