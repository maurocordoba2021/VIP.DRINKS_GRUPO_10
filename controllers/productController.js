const express = require('express');
const { url } = require('inspector');
const path = require('path');




const listProducts =[{
        id: "vodka-trump" ,
        descripcionCorta: "Quíntuple destilación en Holanda por el renombrado maestro destilador holandés Jacques de Lat Vodka Trump es embotellada en un diseño único, hermoso y lujoso, con etiquetas y decoración exterior por el famoso diseñador de Nueva York y artista Milton Glaser.",
        descripcionLarga:"",
        precio: "$ 740.000",
        img: '/images/vodka-Trump.png',
    },
    {
        id: "champagne-Krug",
        nombre: "Champagne Krug",
        descripcionCorta: "Champagne Krug gran cuveé, es el arquetipo de la filosofía de la elaboración artesanal y el sabor. Al rededor de 120 vinos diferentes, cuidadosamente seleccioandos de entre 10 cosechas diferentes, algunos pueden llegar a 15 años de edad. Es el factor diferenciador de este champagne con el resto.",
        descripcionLarga:"",
        precio:"$ 750.000",
        img: '/images/champagne-Krug.png',
    },
    {
        id: "whisky-Chivas" ,
        nombre: "Chivas Regal 25",
        descripcionCorta: "El primer whisky de lujo en el mundo elaborado a partir de una seductora mezcla frutal. Una opción habitual de mezcla suave para la alta sociedad de Nueva York desde 1909. Este legendario whisky ha sido testigo de la historia: sobrevivió a dos guerras mundiales, también a la época de la prohibición y se convirtió en una obra maestra para ser distinguido y aclamado para siempre. Porque el éxito es una mezcla única, tanto en la vida como en el whisky.",
        descripcionLarga:"",
        precio: "$ 79.991",
        img: '/images/chivas.jpg',
    },
   {
        id: "tequila-Ley-925",
        nombre:"Tequila 925 Ley Diamante",
        descripcionCorta: "Ley Diamante, como se le llama a la botella, es una pieza única con un valor en el Mercado de 3.5 millones de dólares. Según sus fabricantes, es, hasta el momento, la botella de tequila más cara del mundo y la joya más importante fabricada en México desde la época colonial (1521-1810).",
        descripcionLarga:"",
        precio: "$ 3.5M",
        img: '/images/tequila-Ley-925.png',
    },
    {
        id: "whisky-Highland-Park",
        nombre:"Whisky Highland Park",
        descripcionCorta:"Highland Park 12 años es de color oro pálido, con un matiz anaranjado. En nariz, muestra aromas de fruta blanca (pera, manzana, melón) y notas de miel con especias como la vainilla y la canela. Aparecen también toques florales, de brezo, matices de yodo y de ahumado suave",
        descripcionLarga:"",
        precio: "$ 39.663",
        img:'/images/whisky-Highland-Park.png',
    },
    {
        id: "whisky-Louis-XIII",
        descripcionCorta:"Con un fino y largo bouquet, posee un aroma a flores y sándalo, sabor a frutos como higos y dátiles mezclados con nuez moscada y jengibre.",
        descripcionLarga:"",
        precio: "$ 766.444",
        img: '/images/whisky-Louis-XIII.png',
    },
    {
        id: "sake-Jumai",
        descripcionCorta: "JUNMAI: El Junmai o “sake de arroz puro” es un sake que se elabora sólo con arroz, arroz koji y agua. ... Es un sake fragante con un sabor rico y suave, puede elaborarse para poseer un gusto seco, dulce o neutral.",
       descripcionLarga:"",
        precio: "$ 134.918",
        img:'/images/sake-Jumai.png',
    },
   {
        id: "ron-Habana-Club",
        descripcionCorta:"Havana Club Máximo Extra Añejo tiene un brillo de color ámbar, potenciado por un añejado adicional. En nariz, la experiencia es extremadamente rica, intensa y persistente, junto con un aroma delicado que equilibra el roble y las notas ahumadas con sutiles matices de pera fresca, coco y fruta desecada. Seco y dulce.",
        descripcionLarga:"",
        precio:"$ 225.133",
        img:'/images/"ron-Habana-Club".png',
    },
  
]

const luxuryProductos =[
    {
        id:1,
        descripcionCorta:"Colección de Champagnes Krug 25 años",
        descripcionLarga:"",
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
module.exports = luxuryProductos ;
module.exports = listProducts;