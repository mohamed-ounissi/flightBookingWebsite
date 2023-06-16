const router = require("express").Router();
const Flight = require("../models/flights");
const allCountries = require ("./allCounties")


const abr = (ch) => {
  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].name == ch) {
      return allCountries[i].code;
    }
  }
};

//CREATE Flight
router.post("/", async (req, res) => {
    const newFlight = new Flight(req.body);

      try {
        const savedFlight = await newFlight.save();
        res.status(200).json(savedFlight);
      } catch (err) {
        res
          .status(500)
          .json(err);
          console.log(err)
      }

  });

  router.get("/:_destination/:_date/:_class/:_travelers", async (req, res) => {
    try {
      const { _destination, _date, _class, _travelers} = req.params;
      
     
      const FlightByDestAndDate = await Flight.find({
        goingTo: abr(_destination),
        date:new Date(_date).toISOString(),
        class:_class,
      });
    
      const updatedFlights = FlightByDestAndDate.map((flight) => {
        return {
          ...flight._doc,
          pricePerPerson: flight.pricePerPerson * parseInt(_travelers),
        };
      });
      
      res.status(200).json(updatedFlights);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get("/:_destination/", async (req, res) => {
    try {
      const { _destination } = req.params;
  
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
      
      const availableFlights = await Flight.find({
        goingTo: abr(_destination),
        date: { $gte: new Date(currentYear, currentMonth, currentDay)},
      });
  
      if(availableFlights.length>0){
      let cheapestFlight = availableFlights[0]; // Assume first flight is the cheapest

      for (let i = 1; i < availableFlights.length; i++) {
        const currentFlight = availableFlights[i];
        if (currentFlight.pricePerPerson < cheapestFlight.pricePerPerson) {
          cheapestFlight = currentFlight;
        }
      }
  
      res.json({ flight: cheapestFlight });
    }else{
      res.json({});
    }

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  });
  
module.exports = router;