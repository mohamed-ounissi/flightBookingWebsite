import React, { useEffect } from "react";
import logo from "../../images/flight.png";
import { TiSocialFacebook } from "react-icons/ti";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import "./Footer.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2500" className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <a
              href="https://www.facebook.com"
              target="_blank"
              style={{ color: "#4267B2" }}
            >
              <TiSocialFacebook></TiSocialFacebook>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              style={{ color: "#8a3ab9" }}
            >
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              style={{ color: "#1DA1F2" }}
            >
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              style={{ color: "#FF0000" }}
            >
              <AiFillYoutube></AiFillYoutube>
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Informations</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>

          <li>
            <a href="">Manage your bookings</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How To</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>

          <li>
            <a href="">Our Communities</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">More</span>
          <li>
            <a href="">Chauffeur</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>

          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>
      <div className="copyRightDiv flex">
        <p>
          Developed by{" "}
          <a
            href="https://www.facebook.com/mohamedounissi123/ "
            target="_blank"
          >
            {" "}
            Mohamed Ounissi &nbsp;
          </a>
          &
          <a href="https://www.facebook.com/yassine.clubisiti " target="_blank">
            &nbsp; Yassine logtari
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
