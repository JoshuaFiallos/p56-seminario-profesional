const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
app.use( router )

router.get('/carrera', function(req, res) {
    response.sucess( req, res, 'Lista de Carreras de la UPS', 200 )
    res.send( 'Lista de Carreras de la UPS' )
})
router.post('/carrera', function(req, res) {
    if(req.query.error == 'ok'){
        response.error( req, res, 'Error al ingresar a la carrera', 500 )
    } else {
        response.sucess( req, res, 'Ingreso de carrera exitoso', 201 )
    }
})

app.use( '/', express.static('public') )

app.listen( 5000 )
console.log( 'La aplicación está escuchando en http://localhost:5000' )