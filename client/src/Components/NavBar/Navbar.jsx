import React, { useState } from "react";
import { SiConsul } from "react-icons/si";

import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

import { CgMenuGridO } from "react-icons/cg";
import logo from "../../images/flight.png";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");

  const showNavbar = () => {
    setActive("navBarMenu showNavBar");
    if (active == "navBarMenu showNavBar") {
      setActive("navBarMenu ");
    }
  };

  const RemoveNavbar = () => {
    setActive("navBarMenu ");
    var scrollStep = -window.scrollY / (400 / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  };

  const [noBg, addBg] = useState("navBarTwo");

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);

  function goup() {
    setActive("navBarMenu ");
    window.scrollTo(0, 850);
  }

  function goup2() {
    setActive("navBarMenu ");
    window.scrollTo(0, 125);
  }

  function goup3() {
    var scrollStep = -window.scrollY / (400 / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  }

  return (
    <div className="navBar flex ">
      <div className="navBarOne flex">
        <SiConsul className="icon"></SiConsul>
        <div className="none flex">
 
        </div>

        <div className="atb flex">
          <Link to="/Signup">
            <span>Register</span>
          </Link>
          <Link to="/Login">
            <span>LogIn</span>
          </Link>
        </div>
      </div>
      <div className={noBg + " flex"}>
        <Link to="/" onClick={goup3}>
          <div className="logoDiv">
            <img src={logo} className="Logo" />
          </div>
        </Link>

        <div className={active}>
          <ul className="menu flex">
            <Link to="/" style={{ color: "var(--textColor)" }}>
              <li className="listItem" onClick={RemoveNavbar}>
                Home
              </li>
            </Link>

            <Link to="/contact" style={{ color: "var(--textColor)" }}>
              <li className="listItem" onClick={goup2}>
                About
              </li>
            </Link>
            <Link to="/Places" style={{ color: "var(--textColor)" }}>
              <li className="listItem" onClick={RemoveNavbar}>
                Destinations
              </li>
            </Link>
            <Link to="/contact" style={{ color: "var(--textColor)" }}>
              <li className="listItem" onClick={goup}>
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="toggleIcon" onClick={showNavbar}>
          <CgMenuGridO className="icon"></CgMenuGridO>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
