const express=require('express');
const router=express.Router();
const path = require("path");
const productController = require('../controllers/productController')

router.get("/history", productController.historyProducts);


router.get("/detalle", productController.detalle);

router.get("/luxury-offers", productController.novedades);

module.exports=router;