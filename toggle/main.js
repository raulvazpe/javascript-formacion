//Cambiar fondo rojo con toggle JQUERY

$(".jquery").click(function () {
    $(".parrafo").toggleClass("red");

});


//Cambiar fondo azul con toggle JavaScript
function blue() {

    let element = document.querySelector(".parrafo");
    element.classList.toggle("blue");

}
