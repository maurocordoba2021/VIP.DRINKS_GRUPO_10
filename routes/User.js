const express=require('express');
const router=express.Router();
const path = require("path");

router.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/login.html"))
});



router.get("/perfil", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/profile.html"))
});

router.get("/registro", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/registro.html"))
});
module.exports=router;