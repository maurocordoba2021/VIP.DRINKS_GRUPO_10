module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        idCart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: dataTypes.INTEGER
        },
        idProduct: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        }
    }


    let config = {
        tableName: "cart",
        timestamps: false
    }

    let  Cart = sequelize.define(alias, cols, config);

    return Cart
    
}