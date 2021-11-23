const express=require('express');
const router=express.Router();
const path = require("path");
const carController = require('../controllers/carController')

router.get("/carrito-de-compras", carController.car);
router.post("/carrito-de-compras", carController.car);

module.exports=router;
