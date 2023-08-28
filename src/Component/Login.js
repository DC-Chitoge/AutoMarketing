import React, { useState } from "react";
import "./Login.scss";
import "./Nav/Page/Campain";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCheck } = props;
  // const Navigate = useNavigate();
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12  text-login">Reborn</div>
          <div className="col-12 form-group login-input">
            <label>Username :</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-12 form-group login-input">
            <label>Password :</label>
            <input
              type="password"
              className="form-control"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button
              className="btn-login"
              onClick={() => {
                setCheck(true);
              }}
            >
              Login
            </button>
          </div>
          <div className="col-12">
            <span className="forgot-password">Forgot your password</span>
          </div>
          <div className="col-12 text-center mt-3">
            <span className="text-other">or Login with</span>
          </div>
          <div className="col-12 social-login">
            <i class="fa-brands fa-facebook facebook"></i>
            <i class="fa-brands fa-google google"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
