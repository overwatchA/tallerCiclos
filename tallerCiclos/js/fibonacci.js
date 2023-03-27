var fin = parseInt(prompt("Ingresa el nùmero hasta el que llegarà la serie de Fibonnaci"))
var anterior = 1
var presente = 0
var resultado = 1

for (i=1; resultado<=fin; i++){
    console.log (resultado)
    resultado = anterior + presente;
    anterior = presente;
    presente = resultado;
}