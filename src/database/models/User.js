module.exports = function (sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        idUsers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        surname: {
            type: dataTypes.STRING
        },   
        password: {
            type: dataTypes.STRING
        },img:{
            type:dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        
        birthday: {
            type: dataTypes.DATE
        },
        profile: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = (models)=>{
        User.belongsToMany(models.Product,{
            as:"User_Product",
            through:"products_has_users",
            foreignKey:"users_idusers",
            otherKey:"products_idproducts",
            timestamps:false
        })

    }
    return User   
}