
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var leftSide, rightSide;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(900,560,10,200);
	rightSide = new Ground(700,560,10,200);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball= Bodies.circle(200,100,10,ball_options);
    World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,30);

  ground.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:8,y:0});
	}
}



