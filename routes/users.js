const express = require('express');
const router = express.Router();
const { error } = require('console');

// Controllers
const usersController = require('../controllers/usersController')

// Middlewares
const usersFileUpload = require('../middlewares/multerUsersMiddleware')
const usersValidations = require('../middlewares/usersValidations')

// Routes

router.get("/login", usersController.login);

router.get("/users/profile", usersController.profile)


//Muestra el formulario de registro
router.get("/register", usersController.register);

//Procesa el formulario de registro
router.post("/register", usersFileUpload.single('imgUser'), usersValidations, usersController.processForm) // Procesar formulario de registro



module.exports=router;
