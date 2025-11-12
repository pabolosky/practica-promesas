import { salarios } from "../../public/data/info"

export function getSalario(id){

    console.log("---------------------------------")
    console.log("Llamada a la función GET SALARIO")
    console.log("---------------------------------")

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let salario = salarios.find( e => e.id === id) ?.salario

            if(salario){
                resolve(salario)
            }else{
                reject(`No hay salario para el id ${id}`)
            }
        }, 800)
    })
    return promesa
}