const mongoose=require("mongoose");


//define mongoose schema
const userschema=mongoose.Schema({

			password:{

				type:String,
				required:true,

			},


			email:{
				type:String,
				required:true,
			},


			userId:{
				type:String
			},



		});

//then make model

const User=mongoose.model('user',userschema);


module.exports=User;