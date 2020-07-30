const User = require("../models/user");
const bcrypt = require("bcrypt-nodejs");



function pruebas(req, res){
    res.status(200).send({
        message:'funciona el controlador de prueba'
    })
};

function create(req, res){
    const newUser = new User();
    const paramsBody = req.body;

    newUser.firstName = paramsBody.firstName;
    newUser.lastName = paramsBody.paramsBody;
    newUser.email = paramsBody.email.toLowerCase();
    newUser.role = "Rol-user";
    newUser.image ="null";


    if(paramsBody.password){
        bcrypt.hash(paramsBody.password, null, null, function(err,hash){
            newUser.password = hash;

            if(newUser.firstName!=null && newUser.lastName !=null && newUser.email !=null){
                if(User.findOne(newUser.email)){
                    res.status(200).send({message:"El correo ya existe"});
                    
                }else{
                    newUser.save((err,userCreate)=>{

                        if(err){
                            res.status(404).send({
                                message:'Error al guardar usuario'
                            
                            });

                        }else{
                            if(!userCreate){
                                res.status(400).send({message:"No se ha registrado el usuario"});
                            }else{
                                res.status(200).send({newUser:useCreate});
                            }
                        }
                    });
                }
            }
        

        });



    }else{
        res.status(200).send({message:"Introduce la contraseña"})
    }




}

module.exports= {
    pruebas,
    create
    
}