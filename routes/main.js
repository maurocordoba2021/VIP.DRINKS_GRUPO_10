const express=require('express');
const router=express.Router();
const path = require("path");
const mainController =require('../controllers/mainController')
const carController =require('../controllers/carController')
const apiProduct=require('../controllers/apiProduct')

router.get("/", mainController.filter)
router.get("/home", mainController.index);
router.post("/", mainController.index);
router.get("/listProducts", mainController.listProducts);
router.get("/recipes", mainController.recipes);
router.get("/search", mainController.search);
router.get("/apiProduct",apiProduct.list);
router.get("/apiProduct/:id",apiProduct.detail);



module.exports=router;