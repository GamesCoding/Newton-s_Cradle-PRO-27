
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,400,75);
	bob2 = new Bob(275,400,75);
	bob3 = new Bob(350,400,75);
	bob4 = new Bob(425,400,75);
	bob5 = new Bob(500,400,75);

	roof1 = new Roof(350,100,500,40);

	chain1 = new Chain(bob1.body,{x: 200, y: 100});
	chain2 = new Chain(bob2.body,{x: 275, y: 100});
	chain3 = new Chain(bob3.body,{x: 350, y: 100});
	chain4 = new Chain(bob4.body,{x: 425, y: 100});
	chain5 = new Chain(bob5.body,{x: 500, y: 100});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  chain1.display();
  
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
  keyPressed();
}

function keyPressed(){
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -8, y:-10})
	}
}



