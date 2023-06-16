import React, { useEffect } from "react";
import "./Subscribers.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Subscribers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section">
      <div data-aos='fade-up' data-aos-duration="2500" className="sectionContainer container">
        <h2>Subscribe Newslettres & get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your Email adress" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
