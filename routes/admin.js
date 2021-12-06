const express=require('express');
const router=express.Router();
const path = require("path");
const adminController = require('../controllers/adminController');


//index de admin con las opciones de CRUD
router.get("/", adminController.index);
router.post('/', adminController.index)
router.get("/create", adminController.create);
router.post('/editProduct/:id' , adminController.editProduct)
router.get('/preview', adminController.preview)
router.get("/listEdit", adminController.listEdit);
router.post("/listEdit", adminController.listEdit);


module.exports=router;