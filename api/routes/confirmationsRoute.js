const router = require("express").Router();
const Confirmation = require("../models/confirmations");





//CREATE Confirmation
router.post("/", async (req, res) => {
    const newConfirmation = new Confirmation(req.body);

      try {
        const savedConfirmation = await newConfirmation.save();
        res.status(200).json(savedConfirmation);
      } catch (err) {
        res
          .status(500)
          .json(err);
          console.log(err)
      }

  });

  //GET ALL Destination
router.get("/", async (req, res) => {
    try {
      let confirmation;
      confirmation = await Confirmation.find();
      res.status(200).json(confirmation); 
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;