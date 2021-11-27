const express=require('express');
const router=express.Router();
const path = require("path");
const carController = require('../controllers/carController')

router.get("/", carController.car);
router.post("/", carController.car);

module.exports=router;
