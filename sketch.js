  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustImage,dust;
function preload(){
 dustImage=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	dustbin1 = new Dustbin(1000,500,200,15);
  dustbin2 = new Dustbin(900,450,15,100);
  dustbin3 = new Dustbin(1100,450,15,100);
  ground1 = new Ground(400,550,1900,15);
  ball = new Trash(100,520,15);

  dust=createSprite(1000,450,30,30);
  dust.addImage(dustImage);
  dust.scale=0.3;

  }
function draw() {
  rectMode(CENTER);
  background("white");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  ball.display();
  drawSprites();
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
}
