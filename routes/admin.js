const express=require('express');
const router=express.Router();
const multer = require('multer');
const path = require("path");
const adminController = require('../controllers/adminController');


// configuración de guardado de archivos
let storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    let fileDestination = path.join(__dirname, '../public/images/imgProducts')
    callback(null, fileDestination)
    },
    filename:(req, file, callback)=>{
        console.log(file);
        let fileName = "imgProduct-" + Date.now() + path.extname(file.originalname)
        callback(null, fileName)
    },
});
const fileUpload = multer({storage});

//index de admin con las opciones de CRUD

// Muestra Index de Admin
router.get("/", adminController.index);
router.post('/', adminController.index);

// Muestra formulario de creación
router.get("/create", adminController.create);

// Procesa formulario de creaciòn
router.post("/create",  fileUpload.single('imgProduct'),adminController.processForm)



router.post('/editProduct/:id' , adminController.editProduct)
router.get('/preview', adminController.preview)
router.get("/listEdit", adminController.listEdit);
router.post("/listEdit", adminController.listEdit);

router.delete("/listEdit/:id", adminController.delete)

router.get('/listUsers', adminController.listUsers);
module.exports=router;