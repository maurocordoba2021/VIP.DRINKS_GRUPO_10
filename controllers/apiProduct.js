const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


apiProduct = {
    list : ( req , res) => {
        db.Product.findAll()
            .then( Products =>{
                return res.json({
                    total : Products.length ,
                    Products:Products

                })
            })
    }
}

module.exports=apiProduct