let vector = [];
      
function agregarNumero() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  vector.push(numeroAleatorio);
  alert("Se ha agregado el número " + numeroAleatorio + " al vector.");
}

function mostrarVector() {
  document.getElementById("resultado").innerHTML = "El vector es: " + vector;
}

function ordenarVector() {
  vector.sort(function(a, b){return a-b});
  alert("Se ha ordenado el vector de manera ascendente.");
}

function validarNumero() {
  let numeroIngresado = document.getElementById("numero").value;
  if (vector.includes(parseInt(numeroIngresado))) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
  }
}