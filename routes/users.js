const express = require('express');
const router = express.Router();
const { error } = require('console');
// Controllers
const usersController = require('../controllers/usersController')

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const usersFileUpload = require('../middlewares/multerUsersMiddleware')
const usersValidations = require('../middlewares/usersValidations')
const loginValidations = require('../middlewares/loginValidations');

// Routes

//Muestra el formulario de REGISTRO
router.get("/register", guestMiddleware,usersController.register);

//Procesa el formulario de registro, redirecciona a LOGIN
router.post("/register", usersFileUpload.single('imgUser'), usersValidations, usersController.processForm) // Procesar formulario de registro

//Muestra el formulario de LOGIN
router.get("/login", guestMiddleware, usersController.login);

//Procesa el formulario de registro, redirecciona a PROFILE
router.post("/login",loginValidations, usersController.loginProcess);

// Muestra la vista de perfil con los datos del usuario en SESSION
router.get("/profile", authMiddleware, usersController.profile);

// LOGOUT de usuario
router.get("/logout", usersController.logout);





module.exports=router;
