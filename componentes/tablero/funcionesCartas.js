import { item } from "./itemCarta.js";

function mesclarCartas (todas_las_cartas){

    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]];
    }
    
    return todas_las_cartas;
}

function cargarCartas(todas_las_cartas){
   
    let div = document.createElement('div');
    div.className = "div-Tablero";
    
   
    todas_las_cartas.forEach((letra)=>{
        div.appendChild(item(letra));
    });

    return div;

  
}

export {mesclarCartas, cargarCartas}

function girarCartas() {

 

let todas_las_cartasDelDOM = document.querySelectorAll('.carta');
todas_las_cartasDelDOM.forEach(cadaCarta => {

    cadaCarta.addEventListener("click", ()=>{
        cadaCarta.classList.toggle("girada");
    })

})
}
    


export {girarCartas}