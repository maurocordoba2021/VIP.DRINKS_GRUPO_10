module.exports = function (sequelize, dataTypes) {
    let alias = "Payment_method";

    let cols = {
        idPayment_method: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
    }


    let config = {
        tableName: "payment_method",
        timestamps: false
    }

    let  Payment_method = sequelize.define(alias, cols, config);

    Payment_method.associate=(models)=>{
        Payment_method.belongsTo(models.Order,{
            as:"Payment_Order",
            foreigKey:"idPayment_method"
        })
    }



    return  Payment_method
    
}