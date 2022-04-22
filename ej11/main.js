

let numero = 1;
let i = 0;

do{
    if(i===0){
        i++;
        numero--;
        console.log(numero);
    } else{
        numero++;
        console.log(numero);
    }
}while(numero < 5);

/*Entra en el if ya que le definimos la variable i con valor 0
al principio.
Su comportamiento cambia una vez ya ha entrado en el if, no vuelve a entrar porque le suma un numero a la variable i.
Mostrara por pantalla la variable numero y a partir de ahi solo entrara en el else que le sumara un numero cada vez hasta que el numero sea mayor que 5.