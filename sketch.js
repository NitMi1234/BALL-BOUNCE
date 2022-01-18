//name spacing or nicknaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//declaring game variables 
var ball;
var ground;
var ball2;
let engine;
let world;

function setup()
{
  createCanvas(400,400);

  //creating game enginge from Matter.engine
  engine=Engine.create()
  //the game world is same as engine world
  world=engine.world;
  
  var ballOptions={
    restitution:1
  }
  //created ball out of Matter.Bodies Modules
  ball=Bodies.circle(300,100,15,ballOptions);
  //added ball and its world to Matter.World
  World.add(world,ball)

  var groundOption={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,groundOption);
  World.add(world,ground)

  var ball2Options={
    restitution:1,frictionAir:0.05
  }

  ball2=Bodies.circle(150,100,15,ball2Options)
  World.add(world,ball2)
}

function draw() 
{
  background(51);

  //to refresh the game
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
  ellipse(ball2.position.x,ball2.position.y,19)
}

