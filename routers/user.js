const express = require('express');
const UserController = require('../controllers/user')

const api = express.Router()

/* aqui se van a tener varias rutas */
api.get('/probando-controlador', UserController.pruebas);
api.post('/userRegister', UserController.create);


module.exports = api;