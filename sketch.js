
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftWall;
var rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,200)



	ground= new Ground(500,620,1200,50)
	leftWall= new Ground(650,550,5,100)
	rightWall= new Ground(850,550,5,100)

	Engine.run(engine);

}


function draw() {

  	rectMode(CENTER);
  	background(0);


	  
		
  	rightWall.display()
  	leftWall.display()
  	ball.display()
  	ground.display()

  drawSprites();
 
}

function keyPressed(){
		  
	if(keyCode === RIGHT_ARROW){	
		Body.applyForce(ball.body,ball.body.position,{x:60,y:-75})
		
	}
	if(keyCode === LEFT_ARROW){	
		Body.applyForce(ball.body,ball.body.position,{x:-60,y:-75})
		
	}

}

