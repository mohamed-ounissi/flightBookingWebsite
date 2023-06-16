import React from "react";
import "./Loading.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';


const Loading = () => {
  return (
    <div className="loaderAll">
      <div className="loaderBody">
        <div className="loader">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              style={{ "--i": i + 1 }}
              className="loader-span"
            ></span>
          ))}
         <div className="loadingFlight">
      <FontAwesomeIcon icon={faPlane} spin />
    </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
