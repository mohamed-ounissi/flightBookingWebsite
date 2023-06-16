import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Info from "../Components/Info/Info";
import Lounge from "../Components/Lounge/Lounge";
import Navbar from "../Components/NavBar/Navbar";
import Search from "../Components/Search/Search";
import Subscribers from "../Components/Subscribers/Subscribers";
import Support from "../Components/Support/Support";
import Travelers from "../Components/Travelers/Travelers";

import React from "react";

const Homepage = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
};

export default Homepage;
