import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  //option 은 null, true, false 로 한다
  //null => 아무나 출입이 가능한 페이지
  //true => ㅇ=로그인한 유저만 출입이 가능한 페이지
  //false => 로그인한 유저는 출입이 불가능한 페이지

  //admin이 아니면 null 이고 아무것도 입력 안해도 자동으로 null로 인식이 된다.

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      //dispatch로 action을 날려주자!!
      dispatch(auth()).then((response) => {
        console.log(response);

        //로그인하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인하지 않은 상황

          //1. amdin이 아님
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          }
          //2. 로그인한 유저가 출입 부락한 페이지(register, loginpage...)
          else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);
    // 반드시 return 옆에 써줘야한다 return 밑으로해서 쓰게 된다면 반드시 ( ) 를 넣어서 써줘야한다는 걸 잊지 말자!! 에러난다 
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
