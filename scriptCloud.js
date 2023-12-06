let sandHeight = 500;

let cloudGroup = document.getElementById("cloud-group");

let heightText = document.getElementById("height");


function createClouds() {
    for (let i = 0; i < 30; i++) {
        // add the first cloud
        var img1 = document.createElement("img");
        img1.src = "img/cloud1.png";
        img1.class = "clouds";
        img1.style.width = "121px";
        img1.style.top = 50 - (i * 230) + "px";
        img1.style.position = "absolute";
        img1.style.left = "100px";
        cloudGroup.appendChild(img1);


        // add the second cloud
        var img2 = document.createElement('img');
        img2.src = "img/cloud2.png";
        img2.class = "clouds";
        img2.style.width = "75px";
        img2.style.top = 150 - (i * 230) + "px";
        img2.style.position = "absolute";
        img2.style.left = "270px";
        cloudGroup.appendChild(img2);

        // add the third cloud
        var img3 = document.createElement('img');
        img3.src = "img/cloud3.png";
        img3.class = "clouds";
        img3.style.width = "91px";
        img3.style.top = 160 - (i * 230) + "px";
        img3.style.position = "absolute";
        img3.style.left = "10px";
        cloudGroup.appendChild(img3);

        // add the third cloud
        var img4 = document.createElement('img');
        img4.src = "img/cloud4.png";
        img4.class = "clouds";
        img4.style.width = "132px";
        img4.style.top = 5 - (i * 230) + "px";
        img4.style.position = "absolute";
        img4.style.left = "250px";
        cloudGroup.appendChild(img4);
    }
}


function updateCloudsPos() {

    cloudGroup.style.top = sandHeight + "px";

    heightText.innerHTML = "HEIGHT: " + Math.round(sandHeight);
}


createClouds();