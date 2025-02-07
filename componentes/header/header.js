function ContHeader() {
    let header = document.createElement("header");
    header.className = "header";

 
    let TituloPri = document.createElement("div");
    TituloPri.className = "titulo-Pri";

     
    let titulo = document.createElement("h1");
    titulo.textContent = "Astronomia";



    let img = document.createElement("img");
    img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lovepik.com%2Ffree-png%2F20210923%2Flovepik-yellow-star-png-image_401184076_wh1200.png&f=1&nofb=1&ipt=eebc21b19e65b1bfb8e5d2a1670c939e8c290230d4aaf0491bcace0630f65d0d&ipo=images";  // ⚠️ Cambia la ruta correcta
    img.alt = "Logo";
    img.className = "logo-header";

   
    TituloPri.appendChild(img);
   TituloPri.appendChild(titulo);

    let nav = document.createElement("nav");
    nav.className = "navHeader";

    let botones = ["Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5", "Salir"];

    botones.forEach((texto) => {
        let boton = document.createElement("button");
        boton.textContent = texto;
        boton.className = "btn-fase";
        nav.appendChild(boton);
    });

  
    header.appendChild(TituloPri);
    header.appendChild(nav);

    return header;
}

export { ContHeader };
