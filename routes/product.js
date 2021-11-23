const express=require('express');
const router=express.Router();
const path = require("path");
const productController = require('../controllers/productController')

router.get("/detalle-de-productos", productController.detalleDeProductos );

router.get("/productos", productController.productos );

router.get("/detalle", productController.detalle);

router.get("/novedades", productController.novedades);

module.exports=router;