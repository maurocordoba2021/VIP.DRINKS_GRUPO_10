const express=require('express');
const router=express.Router();
const multer = require('multer');
const path = require("path");
const productController = require('../controllers/productController')


//router.get("/detalle", productController.detalle);

// router.get('/', productController.index);

// router.get('/create', productController.list);

// router.post('/', productController.create);



router.get("/detalle/:id", productController.detalle)

router.get("/luxury-offers", productController.novedades);




module.exports=router;

