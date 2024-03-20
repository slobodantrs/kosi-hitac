

 var HH=function(p){
 var G=9.81;
var RAZMERA=4;
var FRAME_RATE=20;
var lopta1;
var brzina;

 var widthS;
 var heightS;
 var isMobile;
 var canvasDrawing;
 var container;
 
p.setup=function () {
   
   isMobile = window.orientation > -1;
  
  usrlang = navigator.language      || navigator.userLanguage; 
  console.log(     "User's preferred language is: "    + usrlang);
  p.determineSize();
  canvasDrawing=p.createCanvas(widthS ,heightS ,p.P2D);
  brzina=p.createVector(5,0);
  lopta1=new Lopta(15,30,p.height/4);
  lopta1.v=brzina;
  lopta1.v0=brzina;
  p.frameRate(FRAME_RATE);
  p.container= document.getElementById('canvasForHTMLHorizontalniHitac');
  p.createGUI();
};

p.createGUI=function() {
  let canvasContainer = p.createDiv();
  
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
 };


p.draw=function () {
   p.background(200);
   p.fill(255,0,0);
   p.stroke(255);
   p.strokeWeight(2);
   lopta1.kretanje();
   lopta1.granicniUslovi();
   lopta1.render();
};
p.determineSize= function(){
  if(isMobile){
    if(p.displayWidth>1200){
      heightS=p.displayHeight;
      widthS=heightS;
      
    }   
    else if(p.displayWidth < p.displayHeight){
      let k=p.displayHeight/p.displayWidth;
      heightS=p.displayHeight/k;      
      widthS=p.displayWidth;
    
    }
    else{
      widthS=p.displayWidth;
      heightS=p.displayHeight;
    
    }
  }
  else{
    //widthS=displayWidth*5/9;
    //heightS=displayHeight * 4 /5;
	widthS=400;
	heightS=400;
   
  }
};

p.windowResized= function() {
  p.determineSize();
  p.resizeCanvas(widthS, heightS,true);
  p.redraw();
  
};
class Lopta{
  constructor(r,x,y){
    this.r=r;
    this.polozaj=new p.createVector(x,y);
	this.pocetniPolozaj=new p.createVector(x,y);
    this.g=p.createVector(0,G);
    this.v=p.createVector(0,0);
	this.v0=p.createVector(0,0);
    
  }
  kretanje(){
     let a=p5.Vector.div(this.g,FRAME_RATE);
     this.v.add(a);
     let dv=p5.Vector.mult(this.v,RAZMERA);
//     console.log("Kretanje v, y="+this.v.mag()+" "+this.y);
     this.polozaj.add(dv);
  }
  render(){
    p.fill(0,0,255);
    p.ellipseMode(p.CENTER);
    p.ellipse(this.polozaj.x,this.polozaj.y,2*this.r,2*this.r);
  }
  granicniUslovi(){
    if(this.v.y>0 && p.height-this.polozaj.y<this.r){
      this.v.y*=-0.8;
    }
    /*Uslov da se zaustavi*/
    if(p.abs(this.v.y)<0.3 && p.height-this.polozaj.y-this.r<-5){
       this.reset();
    }
     /*Za horizontalni hitac*/
     
      if(this.polozaj.x>p.width-50 || this.polozaj.x<0){//r=25
        this.v.x *= -1;
       }
	
  }
  reset(){
      this.polozaj=p.createVector(this.pocetniPolozaj.x,this.pocetniPolozaj.y);     
      this.g=p.createVector(0,G);
      this.v=p.createVector(this.v0.x,this.v0.y);
   }
  
}
 };
 
 var myp5 = new p5(HH, 'canvasForHTMLHorizontalniHitac');