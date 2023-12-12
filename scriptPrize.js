
const prizeGroup = document.getElementById("prize-group");
let prizeImg;
let prizeGenerated = false;

function createPrize() {
    prizeImg = document.createElement("img");
    prizeImg.src = "img/prize1.png";
    prizeImg.style.width = "42px";
    prizeImg.style.top = "342px";
    prizeImg.style.position = "absolute";
    prizeImg.style.left = "179px";
    prizeImg.id = "prize";
    prizeImg.style.opacity = 0;
    prizeGroup.appendChild(prizeImg);
}

createPrize();