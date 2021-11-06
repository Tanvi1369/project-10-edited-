var shipImg , shipImg1 , sea,ship;

function preload(){
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
shipImg = loadImage("sea.png");
shipImg1.addImage(shipImg);
ship.addAnimation("movingShip",shipImg1);
 
}

function setup(){
  createCanvas(400,400);
  background("blue");
 sea = createSprite(400,200);
    sea.addImage(seaImg);
    sea.x = ground.width /2;
    sea.velocityX = -5;
    sea.scale=0.3;
    ship = createSprite(130,200,30,30);
    ship.scale =0.25; 
}

function draw() {
  background("blue");

  if ( sea.x < 0){
    sea.x = sea.width/2;
  }

}