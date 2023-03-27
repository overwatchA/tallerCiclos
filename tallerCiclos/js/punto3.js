var numero1 = parseInt(prompt("Ingresa el primer nùmero"));
var numero2 = parseInt(prompt("Ingresa el segundo nùmero"));
var resultado = 0;

if (numero1 <= numero2){
    for(let j = numero1; j <= numero2; j++){
        resultado += j;
    }
    console.log("El resultado de la suma es " + resultado)
}


