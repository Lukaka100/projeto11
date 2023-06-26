var mar

function preload() {
  navio1 = loadAnimation("ship-1.png", "ship-2.png")
  marImg = loadImage("sea.png")

}

function setup() {
  createCanvas(400, 400);
  
  mar=createSprite(400,20);

  mar.addImage("mar.png", marImg);

  navio=createSprite(130,200,30,30)

  navio.addAnimation("moving", navio1)
  navio.scale=0.2
}

function draw() {
  background("blue");
  drawSprites();

  if (mar.x < 0) {
    mar.x = mar.width/2
  }
}
