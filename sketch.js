var City
var boy
var BoyRunning
var Obstacle

function preload(){
  City =loadImage("City Bg For School Runner Game.png");
  Running = loadImage("Boy_Running.PNG")
  Obstacle = loadImage("Barricade.png")
}




function setup() {
  createCanvas(windowWidth,635);
  Bg = createSprite(770,300,2500,1080)
  Bg.addImage(City)
  Boy = createSprite(200,530,20,50);
  Boy.addImage(Running)
  Boy.scale=0.35
  Bar = createSprite(700,580,20,50);
  Bar.addImage(Obstacle)
  Bar.scale=0.225
  Bg.scale=1.0
  Ground = createSprite(635,633,windowWidth+100,5)
  

  

}

function draw() {
  background("black"); 
  Boy.collide(Ground)
  if(keyDown("space") && Boy.y >=  500 ) {
    Boy.velocityY = -15;
  }
  if (keyDown(RIGHT_ARROW)) {
    Boy.x = Boy.x+5
  }
  if (keyDown(LEFT_ARROW)) {
    Boy.x = Boy.x-5
  }
  Boy.velocityY = Boy.velocityY + 0.8
  drawSprites();
}