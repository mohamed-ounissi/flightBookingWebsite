import React, { useEffect } from "react";
import planeinside from "../../images/planeinside.png";
import "./Lounge.css";

import Aos from "aos";
import "aos/dist/aos.css"


const Lounge = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
    },[])
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos='fade-down' data-aos-duration="2500" className="imgDiv">
          <img src={planeinside} />
        </div>
        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration="2500">Unccompained Minor Lounge</h2>

          <div  className="grids grid">
            <div data-aos='fade-down' data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Help through the airpot</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Help through the airpot</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
