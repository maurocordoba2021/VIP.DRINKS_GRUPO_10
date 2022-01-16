module.exports = function (sequelize, dataTypes) {
    let alias = "Adress";

    let cols = {
        idAdress: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        idUser: {
            type: dataTypes.INTEGER
        },
        street: {
            type: dataTypes.STRING
        },
        street_number: {
            type: dataTypes.INTEGER
        },
        localty: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        },
        country: {
            type: dataTypes.STRING
        },
        phone_number: {
            type: dataTypes.INTEGER
        }
    }


    let config = {
        tableName: "adress",
        timestamps: false
    }

    let Adress = sequelize.define(alias, cols, config);

    return Adress
    
}