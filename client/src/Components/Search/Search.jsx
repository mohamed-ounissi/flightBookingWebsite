import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import "./Search.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { allCountries } from "./allCounties";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [active, setActive] = useState("singleBtn");
  const [active1, setActive1] = useState("singleBtn");
  const [active2, setActive2] = useState("singleBtn");

  const [destination, setDestination] = useState("");

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState(0);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (btn1 && options != 0 && destination != "") {
      navigate("/Flights", {
        state: { destination, date, options, type: "Economy" },
      });
    } else if (btn2 && options != 0 && destination != "") {
      navigate("/Flights", {
        state: { destination, date, options, type: "Business-Class" },
      });
    } else if (btn3 && options != 0 && destination != "") {
      navigate("/Flights", {
        state: { destination, date, options, type: "First-Class" },
      });
    } else {
      alert("please fill in all the required fields.");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [btn1, btn2, btn3]);

  const handlebutton1 = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
    setActive("singleBtn active");
    setActive1("singleBtn");
    setActive2("singleBtn");
  };
  const handlebutton2 = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
    setActive("singleBtn");
    setActive1("singleBtn active");
    setActive2("singleBtn");
  };
  const handlebutton3 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
    setActive("singleBtn");
    setActive1("singleBtn");
    setActive2("singleBtn active");
  };

  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className={active} onClick={handlebutton1}>
            <input
              type="radio"
              id="classChoice1"
              name="class"
              value="Economy"
              checked={btn1}
              style={{ display: "none" }}
            />
            <span>Economy</span>
          </div>
          <div className={active1} onClick={handlebutton2}>
            <input
              type="radio"
              id="classChoice1"
              name="class"
              value="Business-Class"
              checked={btn2}
              style={{ display: "none" }}
            />
            <span>Business Class</span>
          </div>
          <div className={active2} onClick={handlebutton3}>
            <input
              type="radio"
              id="classChoice1"
              name="class"
              value="First-Class"
              checked={btn3}
              style={{ display: "none" }}
            />
            <span>First-Class</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="searchInputs flex"
        >
          {/* SingleOutput */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input
                list="coutries"
                type="text"
                placeholder="Where do you want to go?"
                name="Location"
                onChange={(e) => setDestination(e.target.value)}
                required
              ></input>
              <datalist id="coutries">
                {allCountries.map((result) => {
                  return <option key={result.code}>{result.name}</option>;
                })}
              </datalist>
            </div>
          </div>

          {/* SingleOutput */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input
                type="text"
                placeholder="Add guests"
                name="Travelers"
                onChange={(e) => setOptions(e.target.value)}
                required
              />
            </div>
          </div>

          {/* SingleOutput */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar
                className="icon"
                onClick={() => setOpenDate(!openDate)}
              ></RxCalendar>
            </div>
            <div className="texts">
              <h4>Check-In</h4>
              <input
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
                style={{ fontSize: "12px" }}
                value={`${format(date[0].startDate, "yyyy-MM-dd")}  `}
                name="Check In"
                required
              ></input>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
          </div>

          {/* SingleOutput */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar
                className="icon"
                onClick={() => setOpenDate(!openDate)}
              ></RxCalendar>
            </div>
            <div className="texts">
              <h4>Check-Out</h4>
              <input
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
                style={{ fontSize: "12px" }}
                value={` ${format(date[0].endDate, "yyyy-MM-dd")}`}
                name="Check Out"
                required
              ></input>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
          </div>

          <button className="btn btnBlock flex" onClick={handleSearch}>
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
