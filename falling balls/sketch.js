
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var piso;
var rotator1;
var angle1 = 60;
var angle2 = 45;



function setup(){
    var canvas = createCanvas(1050,800);
    engine = Engine.create();
    world = engine.world;

    //cuerpos de planos y bloques creados
   

    //cuerpos múltiples de partícula creados 
    var particle_options = {
      restitution:0.4,
      friction:0.02
    }
    button = createImg('New Piskel-1.png.png');
    button.position(20,30);
    button.size(50,50);
    button.mouseClicked(giro);

    
    piso = new barra(525,790,1050,10);

    rotator1 = new barra(525,400,100,30);
   

    

    

    //Propiedades de estilo de los cuerpos (bodies)
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
  background("lightgreen");
    

  Engine.update(engine);
  piso.show();
  rotator1.show();


  
  
  
 
  
  
    
}

function giro(){
 
 Matter.Body.rotate(rotator1,angle1);
 

}
