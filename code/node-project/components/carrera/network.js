const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req, res) {
    response.sucess( req, res, 'Lista de Carreras de la UPS', 200 )
})
router.post('/', function(req, res) {
    if(req.query.error == 'ok'){
        response.error( req, res, 'Error al ingresar a la carrera', 500 )
    } else {
        response.sucess( req, res, 'Ingreso de carrera exitoso', 201 )
    }
})

module.exports = router