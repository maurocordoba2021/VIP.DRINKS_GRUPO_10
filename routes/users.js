const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const usersController = require('../controllers/usersController')

// configuración de guardado de archivos

let storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    callback(null, (path.join(__dirname, '../public/images/imgUsers')));
    },
    filename:(req, file, callback)=>{
        console.log(file);
        callback(null, ('imgUser-' + Date.now() + path.extname(file.originalname)));
    },
});

const fileUpload = multer({storage});




router.get("/login", usersController.login);

router.get("/registro", usersController.registro);

router.post("/registro", fileUpload.single('imgUser'), usersController.procesarFormulario);



module.exports=router;
