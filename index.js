const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/sanMusic', (err, res) =>{
    if(err){
        console.log('No se pudo conectar');
    }else{
        console.log('Se pudo conectar')
    }
})