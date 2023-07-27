const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

let engine;
let world;

let piso;

function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

piso = new Suelo(200,390,400,20);
}

function draw(){
  background("pink");
Engine.update(engine);
piso.mostrar();


}