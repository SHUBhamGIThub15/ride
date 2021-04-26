var balloon,balloonImage1,balloonImage2;
var database;
var height;

function preload(){
   bg =loadImage("Images/cityImage.png");
   balloonImage1=loadAnimation("Images/HotAirBallon-01.png");
   balloonImage2=loadAnimation("Images/HotAirBallon-01.png","Images/HotAirBallon-01.png",
   "Images/HotAirBallon-01.png","Images/HotAirBallon-02.png","Images/HotAirBallon-02.png",
   "Images/HotAirBallon-02.png","Images/HotAirBallon-03.png","Images/HotAirBallon-03.png","Images/HotAirBallon-03.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,650,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x =balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x =balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
   balloon.y =balloon.y -10
   balloon.scale=balloon.scale-0.0060
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y =balloon.y +10
    balloon.scale=balloon.scale+0.0060
  }

  drawSprites();
  
}

