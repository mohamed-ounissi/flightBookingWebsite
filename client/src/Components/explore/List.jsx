import "./list.css";
import Navbar from "../NavBar/Navbar";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../SearchItem/SearchItem";
import { allCountries } from "../Search/allCounties";
import Footer from "../Footer/Footer";
import image1 from "../../images/airlines_images/emirates.png";
import image2 from "../../images/airlines_images/Tunisair.png";
import image3 from "../../images/airlines_images/Turkish-Airlines.png";
import image4 from "../../images/airlines_images/qatar-airways.png";
import image5 from "../../images/airlines_images/america air lines.png";
import image6 from "../../images/airlines_images/British-Airways.png";

import axios from "../../axios";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [type, setType] = useState(location.state.type);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [Infos, setInfos] = useState();
  const [maxPrice, setMaxPrice] = useState();
  let dateDebut;
  let dateFin;
  let x;
  const inputDate = date[0].startDate;
  const dateObj = new Date(inputDate);
  dateObj.setDate(dateObj.getDate() + 1);
  const isoDate = dateObj.toISOString().slice(0, 10);

  useEffect(() => {
    getFlightInfos();
  }, [true]);

  const getFlightInfos = async () => {
    try {
      const responce = await axios.get(
        `/flights/${destination}/${isoDate}/${type.replace(
          " ",
          "-"
        )}/${options}`
      );

      responce.data.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
      setInfos(responce.data);
      console.log(
        `/flights/${destination}/${isoDate}/${type.replace(
          " ",
          "-"
        )}/${options}`
      );
      if (responce.data.length > 0) {
        setMaxPrice(responce.data[0].pricePerPerson);
        responce.data.map((item) => {
          if (maxPrice < item.pricePerPerson) {
            setMaxPrice(item.pricePerPerson);
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const Infos = [
  //   {
  //     id: 1,
  //     img: image1,
  //     stopplaces: [
  //       {
  //         pname: "Egypt",
  //       },
  //       {
  //         pname: "France",
  //       },
  //     ],
  //     time: "10h 20m",
  //     price: "1,322",
  //   },
  //   {
  //     id: 2,
  //     img: image2,
  //     stopplaces: [],
  //     time: "2h 30m",
  //     price: "726",
  //   },
  //   {
  //     id: 3,
  //     img: image3,
  //     stopplaces: [
  //       {
  //         pname: "Ukraine",
  //       },
  //     ],
  //     time: "14h 23m",
  //     price: "1,134",
  //   },
  //   {
  //     id: 4,
  //     img: image4,
  //     stopplaces: [],
  //     time: "7h 55m",
  //     price: "1,563",
  //   },
  //   {
  //     id: 5,
  //     img: image5,
  //     stopplaces: [
  //       {
  //         pname: "France",
  //       },
  //       {
  //         pname: "United Kingdom",
  //       },
  //       {
  //         pname: "Russian Federation",
  //       },
  //     ],
  //     time: "9h 3m",
  //     price: "1,032",
  //   },
  //   {
  //     id: 6,
  //     img: image6,
  //     stopplaces: [],
  //     time: "6h 9m",
  //     price: "893",
  //   },
  // ];
  return Infos != null && maxPrice ? (
    <div>
      <Navbar />
      {(dateDebut = date.startDate)}
      {(dateFin = date.endDate)}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input list="coutries" defaultValue={destination} type="text" />
              <datalist id="coutries">
                {allCountries.map((result) => {
                  return <option key={result.code}>{result.name}</option>;
                })}
              </datalist>
            </div>
            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "yyyy-MM-dd"
              )} `}</span>
            </div>
            <div className="lsItem">
              <label>Check-Out Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{` ${format(
                date[0].endDate,
                "yyyy-MM-dd"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => {
                    console.log(item.selection);
                    setDate([item.selection]);

                    if (dateFin != item.selection.endDate) {
                      setOpenDate(false);
                    }
                  }}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price</span>
                  <input
                    defaultValue="0"
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price</span>
                  <input
                    defaultValue={maxPrice.toString()}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Travelers</span>
                  <input
                    type="number"
                    defaultValue={options}
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {console.log(Infos[0]._id)}
            {Infos.map((x) => (
              <SearchItem
                key={x._id} // add a unique key prop to the component when rendering an array of components
                item={x}
                dest={destination}
                persons={options}
                type={type}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default List;
