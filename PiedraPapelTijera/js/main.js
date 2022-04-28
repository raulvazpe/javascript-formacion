const arr = ["piedra", "papel", "tijera"];
let contadorcpu = 0;
let contador = 0;
let bucle = true


    while (bucle) {

        console.log(eleccion);
        eleccioncpu = arr[random()];
        console.log("eleccioncpu " + eleccioncpu);

        if (eleccioncpu === "papel" & eleccion === "piedra" | eleccioncpu === "tijera" & eleccion === "papel" |
            eleccioncpu === "piedra" & eleccion === "tijera") {
            contadorcpu++;
            console.log(contadorcpu)
        } else if (eleccion === "papel" & eleccioncpu === "piedra" | eleccion === "tijera" & eleccioncpu === "papel" |
            eleccion === "piedra" & eleccioncpu === "tijera") {
            contador++;
            console.log(contador)
        }
        if (contador === 3) {
            bucle = false
        }
        else if (contadorcpu === 3) {
            bucle = false
        }
    }


function random() {
    let random = Math.random() * 2;
    random = Math.floor(random);
    console.log(random);
    return random
}





    //cuando seleccione un boton, que me muestre por pantalla mi eleccion
    //y la eleccion de la cpu


/*
}
function nuevoContenido() {
alert("carga el contenido nuevo");
document.open();
document.write("<h1>Quita el contenido viejo - Agrega el contenido nuevo!</h1>");
document.close();
}
*/
