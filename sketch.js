
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1, ground1, boyImage, stone1;
var mangoobj1, mangoobj2, mangoobj3, mangoobj4, mangoobj5;
var laucherObj, launchingForce = 100;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new tree(200, 200, 20, 20);
	ground1 = new Ground(400, 20, 800, 20);
	boyImage = new boy(100, 200, 20, 20);
	stone1 = new stone();
	mangoobj1 = new mango(470, 450, 30, 30);
	mangoobj2 = new mango(510, 440, 30, 30);
	mangoobj3 = new mango(550, 400, 30, 30);
	mangoobj4 = new mango(610, 460, 30, 30);
	mangoobj5 = new mango(570, 420, 30, 30);
	launcherObj = new SlingShot(stone1.body,{x:235,y:420});

	
	var point_B={ 
        x:400, 
        y:100
     }
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree1.display();
  boyImage.display();
  stone1.display();
  mangoobj1.display();
  mangoobj2.display();
  mangoobj3.display();
  mangoobj4.display();
  mangoobj5.display();
  launcherObj.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	launcherObj.fly();
  }