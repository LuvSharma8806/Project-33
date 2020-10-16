const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground= new Ground(400,400,40,40);
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  
  ground.display();
}