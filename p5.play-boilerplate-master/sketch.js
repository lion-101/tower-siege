const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var rock
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = Engine.world;
  Engine.run (engine)
  var rock=createSprite(400, 200, 50, 50);
  topple=new Topple(200,200,10,25);
  topple1=new Topple(220,200,10,25);
  topple2=new Topple(240,200,10,25);
  topple3=new Topple(260,200,10,25);
  topple4=new Topple(280,200,10,25);
  topple5=new Topple(210,225,10,25);
  topple6=new Topple(230,225,10,25);
  topple7=new Topple(250,225,10,25);
  topple8=new Topple(215,250,10,25);
  topple9=new Topple(235,250,10,25);
  topple10=new Topple(225,250,10,25);
}
function draw() {
  background(255,255,255);  
  topple.display();
  topple1.display();
  topple2.display();
  topple3.display();
  topple4.display();
  topple5.display();
  topple6.display();
  topple7.display();
  topple8.display();
  topple9.display();
  topple10.display();
  drawSprites();
}