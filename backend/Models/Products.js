let mongoose = require("mongoose");
const Schema=mongoose.Schema({


    productName:{type:String,required:true},
    productType:{type:String,required:true},
    description:{type:String,},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    image:{type:String,required:true},

});


let Products=mongoose.model("products",Schema);

module.exports=Products;