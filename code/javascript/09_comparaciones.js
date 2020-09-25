var docente = {
    nombre: 'Guillermo',
    apellido: 'Pizarro'
}

var docente2 = {
    nombre: 'Dario',
    apellido: 'Huilcapi'
}

// Asignación por paso de valor
var otroDocente = {
    ... docente
}

console.log( docente == docente2 )

// Objetos diferentes (tienen diferentes direcciones de memoria)
console.log( docente == otroDocente )

console.log( otroDocente.nombre)

// Asignación por referencia
docente3 = otroDocente
otroDocente.nombre = 'Luis'

// Mismo objeto (tienen la misma dirección de memoria)
console.log( docente3 == otroDocente )
console.log( docente3 )
console.log( docente )