const { body } = require('express-validator');
const path = require('path')

// validación de datos
const usersValidations = [
    body('name').notEmpty().withMessage('Debes escribir tu nombre'),
    body('surname').notEmpty().withMessage('Debes escribir tu apellido'),
    body('email').notEmpty().withMessage('Debes ingresar tu correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de email válido'),
    body('password').notEmpty().withMessage('Debes elegir una contraseña').bail()
    .isLength({min : 8}).withMessage('Su contraseña debe contener màs de 8 caracteres'),
    body('img').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', '.jpeg'];

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
module.exports = usersValidations