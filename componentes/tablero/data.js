
function mesclarCartas(){
    let carta_par_1 = ['🌑','✰','🌘','⚡','☀️','☪︎','✮⋆˙'];
    let carta_par_2 = ['🌑','✰','🌘','⚡','☀️','☪︎','✮⋆˙'];
    let todas_las_cartas = carta_par_1.concat(carta_par_2);

    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]];
    }

    return todas_las_cartas;
}

let todas_las_cartas = mesclarCartas();

export { todas_las_cartas };