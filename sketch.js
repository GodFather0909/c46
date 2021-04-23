var backgroundImg;
var bird,birdImg;
var pipeUpImg;
var pipeDownImg; 
var ground ,groundImg;

function preload(){
backgroundImg=loadImage("bg.jpeg")
birdImg=loadAnimation("flappybird1.png","flappybird2.png","flappybird3.png")
groundImg = loadImage("ground.png")
}

function setup(){
  createCanvas(1200,700);

  ground=createSprite(0,800,1200,70);
  ground.addImage("groundImg",groundImg);
  ground.velocityX = -4;
  ground.scale = 0.7;
  
   
  bird=createSprite(200,200)
  bird.addAnimation("birdImg",birdImg);
  bird.scale=0.3;
}


function draw(){
    background(backgroundImg);







    if(ground.x< 0){
        ground.x = 1500;
    }




    bird.collide(ground);

    flyBird();

    drawSprites();
}

function flyBird(){
    if(keyDown("space")){
        bird.velocityY=-15;
        
    }
    bird.velocityY = bird.velocityY + 1;
}

