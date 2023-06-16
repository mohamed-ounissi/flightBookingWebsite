import "./Login.css";
import React, { useState, useRef } from "react";
import { TextField, IconButton, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
import world from "../../images/world.svg";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emptyErrorEmail, setEmptyErrorEmail] = useState(false);
  const [emptyErrorPass, setEmptyErrorPass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setEmptyErrorEmail(true);
    } else {
      setEmptyErrorEmail(false);
    }

    if (password == "") {
      setEmptyErrorPass(true);
    } else {
      setEmptyErrorPass(false);
    }
  };
  return (
    <div className="logInContainer">
      <div className="logInLeftContainer">
        <p className="logInLeftTitle" style={{ marginTop: "-100px" }}>
          <p className="logInLeftColoredTitle" style={{ marginBottom: "25px" }}>
            Don't make me walk
          </p>
          <p className="logInLeftColoredTitle" style={{ marginBottom: "25px" }}>
            when I want to
            <span style={{ color: "#084593", marginLeft: "5px" }}>FLY</span>
          </p>
        </p>
        <img
          src={world}
          alt=""
          className="logInImage"
          style={{ marginTop: "100px" }}
        />
      </div>
      <div className="logInFormContainer">
        <div className="logInFormTitleContainer">
          <h3 className="logInTitle" style={{ marginBottom: "25px" }}>
            Log In
          </h3>
          <p className="logInDescription">
            Please type your email address and password to access your
            account.
          </p>
        </div>
        <form className="logInForm" onSubmit={handleSubmit}>
          <TextField
            className="logInInput"
            label="Email "
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emptyErrorEmail ? (
            <label className="error">Email is required</label>
          ) : (
            <span></span>
          )}
          <p className="loginFormInputError"></p>
          <TextField
            className="logInInput"
            label="Password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          {emptyErrorPass ? (
            <label className="error">Password is required</label>
          ) : (
            <span></span>
          )}

          <p className="loginFormInputError"></p>

          <input type="submit" value="Log In" className="logInButton" />

          <p className="logInDescription" style={{ marginTop: "25px" }}>
            If you don't have an account yet , you can Sign Up from{" "}
            <span>
              <Link
                to="/Signup"
                style={{
                  textDecoration: "none",
                  color: "rgba(8, 69, 147, 0.9)",
                }}
              >
                here{" "}
              </Link>
            </span>
          </p>
        </form>
      </div>
      <div className="logInRegisterContainer">
        <Link
          exact="true"
          to="/"
          className="logInHomeIconLink"
          style={{ marginRight: "16px", marginTop: "0" }}
        >
          <HomeRounded className="logInHomeIcon" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
