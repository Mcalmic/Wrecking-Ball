const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 400, 2000, 5);
  wall1 = new Wall(300, 370, 50, 50);
  wall2 = new Wall(300, 320, 50, 50);
  wall3 = new Wall(300, 270, 50, 50);
  wall4 = new Wall(300, 220, 50, 50);
  wall5 = new Wall(500, 370, 50, 50);
  wall6 = new Wall(500, 320, 50, 50);
  wall7 = new Wall(500, 270, 50, 50);
  wall8 = new Wall(500, 220, 50, 50);
  wall9 = new Wall(400, 200, 250, 20);
  wall10 = new Wall(400, 300, 100, 100);


  wreckingBall = Bodies.circle(0, 0, 50, {density: 1.0});
  World.add(world, wreckingBall);

  options = {

    bodyA: wreckingBall, 
    pointB: {x: 300, y: 0},
    stiffness: 1.0,
    length: 300,

  }

  crane = Constraint.create(options)
  World.add(world, crane);

  console.log(wreckingBall.position.x);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();

  ellipse(wreckingBall.position.x, wreckingBall.position.y, 100)
  line(wreckingBall.position.x, wreckingBall.position.y, 300, 0)
}