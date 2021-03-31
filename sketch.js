var bullet;
var speed,weight;
var wall;
var thickness;
function setup() {
  createCanvas(800,400);
  thickness=random(10,20);
  bullet = createSprite(50, 100, 50,thickness);
  speed=random(10,200)
  bullet.velocityX=speed;
  wall = createSprite(750,100,thickness,width/2);
 
  weight=random(400,1000)
}

function draw() {
  background(780,87,45);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*speed*speed/(thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(25,0,0);

    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
