const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(600,800,1200,20);

 for (var k = 0; k <=width; k = k + 80) {
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 40; j <= width; j = j + 50){
  plinkos.push(new Plinko(j,275));
}
for (var j = 15; j <= width - 10; j = j + 50){
  plinkos.push(new Plinko(j, 375));
}

 
}



function draw() {
  background("Black"); 
  Engine.update(engine);
  ground.display();

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

 for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();
}