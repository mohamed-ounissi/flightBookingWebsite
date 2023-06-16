import React, { useState } from "react";
import "./ContactForm.css";
import { Place, Phone, Email } from "@material-ui/icons";
import styled from "styled-components";

import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import About from "../about/About";

const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  border: none;
  color: white;
  background: linear-gradient(
    90deg,
    rgb(28, 34, 55) 0%,
    rgb(30, 41, 78) 50%,
    rgb(28, 34, 55) 100%
  );
  margin-top: 20px;

  :hover {
    color: #1c2237;
    background: linear-gradient(
      90deg,
      rgb(253, 190, 52) 0%,
      rgb(247, 220, 124) 50%,
      rgb(253, 190, 52) 100%
    );
  }
`;

const MyPlace = styled(Place)({
  color: "#1C2237",
});

const ContactForm = () => {
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [msg, setmsg] = useState();
  //   const history= useHistory()

  //   const handlesubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const res = await axios.post("/Contact", {
  //         name,
  //         email,
  //         msg,
  //       });

  //       console.log(res);
  //       if (res){
  //         history.go(0)
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  return (
    <>
      <Navbar></Navbar>
      <About />

      <div className="container-contact" style={{ marginTop: "-300px" }}>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <Place style={{ color: "#000000" }}></Place>
              <div className="topic">Adresse</div>
              <div className="text-one">33 Rue Ahmed Errai</div>
              <div className="text-two">- Cite El Bassatine, Ben Arous</div>
            </div>
            <div className="phone details">
              <Phone style={{ color: "#000000" }}></Phone>
              <div className="topic">phone number</div>
              <div className="text-one"> (+216) 71 874 947 </div>
              <div className="text-two">(+216) 70 24 90 00</div>
            </div>
            <div className="email details">
              <Email style={{ color: "#000000" }}></Email>
              <div className="topic">Email</div>
              <div className="text-one">contact@flights.tn</div>
              <div className="text-two"></div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text" style={{ color: "#000000" }}>
              Send us a message
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero et
              voluptas non nemo fugit alias suscipit explicabo
            </p>
            <form action="" onSubmit="">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  //   onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  //   onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-box message-box">
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  //   onChange={(e) => setmsg(e.target.value)}
                  required
                />
              </div>
              <div className="button-contact">
                <button className="main-blue-button" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactForm;
