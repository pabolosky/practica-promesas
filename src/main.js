import { getEmpleado } from "./services/getEmpleadoServices.js"
import { getSalario } from "./services/getSalarioServices.js"

let btn = document.getElementById("userNumber")
let salida = document.getElementById("usuarios")

function getIdFromButton(){

    console.log("---------------------------------------")
    console.log("Llamada a la función GET ID FROM BUTTON")
    console.log("---------------------------------------")


    let input = prompt("Introduce el número del usuario")
    let id = Number(input)

    if(Number.isNaN(id)){
        alert("No has introducido un número")
        return
    }
    return id
}

// Ejerciocio 1

function findEmpleado(id){
    console.log("----------------------------------")
    console.log("Llamada a la función FIND EMPLEADO")
    console.log("----------------------------------")

    Promise.all([getEmpleado(id), getSalario(id)])
    .then(([empleado, salario]) => {
        console.log("PROMISE RESOLVE, PASO POR EL THEN")
        console.log(empleado, "empleado")
        console.log(salario, "salario")

        let p = document.createElement("p")
        p.textContent = `El empleado buscado es: ${empleado} con salario ${salario}`
        salida.textContent = err
    })
    .catch((err) =>{
        console.log("PROMISE REJECT, PASO POR EL CATCH")
        console.log(err, "err")
        salida.textContent = err
    })

}

// Ejercicio 2

// function findEmpleado(id){
//     console.log("----------------------------------")
//     console.log("Llamada a la función FIND EMPLEADO")
//     console.log("----------------------------------")

//     getEmpleado(id)
//     .then((empleado) => {
//         console.log("PROMISE RESOLVE, PASO POR EL THEN")
//         console.log(empleado, "empleado")
//         salida.textContent = `El empleado buscaod es ${empleado}`
//     })
//     .catch((error) => {
//         console.log("PROMISE REJECT, PASO POR EL CATCH")
//         console.log(error, "error")
//         salida.textContent = error
//     })

// }




btn.addEventListener("click", () =>{

    console.log("---------------------------------------")
    console.log("Llamada a la función ADD EVENT LISTENER")
    console.log("---------------------------------------")

    try{
        let id = getIdFromButton()
        findEmpleado(id)
    } catch (error){
        salida.textContent = error.message
    }

})



































