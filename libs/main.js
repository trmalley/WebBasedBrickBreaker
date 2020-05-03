//module aliases
var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Body = Matter.Body,
	Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var wallR;
var wallL;
var ceil;
var paddleL;
var paddleR;
//var ball;

var render;
var boxes = [];
var balls = [];

//var y = 200;
//var x = 100;
var maxW = 900;
var maxH = 400;

var paddleW = 80;
var paddleH = 10;

function setup(){
	createCanvas(maxW,maxH);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(width/2,maxH, maxW, 30, options);
	wallL = Bodies.rectangle(maxW, maxH/2, 10, maxW, options);
	wallR = Bodies.rectangle(0, 0, 10, maxW, options);
	ceil = Bodies.rectangle(maxW/2,0, maxW, 10, options);
	
	
	paddleL = new paddle(maxW-(maxW-50),maxH/2,paddleH,paddleW);
	paddleR = new paddle((maxW-50),maxH/2,paddleH,paddleW);
	World.add(world, ground);
	World.add(world, wallL);
	World.add(world, wallR);
	World.add(world, ceil);
	ball = new Ball(100,100,10);
	World.add(world,ball);
	//Render.run(render);

	
}

function mousePressed(){
	balls.push(new Ball(mouseX, mouseY, 10));
	console.log("Pressed");
}



function draw(){
	background(51);
	//Engine.update(engine, 15);
	
	for(var i =0; i< balls.length; i++){
		balls[i].show();
	}
	paddleL.show();
	paddleR.show();

	ball.show();
	//Body.setAngularVelocity(ball,10,10);
	//Body.applyForce(ball,10,10);
	//console.log(paddleL.y, paddleL.x);
	keyPress(maxW, maxH);
	//circle(ball.x, ball.y, 80);
	//new ball(ball.x, ball.y, 80);
	//rect(boxA.x, boxA.y, 80, 80)
	//new Box(boxA.x,boxA.y,80,80);
	
	noStroke(0);
	fill(170);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y, maxW, 10);
	rect(wallL.position.x,wallL.position.y, 10, maxW);
	rect(wallR.position.x,wallR.position.y, 10, maxW);
	rect(ceil.position.x,ceil.position.y, maxW,10);

}


