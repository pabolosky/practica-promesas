import { empleados } from "../../public/data/info.js"

export function getEmpleado(id){

    console.log("---------------------------------")
    console.log("Llamada a la función GET EMPLEADO")
    console.log("---------------------------------")

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let empleado = empleados.find( e => e.id === id) ?.nombre

            if(empleado){
                resolve(empleado)
            }else{
                reject(`Empleado con id ${id} no existe`)
            }
        }, 800)
    })
    return promesa
}