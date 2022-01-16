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

    return  Payment_method
    
}