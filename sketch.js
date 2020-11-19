const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon;

function setup() {
  createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;
  
ground1 = new Ground (390,365,150,15)    
block8 = new Block(330,335,30,40)
block2 = new Block(360,335,30,40)
block3 = new Block(390,335,30,40)
block4 = new Block(420,335,30,40)
block5 = new Block(450,335,30,40)

block6 = new Block(360,295,30,40)
block7 = new Block(390,295,30,40)
block9 = new Block(420,295,30,40)

block10 = new Block(390,255,30,40)

polygon = Bodies.circle(20,290,20)
World.add(world,polygon);


}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
  
  textSize(25)
  text("Drag the Hexagonal Stone and Release it,to lauch it towards the blocks !!",50,50);


  ground1.display();
  block8.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block9.display();

  block10.display();

}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon.body,{x:100,y:200})
}

function mouseReleased(){
slingShot.fly()
}















