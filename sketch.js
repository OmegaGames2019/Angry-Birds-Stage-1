const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,370,50,50);
    box2 = new Box(600,370,50,50);
    box3 = new Box(500,300,50,50);
    box4 = new Box(600,300,50,50);
    box5 = new Box(565,230,50,50);
    pig1 = new pig(550,370);
    pig2 = new pig(550,300);
    ground = new Ground(600,height,1200,20)
    log1 = new log(550,350,150,PI/2);
    log2 = new log(550,280,150,PI/2);
    log3 = new log(530,210,100,PI/8.5);
    log4 = new log(560,210,100,-PI/8.5);
    bird1 = new bird(100,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
    bird1.display();
}