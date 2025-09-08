let div = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    div.style.backgroundColor = "HotPink";
  } else if (event.key === "s" || event.key === "S") {
    div.style.backgroundColor = "Coral";
  } else if (event.key === "d" || event.key === "D") {
    div.style.backgroundColor = "SkyBlue";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    agregarCubo("MediumOrchid");
  } else if (event.key === "w" || event.key === "W") {
    agregarCubo("Silver");
  } else if (event.key === "e" || event.key === "E") {
    agregarCubo("SaddleBrown");
  }
});

function agregarCubo(color) {
  contenedor = document.querySelector("#key2");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.style.border = "1px solid black"

  contenedor.appendChild(nuevoElemento);
}
