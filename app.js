const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Rutas */
const user_routes = require('./routers/user')
/* aqui van varias rutas de los models que existan */

/* metodos para se parsee en json y viaje la informacion */

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

/* middleware */

app.use('/api', user_routes)
/* aqui van varias rutas hacia donde van los modelos */


/* comprobar que funcionara la api */
/* app.get('/pruebas', (req, res) =>{
    res.status(200).send({message: 'Esta conectada nuestra API'})
}) */


module.exports = app;

