const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


apiProduct = {
    list:(req,res)=>{
    db.Categorie.findAll({
        include:['categorie_product']
    })
    .then(Categorie=> {
       
    db.Product.findAll({
    include:["Categories"]
})
    .then(products=>{
        console.log(products)
        let arrayCategorias = []
        for(let i=0; i<Categorie.length ; i++){
            arrayCategorias.push({
                nombre: Categorie[i].dataValues.name,
                total: Categorie[i].dataValues.categorie_product.length
            })
        }

        let wisky = products.filter(product => product.categories_idcategories == 1)
        let tequila = products.filter(product => product.categories_idcategories == 8)
        let ron = products.filter(product => product.categories_idcategories == 3)
        let respuesta = {
            meta: {
                status: 200,
                total: products.length,
                url: "/api/products",
                categorie: Categorie.length,
                categoryNames: arrayCategorias,
                countByCategory: [
                    {wisky: wisky.length},
                    {tequila: tequila.length},
                    {ron: ron.length}
                ]
            },
              data: products.map(product => {
                console.log(product)
                return{
                    idProducts: product.idProducts,
                    name:product.title,
                    measure:product.measure,
                    price:product.price,
                    short_description: product.short_description,
                    long_description:product.long_description,
                    brand:product.brand,
                    discount: product.discount,
                    image: "/images/imgProducts/" + product.img,       
                     Categories:{name:product.Categories.name} 
                    
                }
            })  
        } 
    
        res.json(respuesta)
    })    
    })
     .catch(function(error){
        res.json({status:800})
    }) 
}, detail:(req,res)=>{
    db.Product.findByPk(req.params.id, {
        include:["Categories"]
    })
    .then(product=>{
        let respuesta = {
            meta:{
                status: 200,
                url: "/api/products/" + product.idProducts
            },
            data: {
                idProducts: product.idProducts,
                name:product.title,
                measure:product.measure,
                price:product.price,
                short_description: product.short_description,
                long_description:product.long_description,
                brand:product.brand,
                discount: product.discount,
                image: "/images/imgProducts/" + product.img,       
                 Categories:{name:product.Categories.name} 
                }
            }
        
        res.json(respuesta)
    })
    .catch(function(error){
        console.log(error)
        res.json({status:800})
    })
}
    
}

module.exports = apiProduct




