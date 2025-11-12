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

function mostrarPaisAsync(id){
    
        getPais(id)
        .then((pais) => {
            console.log(pais, "Pais")
            salida.textContent = `El país del sitio buscado es ${pais}`
        })
        .catch((error) => {
            console.log(error, "error")
            salida.textContent = error
        })
    
}



document.getElementById("btn").addEventListener("click", () =>{

    try{
        let id = getIdFromButton()
        mostrarPaisAsync(id)
    } catch (error){
        salida.textContent = error.message
    }

})































