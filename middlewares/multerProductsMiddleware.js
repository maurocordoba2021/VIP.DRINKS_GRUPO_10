const multer = require('multer');
const path = require('path');

// PRODUCTOS -> configuración de guardado de archivos

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

const productsFileUpload = multer({ storage: storage });


module.exports = productsFileUpload
