const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const lastController ={
   last:(req, res) => {
    db.Product.findAll({order:[["idProducts", "DESC"]], limit:1})
    .then(function (product) {
        product[0].setDataValue("endpoint", "/product/last" )

        let apiResponse= {
            meta: {
                status: 200,
                
                total: product.length
            },
            data: product
        }
        res.json(apiResponse)
    })
    .catch(function(error){
        res.json({status:500})
    })
}
}


module.exports=lastController