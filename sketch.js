var car ;

function preload(){

  cari=loadImage("mainCar.png");
  track=loadImage("track2.png");
  opponent1=loadImage("o1.png");
  opponent2=loadImage("police1.png");
  opponent3=loadImage("police2.png");
  opponent4=loadImage("o4.png");
  opponent5=loadImage("o5.png");
  opponent6=loadImage("o6.png");
}

function setup(){
createCanvas(1200,900);

  car= createSprite(100,800,100,20);
  car.addImage("pc",cari);
  car.scale=0.5;

  ground=createSprite(60,600,1200,50);
  ground.x=ground.width/2;
  ground.addImage("track",track);
  ground.velocityX=-5;
  ground.depth=car.depth;
  ground.scale=2.5;
  car.depth+=1;


}

function draw(){

  background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(car.y>=700 && car.y<=950){
    if(keyDown("up"))
    {
      car.y-=5
    }
    if(keyDown("down"))
    {
      car.y+=5
    }
  }
opponents();
  drawSprites();
}

function opponents(){
  if(frameCount%150===0){
var opponent=createSprite(1200,random(700,900),100,20);
opponent.scale=0.5;
opponent.velocityX=-6;
var ran=Math.round(random(1,6))
switch(ran){

  case 1: opponent.addImage("o1",opponent1);
  break;
  case 2: opponent.addImage("o2",opponent2);
  break;
  case 3: opponent.addImage("o3",opponent3);
  break;
  case 4: opponent.addImage("o4",opponent4);
  break;
  case 5: opponent.addImage("o5",opponent5);
  break;
  case 6: opponent.addImage("o6",opponent6);
  break;
  default:break;

}
opponent.lifetime=1000;

  }
}