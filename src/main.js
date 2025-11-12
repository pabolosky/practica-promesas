import { getPais } from "./services/getPaisServices.js"
import { getRegion } from "./services/getRegionServices.js"

let salida = document.getElementById("show")

function getIdFromButton(){
    
    let input = prompt("Introduce el número del usuario")
    let id = Number(input)

    if(Number.isNaN(id)){
        alert("No has introducido un número")
        return
    }
    return id
}

function mostrarPaisYRegion(id){
    
    Promise.all([getPais(id), getRegion(id)])
    .then(([pais, region]) => {
        console.log(pais, "País")
        console.log(region, "Región")

        salida.textContent = `El país del sitio buscado es ${pais} y la región ${region}`
    })
    .catch((err) =>{
        console.log(err, "err")
        salida.textContent = err
    })
    
}



document.getElementById("btn").addEventListener("click", () =>{

    try{
        let id = getIdFromButton()
        mostrarPaisYRegion(id)
    } catch (error){
        salida.textContent = error.message
    }

})























