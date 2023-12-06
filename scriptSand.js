
let sand, ground;
let sandPile;


let maxLength = 400

function setup() {
    var myCanvas = new Canvas(400, 400);
    myCanvas.parent("canva");
    background(0, 0, 0, 0);
    world.gravity.y = 10;

    noStroke();

    sand = new Group();
    // sand.color = color(222, 193, 140);
    // sand.stroke = color(0, 0, 0, 0);
    sand.mass = 3;
    sand.vel.y = 0;
    sand.height = 5;
    sand.width = 5;

    // ground = new Sprite();
    // ground.y = 400;
    // ground.w = 400;
    // ground.h = 1;
    // ground.collider = 'static';

    sandPile = new SandPile(180);
    sandPile.display();
}

function draw() {
    clear();

    background(0, 0, 0, 0);
    

    if (mouse.pressing()) {
        for (let i = 0; i < 2; i++){
            let newSand = new sand.Sprite(mouse.x, mouse.y);
            let random = Math.random();
            if (random > 0.9) {
                newSand.color = color(196, 155, 81);
            }
            else{
                newSand.color = color(222, 193, 140);
            }
        }

        sandHeight = sandHeight + 0.1;
        
        updateCloudsPos();
    }

}

class SandPile {
    constructor(height) {
        // the given height must be the multiply of 5
        this.height = height;
    }

    display() {
        for (let i = 0; i < this.height / 5; i++){
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
                // sandParticle.collider = 'static';
                sandParticle.collider = 'none';
                // rect(xPos, yPos, 5, 5);
            }
            maxLength = maxLength - 2 * 5;
        }
    }
}