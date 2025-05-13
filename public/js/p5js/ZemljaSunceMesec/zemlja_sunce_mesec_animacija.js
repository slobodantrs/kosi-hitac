
var canvasDrawing;
 let container;
 let containerMain;
 var isMobile;
 var widthS;
 var heightS;
 let sun;
 let prevMouse;
 let zoom=1;
 let drag;
 let sunIm;
 let earthIm;
 let moonIm;
 let spaceIm;
 let wEarth=0.005;
 let wEarth1=0.08;
 let wMoon=-0.2;
 let z=0;
 let dLight=200;
  var widthS;
 var heightS;
 let rSun;
 let rEarth;
 let rMoon;
 let prefix="";
// let prefix="";
 let glContext;
 

 
function setup() {
 
  isMobile = window.orientation > -1;
  determineSize();
  drag = createVector(0, 0);
  canvasDrawing=createCanvas(widthS, heightS, WEBGL);
  container = document.getElementById('canvasForHTML');
  rSun=widthS/20;
   rEarth= rSun/4;
   rMoon= rEarth/3;
  sun=new Planeta( rSun,0,null,sunIm,0,0,color(255));
  earth=new Planeta(rEarth,widthS/3,sun,earthIm,wEarth,wEarth1);
  moon=new Planeta(rMoon,rEarth+rMoon+25,earth,moonIm,wMoon,0);
  canvasDrawing.parent(container);
  glContext = canvasDrawing.GL;   
  smooth(16);
 
}
 function preload(){
    sunIm=loadImage(prefix+"Textures/sun1.jpg");
  earthIm=loadImage(prefix+"Textures/earth1.jpg");
  moonIm=loadImage(prefix+"Textures/moon.jpg");
  spaceIm=loadImage(prefix+"Textures/svemir1.jpg");
 }
 
 function determineSize(){
  if(isMobile){
    if(displayWidth>1200){
      heightS=2*displayHeight/3;
      widthS=2*displayWidth*3;
      
    }     
    else if(displayWidth< displayHeight) {
      widthS=displayWidth;
      heightS=2*widthS/3;
   
    }
  else{
    widthS=2*displayWidth/3;
      heightS=2*widthS/3;
  }
  }
  else{
    widthS=displayWidth;
      heightS=2*widthS/3;
   
  }
  if(widthS>940){
    widthS=940;
    heightS=627;
  }
}



function windowResized() {
  determineSize();
  resizeCanvas(widthS, heightS,false);
  
  
  
}
function draw() {
  spaceIm.resize(widthS, heightS);
   imageMode(CENTER);
    background(0,0,0,0); 
   push();
 // render our 3d objects to off-screen surface
 camera(0,0,-300,0,0,0,0,-1,0);
// setCamera(cam);
   image(spaceIm, 0,0, 3*widthS/2, 3*heightS/2);
  // Clear the z-buffer, subsequent drawing commands will not clip, even if they
  // intersect with or are behind previously drawn elements (like our background
  // image)
  glContext.clear(glContext.DEPTH_BUFFER_BIT);
 pop();

   
   noStroke();

  ambientLight(255);  

   orbitControl();

   rotateX(10*PI/24);
   rotateY(PI/64);
   rSun=widthS/20;
   rEarth= rSun/4;
   rMoon= rEarth/3;
   sun.orbit();
   sun.show();


}
function mousePressed(){
  
  prevMouse=createVector(mouseX,mouseY);
  if(key == "ArrowRight"){
    z +=1;
  }
  else if(key == "ArrowLeft"){
     z +=-1;
  }
}

function mouseWheel(event) {
  zoom += event.delta * 0.0005;
}


class Planeta{
  constructor(radius,distance, parent,texture, speedRotation,speedOwnRotation, emission){
    this.radius=radius;
    this.distance=distance;
    this.parent=parent;
    this.texture=texture;
    this.emission=emission;
    this.angle=random(2*PI);
    this.angleOwn=random(2*PI);
    this.speedRotation=speedRotation;
    this.speedOwnRotation=speedOwnRotation;
    this.children=[];
    if(parent){
      parent.children.push(this);
    }
  }
  
  orbit(){
    this.angle+=this.speedRotation;
    this.angleOwn+=this.speedOwnRotation;
     for(let planet of this.children){
          planet.orbit();
        
     }
  }
  show(){
    push();
      push();
        strokeWeight(0.5);
        stroke(20);
        noFill();
        ellipse(0,0,this.distance*2);
       
      pop();
    
      if (this.emission) {
    
        fill(this.emission);
        scale(100);
      
        pointLight(this.emission, drag.x+dLight, drag.y, z);
        pointLight(this.emission, drag.x-dLight, drag.y, z);
        pointLight(this.emission, drag.x, drag.y+dLight, z);
        pointLight(this.emission, drag.x, drag.y-dLight, z);
        pointLight(this.emission, drag.x, drag.y, z+dLight);
        pointLight(this.emission, drag.x, drag.y, z-dLight);
        scale(0.01);
      }
      rotate(-this.angle);      
      translate(this.distance,0);
      rotate(-this.angleOwn);
      
      if (this.emission) {
        
        texture(this.texture);
        sphere(this.radius);
        ambientLight(this.emission);
        
        
      }
      else{
        if(this.texture != null)
        {
          texture(this.texture);
        }
        else{
           ambientMaterial(255);
        }
        
        sphere(this.radius);
      }
      
      for(let planet of this.children){
          planet.show();
        
      }
    pop();
  }
  
  
  
}
