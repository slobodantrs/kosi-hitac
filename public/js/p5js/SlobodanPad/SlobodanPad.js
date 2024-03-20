let G=9.81;
let RAZMERA=4;
let FRAME_RATE=20;
let lopta;
let brzina;

 var widthS;
 var heightS;
 var isMobile;
 let canvasDrawing;
 let container;
 
function setup() {
   
   isMobile = window.orientation > -1;
  
  usrlang = navigator.language      || navigator.userLanguage; 
  console.log(     "User's preferred language is: "    + usrlang);
  determineSize();
  canvasDrawing=createCanvas(widthS ,heightS ,P2D);
  brzina=createVector(0,0);
  lopta1=new Lopta(25,30,height/4);
  lopta1.v=brzina;
  lopta1.v0=brzina;
  frameRate(FRAME_RATE);
  container= document.getElementById('canvasForHTMLSlobodanPad');
  createGUI();
}

function createGUI(){
  let canvasContainer = createDiv();
  
  if(isMobile){
    console.log("mobile");
    
    canvasContainer.class("d-flex flex-column justify-content-center");
   
    canvasDrawing.parent(canvasContainer);
    canvasDrawing.style('height','100%');
    canvasContainer.parent(container);
  }
  else{
    
    canvasContainer.class("d-flex flex-row justify-content-center");
    
    canvasDrawing.parent(canvasContainer);
    canvasDrawing.style('height','100%');
    canvasDrawing.style('width','100%');
  
    canvasContainer.parent(container);
   
    
 
  }
 }


function draw() {
   background(200);
   fill(255,0,0);
   stroke(255);
   strokeWeight(2);
   lopta1.kretanje();
   lopta1.granicniUslovi();
   lopta1.render();
}
function determineSize(){
  if(isMobile){
    if(displayWidth>1200){
      heightS=displayHeight;
      widthS=heightS;
      
    }   
    else if(displayWidth < displayHeight){
      let k=displayHeight/displayWidth;
      heightS=displayHeight/k;      
      widthS=displayWidth;
    
    }
    else{
      widthS=displayWidth;
      heightS=displayHeight;
    
    }
  }
  else{
    //widthS=displayWidth*5/9;
    //heightS=displayHeight * 4 /5;
	widthS=400;
	heightS=400;
   
  }
}

function windowResized() {
  determineSize();
  resizeCanvas(widthS, heightS,true);
  redraw();
  
}
class Lopta{
  constructor(r,x,y){
    this.r=r;
    this.polozaj=new createVector(x,y);
	this.pocetniPolozaj=new createVector(x,y);
    this.g=createVector(0,G);
    this.v=createVector(0,0);
	this.v0=createVector(0,0);
    
  }
  kretanje(){
     let a=p5.Vector.div(this.g,FRAME_RATE);
     this.v.add(a);
     let dv=p5.Vector.mult(this.v,RAZMERA);
//     console.log("Kretanje v, y="+this.v.mag()+" "+this.y);
     this.polozaj.add(dv);
  }
  render(){
    fill(255,0,0);
    ellipseMode(CENTER);
    ellipse(this.polozaj.x,this.polozaj.y,2*this.r,2*this.r);
  }
  granicniUslovi(){
    if(this.v.y>0 && height-this.polozaj.y<this.r){
      this.v.y*=-0.8;
    }
    /*Uslov da se zaustavi*/
    if(abs(this.v.y)<0.3 && height-this.polozaj.y-this.r<-5){
       this.reset();
    }
	
  }
  reset(){
      this.polozaj=createVector(this.pocetniPolozaj.x,this.pocetniPolozaj.y);     
      this.g=createVector(0,G);
      this.v=createVector(this.v0.x,this.v0.y);
   }
  
}
