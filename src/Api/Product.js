const DB = require ('../database/models')
const Op = DB.Sequelize.Op

module.exports={
    list :(req, res) =>{
        DB.Product
            .findAll()
            .then(Products =>{
                return res.json(Products)
            })
    }
}