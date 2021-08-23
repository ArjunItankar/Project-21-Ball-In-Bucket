
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground, groundObj;
var ball, rightSide, leftSide;

function setup() {
	createCanvas(700, 400);
	engine = Engine.create();
	world = engine.world;

	fill("white");
	stroke("white");


	groundObj = new Ground(200, 393, 1000, 10);
	rightSide = new Ground(600, 350, 10, 75);
  	leftSide = new Ground(450, 350, 10, 75);
	  

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100, 100, 20, ball_options);
  	World.add(world, ball);

	  Body.applyForce(ball,  {
		x:0, y:0
	  }, {
		x:0, y:0
	  });

	 

	rectMode(CENTER);
  	ellipseMode(RADIUS);

}


function draw() {
	background(51);
  	groundObj.show();
	leftSide.show();
	rightSide.show();
	fill("yellow");
	stroke("yellow");

	//targetAngle = Matter.Vector.angle(ball.pos, mouse.position);

/*	if (keyPressed){
	Body.applyForce(ball, {
		x:0, y:0
	}, {
		x:1, y:1
	});
}*/

	ellipse(ball.position.x, ball.position.y, 12);
  	Engine.update(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,ball.position,{x:55,y:-55});
	}
}	 





