
const datos = {
    name: prompt("Cual es tu nombre"),
    age:prompt("cual es tu edad"),
    matricula:false
   
}
if (datos.age >= 20 ) {
    datos.matricula = true
} 
let mensaje = () => 'Hola ' + datos.name + ' si estas matriculada :)'
let resultado = mensaje(datos)

console.log(datos.matricula)
console.log(datos) 

alert(resultado)




    
