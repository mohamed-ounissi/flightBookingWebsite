import React, { useState } from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlane } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Components/Loading/Loading";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { allCountries } from "../Components/Search/allCounties";
import { allCountriesCodes } from "./allCountriesCodes";

import { PayPalButton } from "react-paypal-button-v2";

import { useNavigate } from "react-router-dom";

const BookFlight = () => {
  const location = useLocation();
  const [item, setItem] = useState(location.state.item);
  const [dest, setDest] = useState(location.state.dest);
  const [persons, setPersons] = useState(location.state.persons);
  const [isInputLabelFocused, setIsInputLabelFocused] = useState(false);
  const [email, setEmail] = useState();
  const [countryCode, setCoutryCode] = useState();
  const [adress, setAddress] = useState();
  const [confirmAdress, setConfirmEmail] = useState();
  const [city, setCity] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [postCode, setPostcode] = useState();
  const [country, setCountry] = useState();

  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [error3, setError3] = useState();
  const [error4, setError4] = useState();
  const [error5, setError5] = useState();
  const [error6, setError6] = useState();
  const [error7, setError7] = useState();
  const [error8, setError8] = useState();

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const numericPattern = /^\d+$/;

  let filename = "";
  let airlineName = "";
  const navigate = useNavigate();
  let originalDate = item.date;
  const dateObject = new Date(originalDate);
  let pricePerPers;
  const options = { weekday: "short", day: "2-digit", month: "short" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  filename = item.airlineLogo;
  filename = filename.split("/").pop();
  airlineName = filename.split(".")[0];

  const handlePaymentSuccess = (details, data) => {
    // Payment successful, handle the payment details
    console.log("Payment successful:", details);
  };

  const handlePaymentError = (error) => {
    // Payment error occurred, handle the error
    console.log("Payment error:", error);
  };

  const handlePaymentCancel = (data) => {
    // Payment canceled by the user
    console.log("Payment canceled:", data);
  };

  const handleInputFocus = () => {
    setIsInputLabelFocused(true);
    console.log("fel focus");
  };

  const handleInputBlur = () => {
    setIsInputLabelFocused(false);
    console.log("fel blur");
  };

  const styles = {
    inputLabel: {},
    inputLabelFocused: {
      background: "linear-gradient( #f0f4f4 50%, white 50%)",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  };

  const handleForm = (e) => {
    e.preventDefault();

    setError1(!emailPattern.test(email));

    if (email != confirmAdress || (email == null && confirmAdress == null)) {
      setError2(true);
    } else {
      setError2(false);
    }
    if (countryCode == null) {
      setError3(true);
    } else {
      setError3(false);
    }

    if (phoneNumber == null || !numericPattern.test(phoneNumber)) {
      setError4(true);
    } else {
      setError4(false);
    }
    if (adress == null) {
      setError5(true);
    } else {
      setError5(false);
    }

    if (postCode == null || !numericPattern.test(postCode)) {
      setError6(true);
    } else {
      setError6(false);
    }

    if (city == null) {
      setError7(true);
    } else {
      setError7(false);
    }

    if (country == null) {
      setError8(true);
    } else {
      setError8(false);
    }
    if (
      error1 == false &&
      error2 == false &&
      error3 == false &&
      error4 == false &&
      error5 == false &&
      error6 == false &&
      error7 == false &&
      error8 == false
    ) {
      let number = countryCode + phoneNumber;
      pricePerPers = item.pricePerPerson;
      let flight_ID = item._id;
      navigate("/Payment", {
        state: {
          pricePerPers,
          flight_ID,
          contactEmail: email,
          contactPhone: number,
          contactAdress: adress,
          contactPostcode: postCode,
          contactCity: city,
          contactCountry: country,
        },
      });
    }
  };

  return item ? (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          marginTop: "400px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginRight: "15%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", width: "80%", position: "absolute" }}>
          <div
            className="searchItem"
            style={{
              width: "58%",
              display: "flex",
              flexDirection: "column",
              padding: "25px",
              marginLeft: "25%",
              height: "20%",
            }}
          >
            <div style={{ fontWeight: "600", fontSize: "22px" }}>
              Your trip to {dest}{" "}
              <span
                style={{
                  paddingRight: "3px",
                  paddingLeft: "5px",
                  background: "white",
                  borderRadius: "22px",
                  marginLeft: "3px",
                }}
              >
                <FontAwesomeIcon
                  icon={faPlane}
                  style={{
                    fontSize: "16px",
                    color: "#084593",
                    marginBottom: "1px",
                  }}
                />
              </span>
            </div>

            <div style={{ fontWeight: "500" }}>
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                style={{ color: "#00d76c", marginRight: "8px" }}
              />
              Departure{" "}
              <span style={{ marginLeft: "30px" }}>{airlineName}</span>
              <span style={{ marginLeft: "39%" }}>{formattedDate}</span>
            </div>
            {/* <img src={item.airlineLogo} alt="" className="siImg" /> */}
            <div>
              <div className="siDesc">
                <div className="descInfo" style={{ width: "20%" }}>
                  <span
                    className="siSubtitle"
                    style={{
                      fontSize: "x-large",
                    }}
                  >
                    {item.leaveIn} TN
                  </span>
                  <span className="siSubtitle">{formattedDate} </span>
                </div>

                <div
                  className="descInfo"
                  style={{
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.stops.length == 0 ? (
                    <span className="siSubtitle" style={{ marginTop: "30px" }}>
                      direct
                    </span>
                  ) : (
                    <span className="siSubtitle">
                      {item.stops.length} stops
                    </span>
                  )}
                  <div className="spanAbr">
                    {item.stops.map((x) => {
                      if (x.length != 0) {
                        return <span className="siFeatures">{x} &nbsp;</span>;
                      }
                    })}
                  </div>
                </div>
                <div
                  className="descInfo"
                  style={{ width: "20%", marginLeft: "9%" }}
                >
                  <span
                    className="siSubtitle"
                    style={{
                      fontSize: "x-large",
                    }}
                  >
                    {item.arriveAt} {item.goingTo}
                  </span>
                  <span className="siSubtitle">{formattedDate}</span>
                </div>
                <div className="descInfo" style={{ marginLeft: "11%" }}>
                  <span className="siSubtitle">{item.maxTimeOfFlight}</span>
                  <span className="siFeatures">{item.class}</span>
                </div>
              </div>
              {/* <div className="siDetails">
            <div className="siDetailTexts">
              <span className="siPrice">{item.pricePerPerson} &nbsp;TND</span>
              <span className="siTaxOp"> for persons </span>
            </div>
          </div> */}
            </div>
          </div>
          <div>
            <div
              className="flightsDetailsPrice"
              style={{
                marginLeft: "30px",
                background: "#f0f4f4",
                border: "1px solid lightgray",
                borderBottom: "1px solid #e1f9f5",
              }}
            >
              <h1 style={{ fontSize: "16px" }}>
                <span>Total price</span>
                <span
                  style={{
                    marginLeft: "15px",
                    color: "black",
                    fontSize: "25px",
                  }}
                >
                  {item.pricePerPerson} TND
                </span>
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "25px",
                  fontWeight: "500",
                }}
              >
                Taxes and service charges included
              </p>
            </div>
            <div
              className="flightsDetailsPrice"
              style={{
                marginLeft: "30px",
                background: "#e1f9f5",
                border: "1px solid lightgray",

                paddingTop: "20px",
                borderTop: "1px solid #e1f9f5",
                borderBottom: "1px solid #e1f9f5",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "25px",
                  fontWeight: "500",
                }}
              >
                <FontAwesomeIcon icon={faCheck} /> &nbsp; Eligible for Flexible
                Travel Dates
              </p>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "25px",
                  fontWeight: "500",
                }}
              >
                <FontAwesomeIcon icon={faCheck} /> &nbsp; Free cancellation
                within the next 10 hours
              </p>
            </div>
            <div
              className="flightsDetailsPrice"
              style={{
                marginLeft: "30px",
                background: "#f0f4f4",
                border: "1px solid lightgray",
                borderBottom: "1px solid lightgray",
                borderTop: "1px solid #f0f4f4",
                paddingTop: "20px",
              }}
            >
              <h1 style={{ fontSize: "16px" }}>
                <span>Passengers</span>
                <span
                  style={{
                    marginLeft: "15px",
                    color: "black",
                    fontSize: "25px",
                  }}
                ></span>
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "25px",
                  fontWeight: "500",
                }}
              >
                {persons == 1 ? (
                  <span>{persons} person</span>
                ) : (
                  <span>{persons} persons</span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div
          className="searchItem"
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            marginTop: "17%",
          }}
        >
          Contact details
          <form style={{ display: "flex", gap: "40px", width: "100%" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <TextField
                error={error1}
                label="Email"
                type="email"
                style={{ background: "white" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <FormControl style={{ background: "white" }}>
                <InputLabel
                  style={{
                    backgroundColor: "white",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  Country Code
                </InputLabel>
                <Select
                  onChange={(e) => setCoutryCode(e.target.value)}
                  error={error3}
                >
                  {allCountriesCodes.map((item) => {
                    return (
                      <MenuItem value={item.dial_code}>
                        {item.name + " (" + item.dial_code + ")"}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <br />
              <TextField
                onChange={(e) => setAddress(e.target.value)}
                label="Address"
                style={{ background: "white" }}
                error={error5}
              />
              <br />
              <TextField
                onChange={(e) => setCity(e.target.value)}
                label="City"
                style={{ background: "white" }}
                error={error7}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <TextField
                onChange={(e) => setConfirmEmail(e.target.value)}
                label="Confirm Email"
                type="email"
                style={{ background: "white" }}
                error={error2}
              />

              <br />

              <TextField
                onChange={(e) => setPhoneNumber(e.target.value)}
                label="Phone Number"
                type="tel"
                style={{ background: "white" }}
                error={error4}
              />
              <br />

              <TextField
                onChange={(e) => setPostcode(e.target.value)}
                label="Postcode"
                style={{ background: "white" }}
                error={error6}
              />
              <br />

              <FormControl style={{ background: "white" }}>
                <InputLabel
                  style={{
                    backgroundColor: "white",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  Country
                </InputLabel>
                <Select
                  onChange={(e) => setCountry(e.target.value)}
                  error={error8}
                >
                  {allCountries.map((item) => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
          </form>
        </div>
        <div
          style={{ width: "40%", position: "relative", marginBottom: "200px" }}
        >
          <input
            onClick={handleForm}
            type="submit"
            value="Continue"
            className="logInButton"
            style={{
              position: "absolute",
              right: "0",

              width: "35%",
            }}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default BookFlight;
