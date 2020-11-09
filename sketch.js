var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box1Sprite=createSprite(400,650,200,20);
	box1Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	box1 = new Box (400,650,200,20);
	box2 = new Box (290,615,20,100);
	box3 = new Box (490,615,20,100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	packageSprite.setScale = 0.5;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	 World.add(world, ground);
	 
	 box1Body = Bodies.rectangle(width/2,600,200,20);
	 World.add(world,box1Body);

	Engine.run(engine);
  
}

function draw() {
	background(0);
	box1.display();
	box2.display();
	box3.display();
	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;
	drawSprites();
   
  }

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	}
   }