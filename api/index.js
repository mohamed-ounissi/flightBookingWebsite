const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

const cors = require('cors');
const flights = require("./routes/flightsRoute");
const destinations = require("./routes/destinationsRoute");
const confirmations = require("./routes/confirmationsRoute");



app.use("/images", express.static(path.join(__dirname, "images/")));



dotenv.config();
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));
//app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api/flights", flights);
app.use("/api/destinations", destinations);
app.use("/api/confirmations", confirmations);

app.listen(5000, () => {});
