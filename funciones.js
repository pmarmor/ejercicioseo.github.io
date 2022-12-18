"use strict"
let crono=setInterval(cronometro,4000)//Cronometro del slider. Necesario para que se ejecute por primera vez, ya que luego se reinicia en
//la función cambiaImagenSlider

function cambiaImagenSlider(boton) {
    getDocumentName()
    clearInterval(crono)//Necesario para eliminar el cronometro de 8 segundos al pulsar una flecha. 
    crono=setInterval(cronometro,4000)//Volvemos con el valor inicial del cronometro después de borrar el crono de 8 segundos
    let sliderId=getSliderId()
    let img = getImgPath()
    let imagenes = ['url(img/sp2.png)','url(img/DeckLogoGold.png)','url(img/DeckLogoMagenta.png)'];
    let colores = ["rgba(0, 102, 255, 0.932)","rgba(255, 0, 0, 0.8)","rgba(255, 102, 0, 0.932)"];
    let titulos=["Bienvenidos a Deck Sp","Mejores ofertas para esta navidad","¿Qué hacer si tu Steam Deck no enciende?"];
    let i = 0;
    imagenes.forEach(elemento => {
        let rutaRelativa=elemento
        rutaRelativa=rutaRelativa.slice(4)
        rutaRelativa=rutaRelativa.slice(0,-1)
        if (img.includes(rutaRelativa)) {
            i = imagenes.indexOf(elemento)
        }
    });
    if (boton.id == "flechaDerecha" || boton=="crono") {
        if (i >= imagenes.length - 1) {
            i = -1
        }
        document.getElementById(sliderId).style.backgroundImage = imagenes[i + 1]
        document.getElementById("sliderLink").style.backgroundColor = colores[i + 1]
        document.getElementById("content").innerHTML=titulos[i+1]
    }
    else {
        if (i <= 0) {
            i = imagenes.length
        }
        document.getElementById(sliderId).style.backgroundImage = imagenes[i - 1]
        document.getElementById("sliderLink").style.backgroundColor = colores[i - 1]
        document.getElementById("content").innerHTML=titulos[i-1]
    }
    if(typeof boton.id !="undefined"){
        clearInterval(crono)
        crono=setInterval(cronometro,8000)
    }
}

function getImgPath() {
    let sliderId=getSliderId()
    let img = document.getElementById(sliderId);
    let styles = window.getComputedStyle(img);
    img = styles.backgroundImage;
    return img
}
function getSliderId(){
    let sliderId=""
    if(document.getElementById('slider') !="undefined" && document.getElementById('slider')){
        sliderId="slider"
    }
    if(document.getElementById('sliderTutoriales') !="undefined" && document.getElementById('sliderTutoriales') ){
        sliderId="sliderTutoriales"
    }
    return sliderId
}

/**
 * Obtiene nombre de la página
 * @returns nombre de la página
 */
function getDocumentName(){
    let path = window.location.pathname;
    let pagina = path.split("/").pop()
    return pagina
}
 function cronometro() {
    let boton="crono";
    cambiaImagenSlider(boton);


 } 