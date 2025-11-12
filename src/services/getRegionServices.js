import { sitios } from "../../public/data/info.js"

export function getRegion(id){

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let pais = sitios.find( e => e.id === id) ?.Region

            if(pais){
                resolve(pais)
            }else{
                reject(`Sitio con id ${id} no existe`)
            }
        }, 800)
    })
    return promesa
}