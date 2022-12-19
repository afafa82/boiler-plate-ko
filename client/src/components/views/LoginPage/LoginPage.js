import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom"; // react-router-dom v6부터 useHistory에서 useNavigate로 바뀜
import Auth from "../../../hoc/auth";
function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 이걸 하는 이유는 submit을 했을 때 refresh 가 되어 우리가 쓴 코드를 실행할 수 없게 만든다.
    // 그래서 그걸 막기위해 우린 preventDefault()를 이용한다.

    let body = {
      email: Email,
      password: Password,
    };
    //loginUser Action
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" style={{border: "1px solid"}} value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" style={{border: "1px solid"}}value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Auth(LoginPage, false);
