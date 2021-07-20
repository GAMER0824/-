const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1
var bob2
var bob3
var bob4
var bob5
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	body: bob1 = Bodies.circle(320,380,20,bob_options); 
    World.add(world,bob1);

	body: bob2 = Bodies.circle(320,380,20,bob_options); 
    World.add(world,bob1);

	body: bob3 = Bodies.circle(320,380,20,bob_options); 
    World.add(world,bob1);

	body: bob4 = Bodies.circle(320,380,20,bob_options); 
    World.add(world,bob1);

	body: bob5 = Bodies.circle(320,380,20,bob_options); 
    World.add(world,bob1);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,40,40);
  ellipse(bob2.position.x,bob1.position.y,40,40);
  ellipse(bob3.position.x,bob1.position.y,40,40);
  ellipse(bob4.position.x,bob1.position.y,40,40);
  ellipse(bob5.position.x,bob1.position.y,40,40);
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
