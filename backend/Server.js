const express=require("express");
const mongoose=require('mongoose')
const app=express();
const UserRouter=require("./Routes/UserRoutes.js");
const ProductsRouter=require("./Routes/ProductsRoutes.js");

const dotenv=require('dotenv')
const cors=require('cors');


mongoose.connect("mongodb+srv://ailifeadvice2:6BWn4dj2lHbvnskD@nodetuts.okywb1x.mongodb.net/highspirits?retryWrites=true&w=majority")


app.use(cors());

app.get("/",(request,response)=>{
	console.log("running on port 65000");
	response.send(

			{data:"im alive and running"}

		);
});



app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use("/users",UserRouter);
app.use("/products",ProductsRouter);

app.listen(65000)	