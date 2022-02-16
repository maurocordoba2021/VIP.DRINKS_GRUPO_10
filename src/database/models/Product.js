module.exports = function (sequelize, dataTypes) {
let alias = "Product";

let cols = {
    idProducts:  {
        type :  dataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: dataTypes.STRING
    }, 
    measure: {
        type: dataTypes.STRING
    }, 
    price: {
        type: dataTypes.DECIMAL(5.2)
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
    discount: {
        type: dataTypes.DECIMAL(1.2)
    }, 
    rating: {
        type: dataTypes.INTEGER
    },
    img: {
        type: dataTypes.STRING
    },  
    luxury: {
        type: dataTypes.STRING
    },
    
    categories_idcategories:{
        type:dataTypes.BIGINT(10)
    }
    

}
let config = {
    tableName : "products",
    timestamps: false
}

let Product = sequelize.define(alias, cols, config);

Product.associate=(models)=>{
 Product.belongsTo(models.Categorie,{
     as:"Categories",
     foreignKey:"categories_idcategories"
 })

    Product.belongsToMany(models.User,{
        as:"Product_user",
        through:"products_has_users",
        foreignKey:"products_idproducts",
        otherKey:"users_idusers",
        timestamps:false
    })
}
return Product

}