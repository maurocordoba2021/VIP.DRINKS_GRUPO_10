const express = require('express');
const path = require('path');




/*const listadoProductos =[
    producto1{
        nombre: Vodka Trump ,
        descripcion:,
        precio:,
        img:,
    },
    producto2{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    producto3{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    producto4{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    producto5{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    producto6{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    producto7{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    producto8{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
  
]*/

/*const luxuryProductos =[
    luxury1{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    luxury2{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    luxury3{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    luxury4{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    luxury5{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    luxury6{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
   luxury7{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
    luxury8{
        nombre: ,
        descripcion:,
        precio:,
        img:,
    },
  
]*/





const productController ={
    detalle:  (req, res) =>{
        res.render("detalle");
    },
    novedades: (req, res) =>{
        res.render("luxury");
    },
    historyProducts:(req, res) =>{
        res.render("history");
    }
}




module.exports = productController;