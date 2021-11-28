const express = require('express');
const { url } = require('inspector');
const path = require('path');




const listProducts =[{
        idProducto: "vodka-Trump" ,
        nombre: "Vodka Trump",
        caracteristicas: ["Quíntuple destilación en Holanda", "Embotellada en un diseño único", "Hermoso y lujoso","Etiquetas y decoración exterior Milton Glaser"],
        descripcionLarga: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio:  740000,
        img: 'vodka-Trump.png',
        stock: 20,
    },
    {
        idProducto: "champagne-Krug",
        nombre: "Champagne Krug de Cuveé",
        caracteristicas: ["Elaboración artesanal y sabor único", "Alrededor de 120 vinos diferentes", "Productos especialmente seleccioandos" , "15 años de edad"],
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio: 750000,
        img: 'champagne-Krug.png',
        stock: 20,
    },
    {
        idProducto: "whisky-Chivas" ,
        nombre: "Chivas Regal 25",
        caracteristicas: ["Primer whisky de lujo en el mundo", "Elaborado a partir de una seductora mezcla frutal", "Una opción habitual para la alta sociedad", "En Nueva York desde 1909", "Legendario whisky", "Obra maestra", "Una mezcla única"],
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio:  79991,
        img: 'chivas.jpg',
        stock: 20,
    },
   {
        idProducto: "tequila-Ley-925",
        nombre:"Tequila 925 Ley Diamante",
        caracteristicas: ["Ley Diamante",  "Una pieza única", "La botella de tequila más cara del mundo", "La joya más importante fabricada en México"],
          descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio:  3500000 ,
        img: 'tequila-Ley-925.png',
        stock: 20,
    },
    {
        idProducto: "whisky-Highland-Park",
        nombre:"Whisky Highland Park",
        caracteristicas: ["12 años", "Color oro pálido", "Matiz anaranjado", "Aromas de fruta blanca", "(pera, manzana, melón)", "Notas de miel con especias", "Vainilla y Canela", "Toques florales", "Matices de yodo y de ahumado suave"],
          descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio:  39663,
        img:'whisky-Highland-Park.png',
        stock: 20,
    },
    {
        idProducto: "whisky-Louis-XIII",
        caracteristicas:["Fino y largo bouquet", "Aroma a flores y sándalo", "Sabor a frutos como higos y dátiles", "mezclados con nuez moscada y jengibre"],
          descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio:  766444,
        img: 'whisky-Louis-XIII.png',
        stock: 20,
    },
    {
        idProducto: "sake-Jumai",
        caracteristicas: [ "Sake de arroz puro" , "Aroma fresco y afrutado",  "Arroz pulido y filtrado de forma natural"],
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio: 134918,
        img:'sake-Jumai.png',
        stock: 20,
    },
   {
        idProducto: "ron-Habana-Club",
        nombre: "Havana Club Máximo",
        caracteristicas:["Extra Añejo", "Brillo de color ámbar", "potenciado por un añejado adicional", "Experiencia extremadamente rica", "intensa y persistente", "Aroma delicado", "Roble", "Notas ahumadas","Pera fresca, coco y fruta desecada", "Seco y dulce"],
         descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio: 225133,
        img:'ron-Habana-Club.jpg',
        stock: 20,
    },
  
]

const luxuryProductos =[
    {
        id: "champagne-krug-combo1",
        caracteristicas:"Colección de Champagnes Krug 25 años",
         descripcionLarga:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ",
        precio: 960000,
        img:"champagne-krug-combo1.jpg",
    },
     {
        id: "Whisky-combo-juegodetronos1",
        descripcion:"Colección de Whisky GOT 15 años",
        precio: 1250000 ,
        img:"Whisky-combo-juegodetronos1.jpg",
    },
   {
        id: "vodka-trump-combo1" ,
        descripcion:"Combo de sabores Vodka Trump",
        precio: 650000,
        img:"vodka-trump-combo1.jpg",
    },
    {
        id: "tequilaleycombo1",
        descripcion:"Combo de Tequila Ley 924",
        precio: 652000,
        img:"tequilaleycombo1.jpg",
    },
    {
        id: "rutini-coleccion-combo1",
        descripcion:"Colección de Vinos Rutini 15 años",
        precio: 350000,
        img:"rutini-coleccion-combo1.jpg",
    },
    {
        id: "cognac-remy-combo1",
        descripcion:"Dos Cognac Remy",
        precio: 1250000,
        img:"cognac-remy-combo1.jpg",
    },{
        id: 7 ,
        descripcion:"Combo 3 Whisky Chivas",
        precio: 250000,
        img:"chivas-combo1.jpg",
    },
    {
        id: 8,
        descripcion:"Combo Bebidas JCB",
        precio: 1550000,
        img:"gin-jcb-combo1.jpg",
    },
  
]


const productController ={
    detalle:  (req, res) =>{ 
        let producto = listProducts.find((producto) => producto.idProducto == req.params.idProducto)
        res.render("detalle", {producto: producto, listProducts: listProducts });
    },
    novedades: (req, res) =>{
        res.render("luxury",{productos : luxuryProductos });
    },
    historyProducts:(req, res) =>{
        res.render("history");
    }
}




module.exports = productController;
//module.exports = listProducts;