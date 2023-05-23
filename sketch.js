//Trex juego multiplayer
var trex1,trexRunning1,trexCollided1,down1;//player1
var trex2,trexRunning2,trexCollided2,down2;//player2

var ground, invisibleGround, groundImage;//arriba
var ground2, invisibleGround2;//abajo


//cerrar codigo al terminar :)

var nube, cloud;
var obstacleImg, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img
var score=0;
var obstacleGroup;
var gameState = "serve";
var play = 1;
var end = 0;
var restartImg, restart;
var gameOverImg, gameOver;
var NubesGroup;
var muerte, checkPoint, jump;


function preload(){
 trexRunning1 = loadAnimation("./assets/trex1.png","./assets/trex2.png","./assets/trex3.png");
  //trexcollided1 = loadAnimation("trex_collided.png");
 groundImage = loadImage("/assets/ground2.png");

 nube = loadImage("./assets/cloud.png");

 //tareas: carga imagenes de obstaculos y de nubes.
 
}

function setup() {
  createCanvas(windowWidth,windowHeight/2);

  console.log(windowHeight);
 
  trex1=createSprite(150, 135, 60, 70);//arriba
  trex1.shapeColor="blue";
  trex1.addAnimation("corriendo",trexRunning1);
  
  trex2=createSprite(150, 355, 60, 70);//abajo
  trex2.shapeColor="red";
  trex2.addAnimation("corriendo",trexRunning1);
  
  ground=createSprite(300,580,windowHeight,10);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  ground2=createSprite(300,277,windowWidth,10);
  ground2.addImage("ground", groundImage);
  ground2.x = ground2.width /2;

  invisibleGround = createSprite(300,280,windowHeight,10);
  invisibleGround.visible=false;

  invisibleGround2 = createSprite(300,580,windowHeight,10);
  invisibleGround2.visible=false;

  
}

function draw() {
  background("#b9bbbe");  
  strokeWeight(2);
  stroke("#7fff00");
  ellipse(mouseX,mouseY,10,20);
  noStroke();
  //movimeinto en coordenas
  fill("blue");
  textSize(30);
  text("X "+mouseX+","+"Y "+mouseY,mouseX,mouseY);

  if(ground.x <= 0 || ground2.x<0){
    ground.x=ground.width/2;
    ground2.x=ground2.width/2;
  }

  if (keyDown("space") && trex1.y>=165) {
  trex1.velocityY = -10;
  }else if(keyDown("UP_ARROW") && trex2.y>=450) {
    trex2.velocityY = -10;
  }

  trex1.velocityY = trex1.velocityY + 0.8;
  trex2.velocityY = trex2.velocityY + 0.8;
 
  Vel();

  trex1.collide(invisibleGround);
  trex2.collide(invisibleGround2);
 

  nubes();

  drawSprites();
}


function nubes(){
  

  if(frameCount%85==0){
    cloud= createSprite(windowWidth,440,40,10);
    cloud.shapeColor="red";
    cloud.velocityX=-4;
    cloud.addImage(nube);
    cloud.scale=1.5;
    
    cloud.y=Math.round(random(300,440));
    console.log(cloud);
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth+1;
    //tiempo de vida
    //cloud.lifetime = 250;
   // NubesGroup.add(cloud);
  }
}


function Vel(){
  //nubes 

  //obstaculos

  //suelo
  ground.velocityX=-10;
  ground2.velocityX=-10;

}

function obstacles(){
  if(frameCount%65 == 0){
    var obstacle1 = createSprite(550,165,10,30);//Trex1
    var obstacle2 = createSprite(550,165,10,30);//Trex2
   // obstacle1.velocityX=-4;

    /*var rando1= Math.round(random(1,6));
      var rando2= Math.round(random(1,6));
    
    switch(rando1){
    case 1: obstacle1.addImage(obstacle1Img);
             break;
    case 2: obstacle1.addImage(obstacle2Img);
             break;
    case 3: obstacle1.addImage(obstacle3Img);
             break;
    case 4: obstacle1.addImage(obstacle4Img);
             break;
    case 5: obstacle1.addImage(obstacle5Img);
             break;
    case 6: obstacle1.addImage(obstacle6Img);
             break;
    default:break;
    }*/
    /*obstacle1.lifetime = 250;
    obstacle1.scale = 0.4,5;
    obstacle1.depth = trex.depth;
    trex.depth = trex.depth+1;
    obstacleGroup.add(obstacle1);*/
 }
}


function keyDownEspacio(){
  if (gameState=="play"){
    ball.velocityX = 4;
    ball.velocityY = 4;
  }
}