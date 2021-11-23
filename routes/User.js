const express=require('express');
const router=express.Router();
const path = require("path");
const usersController = require('../controllers/usersController')

router.get("/login", usersController.login);

router.get("/perfil", usersController.perfil);

router.get("/registro", usersController.registro);

module.exports=router;
