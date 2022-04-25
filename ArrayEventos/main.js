let emoji =["🌶","🤔","🎂","🍺","🍄","👀","😜","🍕","😪","🍋","🕟"];
let arr=[];


function aleatorio(){
numero = Math.random()*10;
numero = Math.floor(numero);
return numero;
}



function mostrarArray(){
    const array = document.getElementById('array');
    
    array.textContent = arr;
}


function push(){
    arr.push(emoji[aleatorio()]);
    console.log(arr)
    mostrarArray();
}


function unshift(){
    arr.unshift(emoji[aleatorio()]);
    mostrarArray();
}

function insertAt(){
   var posicion = document.getElementById('posicionAdd');
   posicion = posicion.value -1;
    arr.splice(posicion,0,emoji[aleatorio()]);
    mostrarArray();
}

function pop(){
    arr.pop()
    mostrarArray();
}


function shift(){
    arr.shift()
    mostrarArray();
}


function removeAt(){
    var posicion = document.getElementById('posicionRemove');
    posicion = posicion.value -1;
    console.log(posicion);
    arr.splice(posicion,1);
    mostrarArray(); 
}   


console.log(arr);