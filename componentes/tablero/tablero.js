import { todas_las_cartas } from "./data.js";


function item (contenido){
    let div = document.createElement('div');
    div.textContent = contenido;
    div.className ="carta";
    
    let frente = document.createElement('div');
    frente.className = "frente";
    frente.textContent = contenido; 

    let reverso = document.createElement('div');
    reverso.className = "reverso";
    reverso.textContent = ":)"; 

    div.appendChild(frente);
    div.appendChild(reverso);

    div.classList.add("girada");




    return div;

}
    


function cargarCartas(){
   
    let div = document.createElement('div');
    div.className = "div-Tablero";
    
   
    todas_las_cartas.forEach((letra)=>{
        div.appendChild(item(letra));
    });

    return div;

  
}

export { cargarCartas};