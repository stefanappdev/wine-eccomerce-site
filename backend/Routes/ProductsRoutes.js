const Product = require("../Models/Products");
const express = require("express");
let Router = express.Router();


Router.get("/", (req, res) => {

   Product.find()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.json(err)
        })
})


Router.get("/_id", (req, res) => {

    Product.find()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.json(err)
        })
})


Router.post("/", (req, res) => {

    let product=new Product(req.body)
    product.save(product)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.json(err)
        })
})


Router.put("/:_id", (req, res) => {
    Product.findByIdandUpdate(req.params._id, req.body)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

Router.delete("/:_id", (req, res) => {

    Product.findByIdAndDelete(req.params._id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.json(err)
        })
})





module.exports = Router