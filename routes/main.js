const express=require('express');
const router=express.Router();
const path = require("path");
const mainController =require('../controllers/mainController')

router.get("/", mainController.index);
router.post("/", mainController.index);
router.get("/listProducts", mainController.listProducts);
router.get("/recipes", mainController.recipes);



module.exports=router;