
const express=require('express');
const mongoose=require('mongoose')
const User=require("../Models/Users");


let Router=express.Router();



Router.get("/",(req,res)=>{
			User.find()
			.then((result)=>{
				res.status(200).json(result)

			})

			.catch(err=>{
				res.json(err);
			})

		})


		Router.get("/:_id",(req,res)=>{
	
			User.findById(req.params._id)
			
			.then(result=>{
				res.json({result}).status(200)
			})
			.catch(err=>{
				console.log(err)
			})
		
		})


Router.post("/",(req,res)=>{
			const user=new User(req.body)
			console.log(user)
			user.save(req.body)

			.then(result=>{
				res.status(200).json({result})
			})

			.catch(err=>{
				res.json(err);
			})
		})


Router.put("/:_id",(req,res)=>{

	User.findByIdAndUpdate(req.params._id,req.body)
	.then(result=>{
		res.status(200).json({result})	
	})
	.catch(err=>{
		res.json(err);
	})
})


Router.delete("/:_id",(req,res)=>{

	User.findByIdAndDelete(req.params._id)
	.then(result=>{
		res.status(200).json({result})	
	})
	.catch(err=>{
		res.json(err);
	})
})

module.exports=Router;