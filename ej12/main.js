/*
EJERCICIO 1
let arr=['π','π³','π','π€¦ββοΈ','π','πΉ','π','π','π₯'];

for(var i = 0; i<arr.length; i++){
   if(arr[i]=='π'){
       arr.fill('πΊ',i+1); }
}

console.log(arr);*/


//EJERCICIO 2

/*
let arr=['π','π³','π','π','π','πΉ','π','π','π₯'];

function encontrarpina(){
    let pos = arr.indexOf('π')
    console.log('La piΓ±a esta en la posicion: '+pos)

}
encontrarpina();

*/

/* for(var i=0; i<arr.length; i++){
    if(arr[i]=='π'){
        console.log('La piΓ±a estΓ‘ en la posicion: '+(i+1));
    }
} */


//EJERCICIO 3

/*
let arr=['π','π³','π','π','π','πΉ','π','π','π₯'];

function borrrarpina(){
    let pos = arr.indexOf('π')
    let elementoEliminado = arr.splice(pos, 1)
    console.log(arr)

}
borrrarpina();

*/

//EJERCICIO 4


/*
frutas = ['π', 'π', 'π', 'π' , 'π'];

for(var i = 0; i < frutas.length; i++) {
  frutas[i] = frutas[i].replace('π', 'π');
}

console.log(frutas);
*/

// EJERCICIO 5
/*
let arr= ['πΆ', 'π₯', 'πΆ', 'π₯','πΆ', 'π₯'];

for(let i = 0; i<arr.length; i++ ){
    if(arr[i]=='πΆ'){
      arr.splice(i,0,'π₯΅')
    }
}

console.log(arr);
*/

// EJERCICIO 6
/*
let arr= ['π΄', 'π΄', 'π΄','π', 'π΄','π΄', 'π΄'];

for(let i = 0; i<arr.length; i++ ){
    if(arr[i]=='π΄' & arr[i+1]=='π΄'){
      arr.splice(i+1,0,'π')
    }
}

console.log(arr);
*/


