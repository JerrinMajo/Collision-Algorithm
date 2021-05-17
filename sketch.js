var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  
  fixedRect=createSprite(100, 300, 50, 80);
  movingRect=createSprite(1000, 300, 80, 30);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=4;
  movingRect.shapeColor="green";
  movingRect.velocityX=-4;
}

function draw() {
  background(0,0,0);
  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  /*if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }

  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }*/

   if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }

  drawSprites();
}