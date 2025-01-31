let DOM = document.querySelector("#root");

let Contenedor = document.createElement('div');
Contenedor.className ="contenedor";

let divHeader= document.createElement('div'); 
divHeader.className = "div-header";
Contenedor.appendChild(divHeader);

let divProgreso= document.createElement('div'); 
divProgreso.className = "div-progreso";
Contenedor.appendChild(divProgreso);

let divTablero= document.createElement('div'); 
divTablero.className = "div-tablero";
Contenedor.appendChild(divTablero);

let divFooter= document.createElement('div'); 
divFooter.className = "div-footer";
Contenedor.appendChild(divFooter);






DOM.appendChild(Contenedor); 