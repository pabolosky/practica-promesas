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

async function mostrarPaisAsync(id){
    try{
        let pais = await getPais(id)
        console.log(pais, "pais")

        salida.textContent = `El país del sitio buscado es ${pais}`
    }catch(error){
        console.log("Error:", error.message)
    }finally{
        console.log("Final")
    }
}   






document.getElementById("btn").addEventListener("click", () =>{

    try{
        let id = getIdFromButton()
        mostrarPaisAsync(id)
    } catch (error){
        salida.textContent = error.message
    }

})































