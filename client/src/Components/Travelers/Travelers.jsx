import React, { useEffect } from "react";
import "./Travelers.css";
import paris from "../../images/places/paris.jpg";
import NewYork from "../../images/places/newyork.jpg";
import Greece from "../../images/places/greece.jpg";
import London from "../../images/places/london.jpg";
import traveler1 from "../../images/erojla/lo9.jpg";
import traveler2 from "../../images/erojla/moi.jpg";
import traveler3 from "../../images/erojla/saw.jpg";
import traveler4 from "../../images/erojla/maneni.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "log",
    socialLink: "@log",
  },
  {
    id: 2,
    destinationImage: NewYork,
    travelerImage: traveler2,
    travelerName: "hama",
    socialLink: "@hama",
  },
  {
    id: 3,
    destinationImage: Greece,
    travelerImage: traveler3,
    travelerName: "souuu",
    socialLink: "@sou",
  },
  {
    id: 4,
    destinationImage: London,
    travelerImage: traveler4,
    travelerName: "maneni",
    socialLink: "@maneni",
  },
];

export default function Travalers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month
        </h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                //{/*single passanger card*/}
                <div
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  key={id}
                  className="singleTraveler"
                >
                  <img src={destinationImage} className="DistinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
