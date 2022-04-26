const selectColor = document.querySelector("#selectColor");
const title = document.querySelector(".main__title");
selectColor.value = "#ffffff";

selectColor.addEventListener("input", bgColor);

function bgColor() {
  document.body.style.backgroundColor = selectColor.value;
}
