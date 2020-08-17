// Name Spacing / Nicknaming
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world, box, ground, box1;

function setup() {
  createCanvas(400,400);
  //Engine.create(); creates a phyisics engine, we are storing it in a variable named as engine.
  engine=Engine.create();
//every phyisicis engine has a world, so we are storing "engine.world" in a variable as world
  world=engine.world;
  box1= new Box();
  
var options={
  isStatic: true
}

ground=Bodies.rectangle(200,360,400,10,options);

World.add(world,ground);
console.log(box)



}




function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,10);


  box1.display();
}
