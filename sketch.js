const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var maxDrops = 200;
var drops = [];
var man,manImage;

function preload(){
    manImage = loadImage("walking_1.png","walking_2.png","walking_3.png",
    "walking_4.png","walking_5.png","walking_6.png",
    "walking_7.png","walking_8.png")
    
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;
   if(frameCount%250 === 0){
       for(var i = 0;i<maxDrops;i++){
           drops.push(new Drop(random(0,400),random(0,50)));
       }
   }
    man = createSprite(200,500);
    man.addImage(manImage);
    man.scale = 0.3;
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();    
    }
    drawSprites();
}   

