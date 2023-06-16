const mongoose = require("mongoose");

const destinationsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
        
    },
    mainImage:{
        type:String,
        required:true,
    },

    mainDesc:{
        type:String,
        required:true,
        
        
    },
   
    country:{
        type:String,
        required:true,
    },
    images:{
        type:[String],
        default:[]
    },
    fullDesc:{
        type:String,
        required:true,
    },  
    
},{timestamps:true});


module.exports = mongoose.model("destinations", destinationsSchema);