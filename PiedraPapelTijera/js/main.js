const arr = ["piedra", "papel", "tijera"];
let contadorcpu = 0;
let contador = 0;
let bucle = true

function comenzar(eleccion) {

    addContadores();
    //eleccion = arr[random()];  //document.getElementById("piedra").value;
    console.log(eleccion);
    eleccioncpu = arr[random()];
    console.log("eleccioncpu " + eleccioncpu);
    let resultado = "<img src='./img/" + eleccioncpu + ".png' alt='" + eleccioncpu + "' width='60%'></img>";
    console.log(resultado);
    document.getElementById("imgcpu").innerHTML = resultado;


    if (eleccioncpu === "papel" & eleccion === "piedra" | eleccioncpu === "tijera" & eleccion === "papel" |
        eleccioncpu === "piedra" & eleccion === "tijera") {
        contadorcpu++;
        console.log(contadorcpu)
    } else if (eleccion === "papel" & eleccioncpu === "piedra" | eleccion === "tijera" & eleccioncpu === "papel" |
        eleccion === "piedra" & eleccioncpu === "tijera") {
        contador++;
        console.log(contador)
    }

    addContadores();

}

function reiniciar() {
    contador = 0;
    contadorcpu = 0;
    addContadores();
}

function random() {
    let random = Math.random() * 3;
    random = Math.floor(random);
    console.log(random);
    return random
}



function addContadores() {
    document.getElementById("local").innerHTML = "<p>" + contador + "</p>";
    document.getElementById("cpu").innerHTML = "<p>" + contadorcpu + "</p>";
    finPartida();


}
function alertaas(){
    alert("hij");
}

function finPartida() {
    if (contador === 3) {
        alert("has ganado");
        contador = 0;
        contadorcpu = 0;
        addContadores();
    }
    else if (contadorcpu === 3) {
        alert("has perdido");
        contador = 0;
        contadorcpu = 0;
        addContadores();
    }
}
