let sandHeight = 0;


let allClounds = document.getElementsByClassName("clouds");
let cloudOne = document.getElementById("cloud1");

let cloudGroup = document.getElementById("cloud-group");


function updateCloudsPos() {

    cloudGroup.style.top = sandHeight * 10 + "px";

    // console.log(cloudOne.style.top);
    // cloudOne.style.top = parseInt(cloudOne.style.top.substring(0, -2)) + 1 + "px";
    // console.log(cloudOne.style.top);
}