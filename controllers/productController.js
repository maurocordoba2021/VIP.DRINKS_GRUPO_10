const express = require('express');
const path = require('path');




/*const listadoProductos =[
    producto1{
        id: Vodka Trump ,
        descripcion:,
        precio:,
        img:,
    },
    producto2{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
    producto3{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
    producto4{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
    producto5{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
    producto6{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
    producto7{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
    producto8{
        id: ,
        descripcion:,
        precio:,
        img:,
    },
  
]*/

const luxuryProductos =[
    {
        id:1 ,
        descripcion:"Colección de Champagnes Krug 25 años",
        precio:"960.000$",
        img:"/images/champagne-krug-combo1.jpg",
    },
     {
        id:2 ,
        descripcion:"1.250.000$",
        precio:"Colección de Whisky GOT 15 años",
        img:"/images/Whisky-combo-juegodetronos1.jpg",
    },
   {
        id:3 ,
        descripcion:"Combo de sabores Vodka Trump",
        precio:"650.000$",
        img:"/images/vodka-trump-combo1.jpg",
    },
    {
        id:4 ,
        descripcion:"Combo de Tequila Ley 924",
        precio:"652.000$",
        img:"/images/tequilaleycombo1.jpg",
    },
    {
        id:5 ,
        descripcion:"Colección de Vinos Rutini 15 años",
        precio:"350.000$",
        img:"/images/rutini-coleccion-combo1.jpg",
    },
    {
        id:6 ,
        descripcion:"Dos Cognac Remy",
        precio:"1.250.000$",
        img:"/images/cognac-remy-combo1.jpg",
    },{
        id:7 ,
        descripcion:"Combo 3 Whisky Chivas",
        precio:"250.000$",
        img:"/images/chivas-combo1.jpg",
    },
    {
        id: 8,
        descripcion:"Combo Bebidas JCB",
        precio:"1.550.000$",
        img:"/images/gin-jcb-combo1.jpg",
    },
  
]





const productController ={
    detalle:  (req, res) =>{
        res.render("detalle");
    },
    novedades: (req, res) =>{
        res.render("luxury",{productos:luxuryProductos});
    },
    historyProducts:(req, res) =>{
        res.render("history");
    }
}




module.exports = productController;