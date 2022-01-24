module.exports = function (sequelize, dataTypes) {
    let alias = "Order";

    let cols = {
        idOrder: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: dataTypes.INTEGER
        },
        idPayment_method: {
            type: dataTypes.INTEGER
        },
        idAdress: {
            type: dataTypes.INTEGER
        }, 
        total: {
            type: dataTypes.DECIMAL(10,2)
        }

    }


    let config = {
        tableName: "order",
        timestamps: false
    }

    let Order = sequelize.define(alias, cols, config);
    
    Order.associate=(models)=>{
        Order.belongsTo(models.Addres,{
            as:"Order_Addres",
            foreigKey:"idAddres"
        })
    }

    Order.associate=(models)=>{
        Order.hasOne(models.User,{
            as:"Order_User",
            foreigKey:"idUser"
        })
        Order.belongsTo(models.Payment,{
            as:"Order_Payment",
            foreigKey:"idPayment_method"
        })
    }

   

    return Order
    
}