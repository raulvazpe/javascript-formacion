/*
EJERCICIO 1
let arr=['😍','😳','😂','🤦‍♀️','🍕','🌹','💋','👏','🥙'];

for(var i = 0; i<arr.length; i++){
   if(arr[i]=='🍕'){
       arr.fill('🍺',i+1); }
}

console.log(arr);*/


//EJERCICIO 2

/*
let arr=['😍','😳','😂','🍍','🍕','🌹','💋','👏','🥙'];

function encontrarpina(){
    let pos = arr.indexOf('🍍')
    console.log('La piña esta en la posicion: '+pos)

}
encontrarpina();

*/

/* for(var i=0; i<arr.length; i++){
    if(arr[i]=='🍍'){
        console.log('La piña está en la posicion: '+(i+1));
    }
} */


//EJERCICIO 3

/*
let arr=['😍','😳','😂','🍍','🍕','🌹','💋','👏','🥙'];

function borrrarpina(){
    let pos = arr.indexOf('🍍')
    let elementoEliminado = arr.splice(pos, 1)
    console.log(arr)

}
borrrarpina();

*/

//EJERCICIO 4


/*
frutas = ['🍓', '🍋', '🍓', '🍋' , '🍓'];

for(var i = 0; i < frutas.length; i++) {
  frutas[i] = frutas[i].replace('🍓', '🍄');
}

console.log(frutas);
*/

// EJERCICIO 5
/*
let arr= ['🌶', '🥛', '🌶', '🥛','🌶', '🥛'];

for(let i = 0; i<arr.length; i++ ){
    if(arr[i]=='🌶'){
      arr.splice(i,0,'🥵')
    }
}

console.log(arr);
*/

// EJERCICIO 6
/*
let arr= ['🎴', '🎴', '🎴','🃏', '🎴','🎴', '🎴'];

for(let i = 0; i<arr.length; i++ ){
    if(arr[i]=='🎴' & arr[i+1]=='🎴'){
      arr.splice(i+1,0,'🃏')
    }
}

console.log(arr);
*/


