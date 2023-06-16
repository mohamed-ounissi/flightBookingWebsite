import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

import "./card.css";
import { Link } from "react-router-dom";
import axios from "../../axios";

const Wrapper = styled.div`
  display: flex;

  justify-content: space-around;
  margin-top: 100px;
  margin-left: 14%;
  flex-wrap: wrap;
  width: 72%;

  ${mobile({
    alignContent: "stretch",
    height: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    width: "100%",
  })};
`;

const Carte = styled.div`
  width: 280px;
  height: 360px;
  padding: 2rem 1rem;
  position: relative;
  display: flex;

  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;

  ${mobile({
    flexDirection: "column",
    transform: "translateY(100px)",
    paddingBottom: "40px ",
  })}

  :hover {
    transform: translateY(20px);
  }
  ${mobile({ width: "70%", height: "150%" })}

  :before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      to bottom,
      rgb(28, 34, 55, 1),
      rgb(28, 34, 55, 0.1)
    );
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
  }
  :hover:before {
    opacity: 1;
  }
  :hover div {
    opacity: 1;
    transform: translateY(0px);
  }

  ${mobile({ display: "block", margin: "auto" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Info = styled.div`
  position: relative;
  z-index: 3;

  opacity: 0;
  transform: translate(30px);
  transition: 0.5s all;
  color: #${(props) => props.fontcolor};

  ${mobile({ marginTop: "90%" })}
`;

const Title = styled.h1`
  margin: 0px;
`;

const Desc = styled.p`
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 20px;
  height: 65%;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  border: none;
  color: rgb(28, 34, 55);
  background-color: #fdbe34;

  ${mobile({
    borderRadius: "0px",
  })}

  :hover {
    color: #fdbe34;
    background-color: rgb(28, 34, 55);
  }
`;

const Card = ({allDetinationsInfos}) => {

  function goup() {
    var scrollStep = -window.scrollY / (400 / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  }



  return allDetinationsInfos?(
    <Wrapper>
      {allDetinationsInfos.map((item) => (
        <Link  to={`/explore/${item.name}`} onClick={goup}>
          <Carte className="test1" key={item._id}>
            <Image src={item.mainImage} />
            <Info fontcolor="ffffff">
              <Title style={{ fontSize: "33px", fontWeight: "bold" }}>
                {item.name}
              </Title>

              <Desc>{item.mainDesc}</Desc>
            </Info>
          </Carte>
        </Link>
      ))}
    </Wrapper>
  ):
  (<div>loading</div>);
};

export default Card;
