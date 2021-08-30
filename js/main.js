/*para saber la ubicacion de donde estamos en la pagina*/
let ubicacionPrincipal = window.pageYOffset; //0
AOS.init();
/*cada vez que se haga scroll haz esto*/
window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset; //100
    if (ubicacionPrincipal >= desplazamientoActual) { //0 > 100? no
        document.getElementsByTagName("nav")[0].style.top = "0px"
    } else { //scroll hacia abajo
        this.document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; //100
})

///menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
/*si el semaforo que en este caso es el icono del menu es true, estara en blanco, es decir el menu esta abierto, y si esta cerrado es decir false, sea negro*/
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
})