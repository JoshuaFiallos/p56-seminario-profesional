var nombre = 'Joshua'
var apellido = 'Fiallos'

var nombre_ = 'joshua', apellido_ = 'fiallos'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMayusculas = apellido.toUpperCase()

// Javascript puro
console.log( nombreMayusculas + ' ' + apellidoMayusculas )

// Especificaciones Javascript - Ecmascript
console.log( `${nombre} ${apellidoMayusculas}` )

var primeraLetraNombre = nombre.charAt(0)
var longitudNombre = nombre.length
var subcadenaNombre = nombre.substr(1, 3)

console.log( primeraLetraNombre )
console.log( longitudNombre )
console.log( subcadenaNombre )