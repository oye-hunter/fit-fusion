import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="container-box">
        <form>
          <h1>Login</h1>
          <label>Email: </label>
          <input type="email" name="email" /><br/>
          <label>Password: </label>
          <input type="password" name="password"/><br/>
        </form>
      </div>
    </div>
  );
};

export default Login;
