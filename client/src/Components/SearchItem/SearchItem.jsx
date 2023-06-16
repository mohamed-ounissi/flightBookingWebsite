import "./searchItem.css";
import { allCountries } from "../Search/allCounties";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchItem = (props) => {
  const navigate = useNavigate();

  const [item, setItem] = useState();
  const [persons, setPersons] = useState();
  const [dest, setDest] = useState();

  useEffect(() => {
    setItem(props.item);
    setPersons(props.persons);
    setDest(props.dest);
  }, [props.item]);

  const abr = (ch) => {
    for (let i = 0; i < allCountries.length; i++) {
      if (allCountries[i].name == ch) {
        return allCountries[i].code;
      }
    }
  };

  // const getFlightsInfo = async () => {
  //   try {
  //     const res = await axios.get(`/flights/${props.dest}/2023-04-21/First-Class/5`);
  //     setCardsItems(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleClick = () => {
    navigate("/Book-flight", {
      state: { item ,persons,dest },
    });
  };

  return (
    <div className="searchItem">
      <img src={props.item.airlineLogo} alt="" className="siImg" />
      <div className="siDesc">
        <div className="descInfo" style={{ width: "59%" }}>
          <span className="siSubtitle">
            {props.item.leaveIn}–{props.item.arriveAt}
          </span>
          <span className="siFeatures">TN - {abr(props.dest)}</span>
        </div>

        <div className="descInfo" style={{ width: "15%" }}>
          {props.item.stops.length == 0 ? (
            <span className="siSubtitle" style={{ marginTop: "30px" }}>
              direct
            </span>
          ) : (
            <span className="siSubtitle">{props.item.stops.length} stops</span>
          )}
          <div className="spanAbr">
            {props.item.stops.map((x) => {
              if (x.length != 0) {
                return <span className="siFeatures">{x} &nbsp;</span>;
              }
            })}
          </div>
        </div>
        <div className="descInfo">
          <span className="siSubtitle">{props.item.maxTimeOfFlight}</span>
          <span className="siFeatures">{props.type}</span>
        </div>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">{props.item.pricePerPerson} &nbsp;TND</span>
          <span className="siTaxOp"> for {props.persons} persons </span>
          <button className="siCheckButton" onClick={handleClick}>
            Book Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
