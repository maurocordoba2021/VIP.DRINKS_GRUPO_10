module.exports= function (sequelize,dataTypes){
    
    let alias="Categorie"
    let cols={
        idcategories:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type:dataTypes.STRING
        }
    }
    let config = {
        tableName: "categories",
        timestamps: false
    }


    let Categorie = sequelize.define(alias,cols,config)

    Categorie.associate=(models)=>{
        Categorie.hasMany(models.Product,{
            as:"categorie_product",
            foreignKey:"categories_idcategories"
        })
    }



    return Categorie
}