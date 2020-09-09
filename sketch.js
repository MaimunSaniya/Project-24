const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(100,645);

	box1 = new Box(660,635,200,10);
	box2 = new Box(555,610,10,100);
	box3 = new Box(765,610,10,100);

	ground = new Ground(400,650,800,20);

	
}


function draw() {
  background(0);

  Engine.update(engine);
  
  ball.display();

  box1.display();
  box2.display();
  box3.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  		Body.applyForce(ball.body,ball.body.position,{x:35,y:-35});
	}
}



