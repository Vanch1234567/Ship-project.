var ship,ship_sailing,edges;

var seaFloor,floor

function preload(){

ship_sailing = loadAnimation("ship-3.png","ship-4.png");

seaFloor = loadImage("sea.png")
}

function setup(){

createCanvas(400,400);

// create ship
ship = createSprite(370,300);
ship.addAnimation(ship_sailing);
ship.scale = 0.7

floor = createSprite(40,40);
floor.addImage(seaFloor);
}

function draw(){

background("white")

drawSprites();
}