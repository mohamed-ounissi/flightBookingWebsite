import Home from "./routes/Homepage";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Places from "./routes/Places";
import Flights from "./Components/flights/Flights";
import Explore from "./Components/explore/List";
import Loading from "./Components/Loading/Loading";
import BookFlight from "./routes/BookFlight";
import PaymentPage from "./routes/PaymentPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" exact element={<Signup />} />
          <Route path="/Places" exact element={<Places />} />
          <Route path="/explore/:Place" element={<Flights />} />
          <Route path="/Flights" exact element={<Explore />} />
          <Route path="/Loading" exact element={<Loading />} />*
          <Route path="/Book-flight" exact element={<BookFlight />} />
          <Route path="/Payment" exact element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
