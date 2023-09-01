
class Alumno {
    constructor(nombre, promedio) {
        this.nombre = nombre
        this.promedio = promedio    
    }
}

const cantDeAlumnos =parseInt(prompt('Cuantos alumnos hay?'))
const cantidad = []

for (let i = 0; i < cantDeAlumnos; i++) {
    const nombre = prompt('Ingrese el nombre')
    const promedio = parseFloat(prompt('Ingrese el promedio'))
    if(promedio >= 7) {
        alert('Felicitaciones, aprobaste!')
    }if(promedio < 7)
        alert('Lo siento, nos vemos en diciembre')

    const nuevoAlumno = new Alumno (nombre, promedio)
    cantidad.push(nuevoAlumno)
}
    const aprobados = cantidad.filter(a => a.promedio >= 7)
    const nombresdelosaprobados = aprobados.map(n => n.nombre)
    
    
console.log(cantidad)
alert('Los aprobados son ' + nombresdelosaprobados)