var trex
var corruption
var ground
var treximg

function preload(){
  treximg=loadImage("trex.png")

}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addImage("trex",treximg );
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.9;
  trex.x = 50

  //create the ground sprite
  ground=createSprite (200,180,400,2);
  ground.addImage ("ground",groundImage) 
  ground.x = ground.width/2 

}
function draw(){
  function draw(){
  //establecer color de fondo.
  background("white");
  
  //cargar la posición Y del Trex

  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(edges[3])
  drawSprites();
}
}
