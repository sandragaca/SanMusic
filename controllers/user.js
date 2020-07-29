function pruebas(req, res){
    res.status(200).send({
        message:'funciona el controlador de prueba'
    })
}

module.exports= {
    pruebas,
    
}