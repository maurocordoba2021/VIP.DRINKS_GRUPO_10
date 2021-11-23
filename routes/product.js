const express=require('express');
const router=express.Router();
const path = require("path");

router.get("/detalle-de-productos", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/detalle-de-productos.html"))
});

router.get("/productos", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/listado-de-productos.html"))
});

router.get("/detalle", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/detalle.html"))
});

router.get("/novedades", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/novelties.html"))
});

module.exports=router;