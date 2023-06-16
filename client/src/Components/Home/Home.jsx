import React, { useEffect } from "react";
import plane from "../../images/plane.png";
import vid from "../../videos/nature.mp4";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css"



const Home = ()=>{
useEffect(()=>{
Aos.init({duration: 2000});
},[])

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration="2500">Create Ever-lasting Memories With us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration="2500" className="homeImages flex">
        <div className="videoDiv">
          <video src={vid} autoPlay muted loop className="video"></video>
        </div>

        <img src={plane} className="plane" />
      </div>
    </div>
  );
};

export default Home;
