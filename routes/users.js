const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const usersController = require('../controllers/usersController')

// configuración de guardado de archivos

let storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    let fileDestination = path.join(__dirname, '../public/images/imgUsers')
    callback(null, fileDestination)
    },
    filename:(req, file, callback)=>{
        console.log(file);
        let fileName = "imgUser-" + Date.now() + path.extname(file.originalname)
        callback(null, fileName)
    },
});

const fileUpload = multer({storage});




router.get("/login", usersController.login);

router.get("/registro", usersController.registro);

router.post("/registro", fileUpload.single('imgUser'), usersController.procesarFormulario);



module.exports=router;
