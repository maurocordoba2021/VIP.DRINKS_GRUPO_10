module.exports = function (sequelize, dataTypes) {
    let alias = "User";
    
    let cols = {
        idUser:  {
            type :  dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }, 
        surname: {
            type: dataTypes.STRING
        }, 
        email:{
            type: dataTypes.STRING 
        },
        password:{
            type: dataTypes.STRING 
        },
        email:{
            type: dataTypes.STRING 
        },
        country:{
            type: dataTypes.STRING 
        },
        birthday:{
            type: dataTypes.DATE 
        },
        img:{
            type: dataTypes.STRING 
        },
        profile:{
            type: dataTypes.INTEGER 
        }
    }
    let config = {
        tableName : "users",
        timestamps: false
    }
    
    let Product = sequelize.define(alias, cols, config);
    
    }