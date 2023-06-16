const router = require("express").Router();
const Destination = require("../models/detinations");
const allCountries = require ("./allCounties")

const abr = (ch) => {
  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].name == ch) {
      return allCountries[i].code;
    }
  }
};


//CREATE Destination
router.post("/", async (req, res) => {
    const newDestination = new Destination(req.body);

      try {
        const savedDestination = await newDestination.save();
        res.status(200).json(savedDestination);
      } catch (err) {
        res
          .status(500)
          .json(err);
          console.log(err)
      }

  });


  //GET DEST BY NAME
  router.get("/:_destination", async (req, res) => {
    try {
      const { _destination} = req.params;
      
      const DestinationInfos = await Destination.findOne({
        name: _destination,
        
      });
     
      
      res.status(200).json({...DestinationInfos._doc, 
       abr:abr(DestinationInfos.country)});
     
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//GET ALL Destination
router.get("/", async (req, res) => {
  try {
    let destinations;
    destinations = await Destination.find();
    res.status(200).json(destinations); 
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;