import { cargarTablero } from "./componentes/tablero/tablero.js";
import { CargarFooter } from "./componentes/footer/footer.js";
import { cargarProgreso } from "./componentes/progreso/progreso.js";
import { girarCartas } from "./componentes/tablero/funcionesCartas.js";
import { ContHeader } from "./componentes/header/header.js";

function cargarDOM() {
    let DOM = document.querySelector("#root");

    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    let divheader = document.createElement("div");
    divheader.className = "div-header";
    divheader.appendChild(ContHeader());
    contenedor.appendChild(divheader);

    let divprogreso = document.createElement("div");
    divprogreso.className = "div-progreso";
    divprogreso.appendChild(cargarProgreso()); // Se agrega el contenido de progreso
    contenedor.appendChild(divprogreso);

    let divtablero = document.createElement("div");
    divtablero.className = "div-tablero";
    divtablero.appendChild(cargarTablero());
    contenedor.appendChild(divtablero);

    let divfooter = document.createElement("div");
    divfooter.className = "div-footer";
    divfooter.appendChild(CargarFooter()); // Se agrega el contenido del footer
    contenedor.appendChild(divfooter);

    DOM.appendChild(contenedor);
}

cargarDOM();
girarCartas();
