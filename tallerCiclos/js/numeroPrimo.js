var numero = prompt("Introduce un número entero positivo:");
var primo = 1;

if (numero < 2) {
  primo = 0;
}

for (var j = 2; j < numero; j++) {
  if (primo == 1 && Math.floor(numero/j) * j == numero) {
    primo = 0
  }
}
if (primo == 1) {
  console.log("El nùmero "+ numero + " es primo");
} else {
  console.log("El nùmero "+ numero + " no es primo");
}



