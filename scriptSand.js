
let sand, ground;
let sandPile;

// default sand pile height
let sandHeight = 10; 
let sandThreshold = 200;

let prevSandPileHeight = 0;

let windAni;

let gameEnd = document.getElementById("game-end");

function setup() {
    var cnv = new Canvas(400, 400);
    // cnv.parent("canva");
    background(0, 0, 0, 0);
    world.gravity.y = 20;

    noStroke();

    sand = new Group();
    sand.mass = 3;
    sand.vel.y = 0;
    sand.height = 5;
    sand.width = 5;

    sandPile = new SandPile();
    sandPile.generate();

    windAni = loadAni("img/wind1.png", 16);
    windAni.frameDelay = 8;
}

function draw() {
    clear();

    background(0, 0, 0, 0);

    updateSkyColor();

    if (sandHeight <= sandThreshold) {
        let sandPileHeight = sandHeight * 1;
        if (sandPileHeight != prevSandPileHeight){
            // sandPile.remove();
            sandPile.updateHeight(sandHeight * 1);
            sandPile.display();
        }

        prevSandPileHeight = sandPileHeight;
        
    }
    

    if (mouse.pressing()) {
        for (let i = 0; i < 2; i++){
            let newSand = new sand.Sprite(mouse.x, mouse.y);
            newSand.layer = 1;
            let random = Math.random();
            if (random > 0.9) {
                newSand.color = color(196, 155, 81);
            }
            else{
                newSand.color = color(222, 193, 140);
            }
        }
        sandHeight = sandHeight + 2;
    }
    else{
        // the wind
        if (sandHeight > 15){
            sandHeight = sandHeight - 0.3;
        }  
    }

    if (sandHeight > sandThreshold){
        updateCloudsPos();
    }

    if (sandHeight > 200) {
        prizeImg.style.opacity = 1;
        prizeGenerated = true;
    }

    // when player win
    if (prizeGenerated && sandHeight <= 15){
        prizeImg.src = "img/prize2.png";
        gameEnd.style.opacity = 1;
    }

    heightText.innerHTML = "HEIGHT: " + Math.round(sandHeight);


    // display wind
    if (sandHeight > 15){
        animation(windAni, 80, 130);
        animation(windAni, 300, 100);
    }
}

class SandPile {
    constructor(height) {
        // the given height must be the multiply of 5
        this.height = height;
        this.sandParticles = [];
        this.maxHeight = 200;
    }


    display(){
        let count = 0;
        let maxLength = 400;

        // display the sand that exsit
        for (let i = 0; i < this.height / 5; i++){
            for (let j = 0; j < maxLength / 5; j++){

                var currentParticle = this.sandParticles[count];
                currentParticle.visible = true;
                count += 1;
            }
            maxLength = maxLength - 2 * 5;
        }

        // remove the rest
        for (let i = 0; i < this.sandParticles.length - count; i++ ){
            var currentParticle = this.sandParticles[count + i];
            currentParticle.visible = false;
        }
    
    }

    updateHeight(newHeight){
        this.height = newHeight;
    }

    remove() {
        for (let i = 0; i < this.sandParticles.length; i++){
            this.sandParticles[i].remove();
        }
    }

    generate() {
        let maxLength = 400;
        for (let i = 0; i < this.maxHeight / 5; i++){
            for (let j = 0; j < maxLength / 5; j++){
                let xPos = j * 5 + (400 - maxLength) / 2;
                let yPos = 400 - i * 5;

                // draw each sand
                let sandParticle = new Sprite();

                // random color
                let random = Math.random();
                if (random > 0.8) {
                    sandParticle.color = color(196, 155, 81);
                }
                else{
                    sandParticle.color = color(222, 193, 140);
                }
                
                sandParticle.stroke = color(0, 0, 0, 0);
                sandParticle.width = 5;
                sandParticle.height = 5;
                sandParticle.x = xPos;
                sandParticle.y = yPos;
                sandParticle.visible = false;
                // sandParticle.collider = 'static';
                sandParticle.collider = 'none';
                sandParticle.layer = 2;


                this.sandParticles.push(sandParticle);
            }
            maxLength = maxLength - 2 * 5;
        }
    }
}