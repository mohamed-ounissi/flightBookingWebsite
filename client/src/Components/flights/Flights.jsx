import "./Flights.css";
import Navbar from "../NavBar/Navbar";

import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../axios";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Flights = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [destinationInfos, setdestinationInfos] = useState();
  const [cheapestFlight, setCheapestFlight] = useState();
  const [destination, setDestination] = useState();
  const [type, setType] = useState();
  const [date, setDate] = useState();

  const options = 1;

  const navigate = useNavigate();

  useEffect(() => {
    getdestinationInfos();
  }, [true]);

  let nameOfCountry = location.pathname
    .toString()
    .substr(9, location.pathname.length);

  const getdestinationInfos = async () => {
    try {
      const responce = await axios.get(`/destinations/${nameOfCountry}`);
      setdestinationInfos(responce.data);
      setDestination(responce.data.country);
      console.log(destination);
      const responce2 = await axios.get(`/flights/${responce.data.country}`);
      setCheapestFlight(responce2.data);
      
      const currentDate = new Date(responce2.data.flight.date);

      const previousDate = new Date(
        currentDate.getTime() - 24 * 60 * 60 * 1000
      );

      setDate([
        {
          startDate: previousDate,
          endDate: new Date(responce2.data.flight.date),
          key: "selection",
        },
      ]);

      setType(responce2.data.flight.class);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    navigate("/Flights", {
      state: { destination, date, options, type },
    });
  };

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return destinationInfos && cheapestFlight && destination && date && type ? (
    <div>
      <Navbar />
      {console.log(destination)}
      {console.log(date)}
      {console.log(type)}
      <div className="flightsContainer">
        {open && (
          <div
            className="slider"
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              zIndex: "99999999",
            }}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={destinationInfos.images[slideNumber]}
                alt=""
                className="sliderImg"
                style={{ userSelect: "none" }}
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="flightsWrapper">
          <h1 className="flightsTitle">{destinationInfos.name}</h1>
          <div className="flightsAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{destinationInfos.country}</span>
          </div>
          <div className="flightsContaineimganddetails">
            <div className="flightsImages">
              {destinationInfos.images.map((photo, i) => (
                <div className="flightsImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="flightsImg"
                  />
                </div>
              ))}
            </div>
            <div className="flightsDetailsPrice">
              <h1>TUN-{destinationInfos.abr}</h1>

              <p>Cheapest</p>
              <h2>
                <b>From {cheapestFlight.flight.pricePerPerson} TND</b>
              </h2>
              <button onClick={handleClick}>Check flight prices</button>
            </div>
          </div>
          <div className="flightsDetails">
            <div className="flightsDetailsTexts">
              <h1 className="flightsTitle">
                You're Going to Love {destinationInfos.name}
              </h1>
              <p className="flightsDesc">{destinationInfos.fullDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default Flights;
