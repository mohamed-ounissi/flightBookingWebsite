const mongoose = require("mongoose");

const flightsSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true,
    },
    airlineLogo:{
        type:String,
        required:true,
        default:'http://localhost:5000/images/airlines_images/',
    },

    leaveIn:{
        type:String,
        required:true,
        
        
    },
    arriveAt:{
        type:String,
        required:true,
        
    },
    comingFrom:{
        type:String,
        default:"TN",
    },
    goingTo:{
        type:String,
        required:true,

    },
  
    stops:{
        type:[String],
        default:[]
    },
    maxTimeOfFlight:{
        type:String,
        required:true,
    },
    class:
    {
        type:String,
        required:true,
    },
    pricePerPerson:
    {
        type:Number,
        required:true,
    },
   
    

},{timestamps:true});


module.exports = mongoose.model("Flights", flightsSchema);