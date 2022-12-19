/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import  { DashboardOutlined, FileJpgOutlined, LoginOutlined, LogoutOutlined, SignalFilled } from "@ant-design/icons";

import axios from 'axios';
import { USER_SERVER } from '../../../../Config';
import Auth from '../../../../hoc/auth'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function RightMenu(props) {
  const user = useSelector(state => state.user)
    const navigate = useNavigate()
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} style={{display:"flex"}}>
        <Menu.Item key="mail" >
          
        <LoginOutlined/> <a href="/login" >Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
         <FileJpgOutlined/> <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout">
        <LogoutOutlined/><a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Auth(RightMenu, false);