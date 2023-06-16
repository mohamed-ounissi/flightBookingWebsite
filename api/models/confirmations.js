const mongoose = require("mongoose");

const confirmationsSchema = new mongoose.Schema({
    flight_ID:{
        type:String,
        required:true,

        
    },
    contactEmail:{
        type:String,
        required:true,
    },

    contactPhone:{
        type:String,
        required:true,
        
        
    },
   
    contactAdress:{
        type:String,
        required:true,
    },
    contactPostcode:{
        type:String,
        required:true,
    },
    contactCity:{
        type:String,
        required:true,
    },  
    contactCountry:{
        type:String,
        required:true,
    },  
    
},{timestamps:true});


module.exports = mongoose.model("confirmations", confirmationsSchema);