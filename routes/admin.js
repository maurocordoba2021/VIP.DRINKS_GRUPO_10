const express=require('express');
const router=express.Router();

// Controllers
const adminController = require('../controllers/adminController');

// Middlewares
const productsFileUpload = require('../middlewares/multerProductsMiddleware')

// Routes

// Muestra Index de Admin
router.get("/", adminController.index);
router.post('/', adminController.index);

// Muestra el listado de productos para CRUD 
router.get("/listEdit", adminController.listEdit);
router.post("/listEdit", adminController.listEdit);

// Muestra formulario de creación
router.get("/create", adminController.create);

// Procesa formulario de creaciòn
router.post("/create",  productsFileUpload.single('imgProduct'), adminController.processForm)

// Muestra el formulario de edición
router.get('/editProduct/:id' , adminController.editProduct);

// Edita el producto
router.put('/editProduct/:id' , productsFileUpload.single('imgEdit'), adminController.processEdit);


router.get('/preview', adminController.preview)


router.delete("/listEdit/:id", adminController.delete)

// Listado de usuarios para CRUD
router.get('/listUsers', adminController.listUsers);


module.exports=router;