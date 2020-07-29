const express = require('express');
const UserController = require('../controllers/user')

const api = express.Router()

api.get('/probando-controlador', UserController.pruebas)
/* aqui se van a tener varias rutas */

module.exports = api;