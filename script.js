
let sand, ground;
let leftWall, rightWall;

function setup() {
    new Canvas(400, 400);
    background(237, 255, 252);
    world.gravity.y =10;

    sand = new Group();
    sand.color = color(222, 193, 140);
    sand.stroke = color(0, 0, 0, 0);
    sand.mass = 3;
    sand.vel.y = 0;
    sand.height = 5;
    sand.width = 5;

    ground = new Sprite();
    ground.y = 400;
    ground.w = 400;
    ground.h = 1;
    ground.collider = 'static';

    leftWall = new Sprite();
    leftWall.y = 200;
    leftWall.x = 0;
    leftWall.w = 1;
    leftWall.h = 400;
    leftWall.collider = 'static';

    rightWall = new Sprite();
    rightWall.y = 200;
    rightWall.x = 400;
    rightWall.w = 1;
    rightWall.h = 400;
    rightWall.collider = 'static';
}

function draw() {
    clear();

    background(212, 243, 255);

    if (mouse.pressing()) {
        for (let i = 0; i < 2; i++){
            new sand.Sprite(mouse.x, mouse.y);
        }
    }
}