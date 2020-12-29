
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,platform,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2


	}
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,450,40);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

 






ground.display();
dustbin.display();
paper.display();
}


  function keyPressed() {
	if(keyCode===UP_ARROW){
	 	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  
 
}


