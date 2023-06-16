import "./Signup.css";
import React, { useState, useRef } from "react";
import { TextField, IconButton, Checkbox } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
import traveler from "../../images/traveler.svg";
import { useNavigate } from "react-router-dom";
function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [emptyErrorName, setEmptyErrorName] = useState();
  const [emptyErrorEmail, setEmptyErrorEmail] = useState();
  const [emptyErrorPass, setEmptyErrorPass] = useState();

  const [InvalidErrorEmail, setInvalidErrorEmail] = useState();
  const [InvalidErrorPass, setInvalidErrorPass] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleInputFocus = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    let emailFormat = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    let passFormat = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,16})/;
    e.preventDefault();

    if (name == "") {
      setEmptyErrorName(true);
    } else {
      setEmptyErrorName(false);
    }

    if (email == "") {
      setEmptyErrorEmail(true);
    } else if (!email.match(emailFormat)) {
      setInvalidErrorEmail(true);
    } else {
      setEmptyErrorEmail(false);
      setInvalidErrorEmail(false);
    }
    if (password == "") {
      setEmptyErrorPass(true);
      console.log(emptyErrorPass);
    } else if (!password.match(passFormat)) {
      setInvalidErrorPass(true);
    } else {
      setEmptyErrorPass(false);
      setInvalidErrorPass(false);
      navigate("/Login");
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerLeftContainer">
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
          src={traveler}
          alt=""
          className="registerImage"
          style={{ marginTop: "100px" }}
        />
      </div>

      <div className="registerFormContainer">
        <div className="registerFormTitleContainer">
          <h3 className="registerTitle" style={{ marginBottom: "25px" }}>
            Register
          </h3>
          <p className="registerDescription">
            Track prices, organise travel plans and access member-only deals
            with your account.
          </p>
        </div>
        <form className="registerForm" onSubmit={handleSubmit}>
          <TextField
            className="registerInput"
            label="Full Name"
            placeholder="full name"
            type="text"
            margin="normal"
            onChange={(e) => setname(e.target.value)}
          />
          {emptyErrorName ? (
            <label className="error">Name is required</label>
          ) : (
            <span></span>
          )}

          <TextField
            className="registerInput"
            label="Email"
            placeholder="name@email.com"
            type="text"
            margin="normal"
            onChange={(e) => setemail(e.target.value)}
          />
          {emptyErrorEmail && !InvalidErrorEmail ? (
            <label className="error">Email is required</label>
          ) : (
            <span></span>
          )}
          {InvalidErrorEmail ? (
            <label className="error">Invalid Email</label>
          ) : (
            <span></span>
          )}
          <TextField
            className="registerInput"
            placeholder="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setpassword(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handlePopupClose}
          />
          {showPopup && (
            <div className="popup">
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                Password must be 8-16 charactere long, and contain at least one
                uppercase , one lowercase and one special character
                (!,@,#,$,%,^){" "}
              </p>
            </div>
          )}
          {emptyErrorPass && !InvalidErrorPass ? (
            <label className="error">Password is required</label>
          ) : (
            <span></span>
          )}
          {InvalidErrorPass ? (
            <label className="error">Invalid Password</label>
          ) : (
            <span></span>
          )}

          <input type="submit" value="Register" className="registerButton" />

          <p className="logInDescription" style={{ marginTop: "25px" }}>
            If you already have an account , you can LogIn from{" "}
            <span>
              <Link
                to="/Login"
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

export default Register;
