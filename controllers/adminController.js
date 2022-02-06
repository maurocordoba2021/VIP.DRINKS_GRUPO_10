const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');
const dirPath = path.join(__dirname, '../database/products.json');
let listProducts = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));
const db = require('../src/database/models');
const sequelize = db.sequelize;

const adminController = {
    index: (req, res) => {
        res.render("admin");
    },
    create: (req, res) => {
        db.Categorie.findAll()
            .then((category)=>{
                res.render("create",{category:category});
            })
        
    },
    processForm: (req, res) => {
        let value = req.body.luxury
            if (value == "true"){
                value = true
            }else{
                value = false
            }
            db.Product.create({
            title: req.body.title,
            price: req.body.price,
            discount: req.body.discount,
            short_description:req.body.shortDescription,
            long_description: req.body.longDescription,
            stock:req.body.stock,
            luxury: value,
            categories_idcategories: req.body.categories_idcategories,
            img: req.file.filename,
            measure:req.body.measure,
            brand:req.body.brand,
            rating:req.body.rating

            })

       res.redirect('/admin/listEdit');
    },
    listEdit: (req, res) => {
        db.Product.findAll()
        .then(Product=>{
            res.render("listEdit",{listProducts:Product})
        })
        .catch(error=>{
            console.log (error)
        })
        
    },
    editProduct: (req, res) => {
        let product=db.Product.findByPk(req.params.id)
        console.log(product.idProducts)
        let category=db.Categorie.findAll()
            Promise.all([product,category])
            .then(([product,category])=>{
                res.render("editProduct",{product:product,category:category})
            })
      
    },
    processEdit: (req, res) => {
        
        
        db.Product.update({
            title: req.body.title,
            price: req.body.price,
            discount: req.body.discount,
            short_description:req.body.shortDescription,
            long_description: req.body.longDescription,
            stock:req.body.stock,
            luxury: req.body.luxury,
            categories_idcategories:req.body.categories_idcategories,  
            img: req.body.filename,
            measure:req.body.measure,
            brand:req.body.brand,
            rating:req.body.rating,
        },{
            where:{
                idProducts:req.params.id
            }
        })
        res.redirect('/admin/listEdit')
   /*  // 1) Busco index de un objeto (producto) especifico de nuestra lista sin actualizar usando método findIndex
    let productIndex = listProducts.findIndex((product => product.id == req.params.id));
    // 2) Muestro mi producto encontrado antes de actualizar
    console.log("Antes de la edición: ", listProducts[productIndex])
    // 3) Validación de Imágen
        let imgProduct
        if (req.file != undefined) {
            img = req.file.filename
        } else {
            imgProduct = listProducts[productIndex].imgProduct
        }
    // 4) Modifico tipos de datos recibidos
            // Luxury String a booleano
            let value = req.body.luxury
            if (value == "true"){
                value = true
            }else{
                value = false
            }
            // ID String a Number
            let idString = req.params.id;
            let idNumber = parseInt(idString)
            let priceString=req.body.price
            let priceNumber=parseInt(priceString)
    
            

    // 5) Actualizo las propiedades de mi objeto
    listProducts[productIndex].id = idNumber,
    listProducts[productIndex].title = req.body.title,
    listProducts[productIndex].price= priceNumber,
    listProducts[productIndex].discount = req.body.discount,
    listProducts[productIndex].shortDescription = [req.body.shortDescription],
    listProducts[productIndex].longDescription = req.body.longDescription,
    listProducts[productIndex].stock = req.body.stock,
    listProducts[productIndex].shippingCost = req.body.shippingCost,
    listProducts[productIndex].luxury = value,
    listProducts[productIndex].category = req.body.category,
    listProducts[productIndex].imgProduct = imgProduct,
    // 6) Muestro por consola mi producto actualizado
    console.log("Luego de la edición: ", listProducts[productIndex])
    // 7) Actualizo JSON
    let nuevaLista = JSON.stringify(listProducts, null, " ");
    fs.writeFileSync(dirPath, nuevaLista, 'utf-8');

    res.redirect('/admin/listEdit') */
    },
    delete: (req, res) => {
        db.Product.destroy({
            where:{
                idProducts:req.params.id
            }
        })
        .then(db.Product.findAll()
        .then(Product=>{
            res.render("listEdit",{listProducts:Product})
        })
        .catch(error=>{
            console.log (error)
        }))
        
        
        /* let idProduct = req.params.id
        console.log(idProduct);
        let pos = listProducts.indexOf(idProduct);
        //Se agrego al funcion para eliminar la imagen del prducto cuando este se elimina//
        let imgDelete=listProducts.find((idProduct)=>{
            return idProduct.imgProduct
        })
        console.log(imgDelete.imgProduct)
        fs.unlinkSync(path.join(__dirname,"../public/images/imgProducts/"+imgDelete.imgProduct))
        listProducts.splice(pos, 1);

        let nuevaLista = JSON.stringify(listProducts, null, " ");
        fs.writeFileSync(dirPath, nuevaLista, 'utf-8'); */
      
    },
    preview: (req, res) => {

        res.render("preview")
    },
    listUsers: (req, res) => {
        res.send('Acá va a estar el listado de usuarios!')
    }
}


module.exports = adminController;
