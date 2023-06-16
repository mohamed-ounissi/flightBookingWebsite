import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider/Slider";
import Navbar from "../Components/NavBar/Navbarfordestination";
import Footer from "../Components/Footer/Footer";
import Card from "../Components/Card/Card";
import axios from "../axios";
import Loading from "../Components/Loading/Loading";
const Places = () => {
  const [allDetinationsInfos, setAllDetinationsInfos] = useState(null);

  useEffect(() => {
    getAllDetinationsInfos();
  }, [true]);

  const getAllDetinationsInfos = async () => {
    try {
      const responce = await axios.get(`/destinations/`);
      setAllDetinationsInfos(responce.data);

      console.log(responce.data);
    } catch (e) {
      console.log(e);
    }
  };
  return allDetinationsInfos?(
    <div>
      <Navbar />
      <div class="two alt-two" style={{ marginTop: "14.5em" }}>
        <h1>
          OFFERS<br></br>
          <span>You Don't Have To Be Rich To Travel Well</span>
        </h1>
      </div>
      <Slider />
      <div class="two alt-two" >
        <h1>
          DESTINATIONS<br></br>
          <span>The World Is Yours To Explore</span>
        </h1>
      </div>
      <Card allDetinationsInfos={allDetinationsInfos} />
      <Footer />
    </div>
  ):(<Loading></Loading>);
};

export default Places;
