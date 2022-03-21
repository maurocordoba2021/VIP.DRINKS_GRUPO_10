
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersApiController = {
    list:(req,res)=>{
        db.User.findAll()
        .then(users=>{
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: "/users/apiUser"
                },
                data: users.map(user => {
                    return{
                        id: user.idUsers,
                        name: user.name,
                        surname:user.surname,
                        email: user.email,
                        image: "/images/imgUsers/" + user.img,
                        detail: "/users/apiUser" + user.idUsers
                    }
                })
            }
            res.json(respuesta)
        })
    },

     detail:(req,res)=>{
        db.User.findByPk(req.params.id)
        .then(user=>{
            let respuesta = {
                meta:{
                    status: 200,
                    total: user.idUsers,
                    url: "/users/apiUser" + user.id
                },
                data: {
                    id: user.idUsers,
                    name: user.name,
                    surname:user.surname,
                    email: user.email,
                    image: "/images/imgUsers/" + user.img,
                    detail: "/users/apiUser" + user.idUsers
                    }
            }
            res.json(respuesta)
        })
    } 

}

module.exports = usersApiController;