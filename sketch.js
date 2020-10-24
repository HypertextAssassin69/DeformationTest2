var car,wall;
var speed , weight,deformation;
var gameState = "start";
function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "purple";
  

  wall = createSprite(700,200,50,350);
  wall.shapeColor = "lightblue";

  

  
}

function draw() {
  background("Orange");

  drawSprites();
   if(gameState === "start"){
    textSize(30);
  fill("red"); 
    text("Press Space To Start The TEST.",200,200);
    car.shapeColor = "purple";
   }
 
  if (gameState === "start"&&keyDown("space")){
   gameState = "play";
   speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  deformation = (0.5 * speed * speed * weight/22500);
  }
 
  if (gameState === "play"){
  car.velocityX = speed;
  car.depth = 5;
  textSize(20);
  fill("red");
  text("Speed Of Car : "+speed,50,20);
  text("Weight Of Car: "+ weight,600,20);
  
  if(car.x + car.width > wall.x&&
    wall.x + wall.width > car.x&&
    car.y + car.height > wall.y&&
    wall.y + wall.height > car.y){
      
      if (keyWentDown("r")){
        gameState = "start";
        car.x = 50;
        car.velocityX = speed;
        speed = Math.round(random(55,90));
       weight = Math.round(random(400,1500));
       deformation = (0.5 * speed * speed * weight/22500);
       
      }
      car.velocityX = 0;
      textSize(50);
      text ("Deformation: "+ Math.round(deformation),200,200);
      text("Press R to Restart.",175,300)
      if(deformation>180){
        car.shapeColor = "red";
        textSize(20);
        fill("red");
        text("This accident can kill or can give major injuries to the passengers.",120,250);
      }
      if(deformation<180&&deformation>80){
        car.shapeColor = "yellow";
        textSize(20);
        fill("red");
        text("This accident will definetly harm or can give fractures to the passengers.",110,250);
      }
      if(deformation<80){
        car.shapeColor = "lightgreen";
        textSize(20);
        fill("red");
        text("This accident can harm or give small injuries to the passengers.",125,250)
      }
    }
  } 
}