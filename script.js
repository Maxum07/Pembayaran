const noBtn = document.getElementById("noBtn");
const area = document.querySelector(".buttons");

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton(){

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}