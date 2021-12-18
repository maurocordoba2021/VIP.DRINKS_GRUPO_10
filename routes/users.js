const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const usersController = require('../controllers/usersController')
const { body } = require('express-validator');

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
const validations = [
    body('userName').notEmpty().withMessage('Debes escribir tu nombre de Usuario'),
    body('email').notEmpty().withMessage('Debes escribir un e-mail válido'),
    body('password').notEmpty().withMessage('Su contraseña debe contener màs de 8 caracteres')
]

// Rutas

router.get("/login", usersController.login);

router.get("/users/profile", usersController.profile)


//Muestra el formulario de registro
router.get("/register", usersController.register);

//Procesa el formulario de registro
router.post("/register", fileUpload.single('imgUser'), validations, usersController.processForm) // Procesar formulario de registro







module.exports=router;
//git config user.name
//git config user.email