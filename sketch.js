const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var box1, box2, box3, box4,box5;
var pig1,pig2, log1,log2,log3,log4;

function setup(){
createCanvas(1000,600);
engine = Engine.create();
world = engine.world;

ground = new Ground(500,590,1000,50);

box1 = new Box(650, 550, 60,60);
box2 = new Box(850, 550, 60,60);
box3 = new Box(650,450,60,60);
box4 = new Box(850,450,60,60);
box5 = new Box(750,350,60,60);
bird = new Bird(200,150);


pig1 = new Pig(750,550);
Engine.run(engine);
pig2 = new Pig(750,450);

log1 = new Log(750,500,260,PI);
log2 = new Log(750,400,260,PI);
log3 = new Log(700,300,125,-PI/8);
log4 = new Log(825,300,125,PI/8);   

}

function draw(){
background(0);

ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
log3.display();
log4.display();
bird.display();

box1.display();
box2.display();
box5.display();
}