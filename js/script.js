const msgBox = document.querySelectorAll(".read");
const redDot = document.querySelectorAll(".red-dot");
const msgNum = document.querySelector(".num-of-msg");

document.querySelector(".read-button").onclick = function () { readFunc() };
function readFunc() {
    msgNum.style.color = "white";
    msgNum.style.fontWeight = "800";
    msgNum.innerHTML = "0";
    msgBox.forEach((msgBox) => {
        msgBox.style.backgroundColor = "white";
    });
    redDot.forEach((redDot) => {
        redDot.style.display = "none";
    });

}