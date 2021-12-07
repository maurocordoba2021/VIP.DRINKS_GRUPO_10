const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const usersController = require('../controllers/usersController')
const { check } = require('express-validator');

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


// validación de datos
let validateRegister = [
    check('name').notEmpty().withMessage('Debes agregar tu nombre'),
    check('email').notEmpty().isEmail().withMessage('Debes escribir un e-mail válido'),
    check('password').notEmpty().isLength({min: 8}).withMessage('Debes elegir una contrañera de al menos')
]

// Rutas

router.get("/login", usersController.login);

router.get("/users/profile", usersController.profile)

router.get("/registro", usersController.registro);

router.post("/registro", fileUpload.single('imgUser'), usersController.processForm);





module.exports=router;
