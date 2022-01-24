module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        idCart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fk_idUser: {
            type: dataTypes.INTEGER
        },
        Fk_idProduct: {
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

    let Cart = sequelize.define(alias, cols, config);
    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {
            as: "User",
            foreigKey:"Fk_idUser"
        })
        Cart.hasMany(models.Product,{
            as:"Product",
            foreignKey:"Fk_idProduct"
        })
    }

    

    return Cart
}