import { cartas} from "./data.js";

import { mesclarCartas, cargarCartas } from "./funcionesCartas.js";

function duplicarCartas(){
    let allCartas = cartas.concat(cartas);
    return mesclarCartas (allCartas);
}


function cargarTablero (){
    let cartasMescladas = duplicarCartas();
    return cargarCartas(cartasMescladas);
}


export { cargarTablero};
    