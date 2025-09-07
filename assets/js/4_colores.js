function pintarNegro(elemento) {
  elemento.style.backgroundColor = "black";
}

function activarEvento(id) {
  const div = document.getElementById(id);
  div.addEventListener("click", function (event) {
    pintarNegro(event.target);
  });
}

activarEvento("red-div");
activarEvento("green-div");
activarEvento("yellow-div");
activarEvento("blue-div");
