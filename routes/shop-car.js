const express=require('express');
const router=express.Router();
const path = require("path");

router.get("/carrito-de-compras", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/carrito-de-compras.html"))
});
router.post("/carrito-de-compras", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/carrito-de-compras.html"))
});

module.exports=router;
