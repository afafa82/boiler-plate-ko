/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import {
  FileJpgOutlined,
  LoginOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { USER_SERVER } from "../../../../Config";
import Auth from "../../../../hoc/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RightMenu(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu
        mode={props.mode}
        style={{ display: "flex" }}
        onClick={({ key }) => {
          if (key !== "/logout") {
            //Todo, sign out feature here
            navigate(key);
          }
        }}
        items={[
          { label: "Signin", key: "/login", icon: <LoginOutlined /> },
          { label: "Signup", key: "/register", icon: <FileJpgOutlined /> },
        ]}
      ></Menu>
    );
  } else {
    return (
      <Menu
        onClick={({ key }) => {
          if (key === "/logout") {
            //Todo, sign out feature here

            logoutHandler();
          }
        }}
        mode={props.mode}
        items={[
          { label: "Logout", key: "/logout", icon: <PoweroffOutlined /> },
        ]}
      ></Menu>
    );
  }
}

export default Auth(RightMenu, false);
