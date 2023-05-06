import React, { useState } from "react";
import "./Login.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(`Username: ${username} Password: ${password}`);
    // // add code to send the login data to the server here
    // let fData = new FormData()
    // fData.append('user', username)
    // fData.append('pass', password)
    // axios ({
    //   method: 'post',
    //   url: '',  // replace '' with server url later
    //   data: fData
    // })
    // .then(response => console.log(response))
    // .catch(error => alert(error));
  };

  return (
    <div className="login">
      <div className="login-login">
        <div className="login-overlap-group">
          <div className="login-overlap">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="description">pet adoption matching site</div>
            <div className="login-form">
              <form
                action="http://localhost:8000/login.php"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
              <Link to="/register" className="link">
                Create an Account
              </Link>
            </div>
          </div>
          <h1 className="login-h-1">Find your cuddle buddy today</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
