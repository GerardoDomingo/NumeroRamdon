var intentos = 0;
var numeroAleatorio;

function generarNumero() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  alert("Se genero el numero aleatorio: ");
  intentos = 0;
  document.getElementById("intentos").value = "Intentos: " + intentos;
}

function verificarNumero() {
  var numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);
  
  if (numeroAleatorio === undefined) {
    alert("Por favor, genera un número aleatorio primero.");
    return;
  }
  
  intentos++;
  document.getElementById("intentos").value = "Intentos: " + intentos;
  numeroAleatorio
  if (numeroIngresado > numeroAleatorio) {
    alert("el numero es menor");  } 
else if(numeroIngresado < numeroAleatorio)
{
    alert("el numero es mayor");
}else if(numeroIngresado == numeroAleatorio)
{   
    alert("el numero es " + numeroAleatorio);
}
}

  

