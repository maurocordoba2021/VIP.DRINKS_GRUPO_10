const express=require('express');
const router=express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"))
});

router.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"))
});


router.get("/recetas", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "../views/recipes.html"))
});

module.exports=router;