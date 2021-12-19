const express = require('express');
const router = express.Router();

const path = require("path");
const usersController = require('../controllers/usersController')
const { body } = require('express-validator');
const { error } = require('console');
const usersFileUpload = require('../controllers/middlewares/multerUsersMiddleware')


// validación de datos
const validations = [
    body('userName').notEmpty().withMessage('Debes escribir tu nombre de Usuario').bail()
    .isLength({min : 6}).withMessage('Debe contener al menos 6 caracteres'),
    body('email').notEmpty().withMessage('Debes ingresar tu correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de email válido'),
    body('password').notEmpty().withMessage('Debes elegir una contraseña').bail()
    .isLength({min : 8}).withMessage('Su contraseña debe contener màs de 8 caracteres'),
    body('imgUser').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', 'gif'];

        if(!file) {
            throw new Error('Debes subir una foto de perfil')
        }else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtension.includes(fileExtension)) {
            throw new Error('Debes elegir un formato ' + acceptedExtension.join(', '))
        }
    }
        return true;
    })
]

// Rutas

router.get("/login", usersController.login);

router.get("/users/profile", usersController.profile)


//Muestra el formulario de registro
router.get("/register", usersController.register);

//Procesa el formulario de registro
router.post("/register", usersFileUpload.any(), validations, usersController.processForm) // Procesar formulario de registro



module.exports=router;
