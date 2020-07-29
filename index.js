const mongoose = require ('mongoose');
const app = require('./app');
const port = 3000;


mongoose.connect('mongodb://localhost:27017/sanMusic', (err, res) =>{
    if(err){
        console.log('No se pudo conectar');
    }else{
        console.log('Se pudo conectar')
        app.listen(port, () =>{
            console.log(`El demon esta vigilando el puerto ${port}`)
        })
    }
})