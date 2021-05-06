
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbinL;
var dustbinM;
var dustbinR;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	var ground = new Ground(600,690,1200,20);
	var paper = new Paper(300,100,45,45);
	var dustbinL = new Dustbin(810,590,20,100);
	var dustbinM = new Dustbin(900,650,200,20)
	var dustbinR = new Dustbin(990,590,20,100)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

	ground.display();
	paper.display();
	dustbinL.display();
	dustbinM.display();
	dustbinR.display();
 
}



