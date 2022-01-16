module.exports = function (sequelize, dataTypes) {
let alias = "Product";

let cols = {
    idProduct:  {
        type :  dataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: dataTypes.STRING
    }, 
    measure: {
        type: dataTypes.INTEGER
    }, 
    price: {
        type: dataTypes.DECIMAL(10,2)
    }, 
    short_description: {
        type: dataTypes.STRING
    }, 
    long_description: {
        type: dataTypes.STRING
    }, 
    brand: {
        type: dataTypes.STRING
    }, 
    stock: {
        type: dataTypes.STRING
    }, 
    discount: {
        type: dataTypes.STRING
    }, 
    rating: {
        type: dataTypes.DOUBLE
    },
    category: {
        type: dataTypes.STRING
    }, 
    sub_category: {
        type: dataTypes.STRING
    }, 
    luxury: {
        type: dataTypes.STRING
    }

}
let config = {
    tableName : "products",
    timestamps: false
}

let Product = sequelize.define(alias, cols, config);

}