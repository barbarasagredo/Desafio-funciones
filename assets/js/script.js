// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

function pintar(element, color = "green", fontColor = "white") {
  element.style.backgroundColor = color;
  element.style.color = fontColor;
}

const ele = document.getElementById("ele1");

pintar(ele);

ele.addEventListener("click", function (event) {
  pintar(event.target, "yellow", "black");
});