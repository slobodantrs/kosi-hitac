let f,fM;
let canvasDrawing;
let mod=1;//kreira vektore
var isMobile;
 var widthS;
 var heightS;
 var vectors=[];
 var vectorsPractice=[];
 let showOriginalVectors;
 let showCopyVectors;
 let showInfo;
 let START_H_FOR_SELECTION=60;
 let START_X_FOR_SELECTION=20;
 let DIAMETER_SELECTED_VECTORS =15;
 let LEFT_PADDING_TEXT=50;
 let rPocetka=4;
 let expression;

let srLang=["KRUŽNO KRETANJE: ","Instrukcije: ",'Ulazni podaci','pozitivan smer rot.',"usporenje:",'Informacije','Prikaz brzine','Prikaz ubrzanja',
  "<p>Zdravo!</p><p> Podesite poluprečnik kružne putanje,ugaono ubrzanje, &alpha;, ugaonu brzinu &omega; korišćenjem slajdera i pritisnite start dugmeda startujete animaciju!</p>"+
  "<p> Kliknite na dugme za korak, pauzu, ili dugme za resetovanje, da bi ste uradili jednu iteraciju, pauzirali ili resetovali animaciju! Štiklirajte ili deštiklirajte da bi ste promenili smer rotacije, "+ 
  "prikazali ili sakrili informacije, prikazali vektore brzine i ubrzanja, ili ih sakrili!</p>"
];
let enLang=["CIRCULAR MOTION: ","Instruction: ",'Input Data','positive rotation',"slow. down:",'Information','Show velocity','Show acceleration',
"<p>Hello!</p><p> Addjust radius of the circle,  angular acceleration &alpha;, angular velocity &omega; using sliders and press start button to start animation!</p>"+
  "<p> Click the step, pause, or reset button to do one iteration, pause loop or restart animation! Tick or untick to change the direction of rotation, "+
  "show or hide information, show or hide velocity and acceleration vectors!</p>"
  ];
let exprLang=[];
 

 let container;
 let containerMain;

 let infoPanel;
 let infoText;//label for instruction
 let defaultValue=10;
 let rPutanje;
 let telo;
 let RAZMERA_V=20;
 let RAZMERA=40;//40px/cm
 let razmera=1;
 
 let dirOfRotation=true;
 let showV=true;
 let showA=false;
 let FRAME_RATE=30;
 let t=0;
 let nF=0;
 let usporenje=1;
 let dt;
 let wP=-0.5;
 let alfaP=-0.2;
 let buttonStart;
 let buttonRestart;
 let buttonPause;
 let buttonStep;
 let infoChb;
 let showVChb;
 let showAChb;
 let directionRotationChb;
 var usrlang;
 
 
function setup() {
  isMobile = window.orientation > -1;
   
  
  usrlang = navigator.language      || navigator.userLanguage; 
  console.log(     "User's preferred language is: "    + usrlang); 
  createExpressionLang();

  frameRate(FRAME_RATE);
   determineSize(); 
 
  canvasDrawing=createCanvas(widthS ,heightS ,P2D);  
  
  container = document.getElementById('canvasForHTML');  
  containerMain= document.getElementById('container');
  infoPanel = document.getElementById('infoPanel');
  
  
 
  f=textFont("Tahoma",25);//kreira se font 
  fM=textFont("Tahoma",16);//kreira se font
  
  expression=exprLang[0];
  showInfo=true;
  showOriginalVectors=true;
  showCopyVectors=false;
  rPutanje = round(random(widthS/5,widthS/2-150));
  createGUI();
  
  reset();
  noLoop();
 
  infoText.html( exprLang[8]);
}
function createExpressionLang() {
  // Pretpostavimo da usrlang dolazi iz navigator.language ili slično
  const lang = (usrlang || '').toLowerCase();
  
  // Ako je bilo koja varijanta srpskog jezika (npr. "sr", "sr-rs", "sr-cyrl-rs"...)
  if (lang.startsWith('sr')) {
    exprLang = srLang;
  } else {
    exprLang = enLang;
  }
}

function reset(){
  createExpressionLang();
  t=0;
  nF=0;
  dt=1/(FRAME_RATE*usporenje);
  
  telo=new Telo(25, 0,wP, alfaP);
  redraw();
}

function createGUI(){
  let canvasContainer = createDiv();
  
  let infoPar=createP(exprLang[1]);
  infoText=createP();
  
  infoPar.parent(infoPanel);
  infoText.parent(infoPanel);

  
  
   //create controls
  let divContainer = createDiv();
  divContainerIn = createDiv();
  let divContainerOperation = createDiv();
  
  let titleP=createElement('h6', exprLang[2]);
  titleP.class('d-flex justify-content-center p-2 text-white'); 
  
  if(isMobile){
   console.log("mobile");
    divContainer.addClass("text-white");
    titleP.parent(divContainer);
    
    divContainerIn.parent(divContainer);
    canvasContainer.class("d-flex flex-column justify-content-center");
    divContainer.parent(canvasContainer);
    canvasDrawing.parent(canvasContainer);
    canvasDrawing.style('height','100%');
    
   
    

    canvasContainer.parent(container);
    
  
    divContainer.style('width', widthS+'px');
    divContainerIn.class("d-flex flex-column align-items-start justify-content-left flex-wrap mb-auto");
 
   
  }
  else{
    console.log("desktop");
    titleP.parent(divContainerIn);
    canvasContainer.class("d-flex flex-row justify-content-center");
    
    canvasDrawing.parent(canvasContainer);
    canvasDrawing.style('height','100%');
    canvasDrawing.style('width','100%');
    divContainerIn.parent(divContainer);
   
    divContainer.parent(canvasContainer);
 

    canvasContainer.parent(container);
   
    divContainer.style('width', '180px');
    divContainerIn.addClass('d-flex flex-column');
 
  }
  
  divContainer.id('inputContainer');
  divContainer.style('height', 'auto');
  //divContainer.style('max-height', '650px');
  divContainer.addClass('d-flex flex-column');
  divContainer.style('background', '#0000bb');
  divContainer.style('color', '#ffffbb');
  
   let chbDirectionPanel=createDiv();
  chbDirectionPanel.parent(divContainer);
  chbDirectionPanel.class('d-flex flex-column  ml-3 p-2');
  directionRotationChb = createCheckbox(exprLang[3], dirOfRotation); 
  directionRotationChb.changed(determineDirectionRotation);
  directionRotationChb.parent(chbDirectionPanel);
  
  LenTitledPanel=createDiv();
  let LenPanel=createDiv();
  let LenValuePanel=createDiv();
  LenTitledPanel.class('d-flex flex-column  p-2');

  LenPanel.style('width','100%');
  LenPanel.class('d-flex flex-row justify-content-between p-2');
  LenValuePanel.style('width','100%');
  LenValuePanel.class('d-flex flex-row justify-content-between p-2');

  LenLab=createSpan("R[px]: "); //label for entry1
  LenMinLab=createSpan(""+round(widthS/6)); //label for KTMinLab
  LenMaxLab=createSpan(""+round(widthS/2-50)); //label for KTMaxLab  
  LenVal=createSpan(""+rPutanje);
  
  let btnLInc=createButton("+");
  btnLInc.style('width','25px'); 
  btnLInc.style('height','25px'); 
  btnLInc.mousePressed(incrementingLSlider);
  let btnLDec=createButton("-");
  btnLDec.style('width','25px'); 
  btnLDec.style('height','25px'); 
  btnLDec.mousePressed(decrementingLSlider);
  btnLInc.parent(LenValuePanel);
  btnLDec.parent(LenValuePanel);
 
  LenLab.parent(LenValuePanel);
  LenVal.parent(LenValuePanel);
  sliderLen=createSlider(round(widthS/6),round(widthS/2-50),rPutanje,1);
  sliderLen.style('width','75px'); 
  sliderLen.changed(changeLength);
  LenMinLab.parent(LenPanel)
  sliderLen.parent(LenPanel);
  LenMaxLab.parent(LenPanel);
  
  LenValuePanel.parent(LenTitledPanel);
  LenPanel.parent(LenTitledPanel);
  LenTitledPanel.parent(divContainerIn);
  
  
  
  let AnglTitledPanel=createDiv();
  let AnglPanel=createDiv();
  let AnglValuePanel=createDiv();
  AnglTitledPanel.class('d-flex flex-column  p-2 mb-auto');

  AnglPanel.style('width','100%');
  AnglPanel.class('d-flex flex-row justify-content-between align-items-end p-2 mb-auto');
  AnglValuePanel.style('width','100%');
  AnglValuePanel.class('d-flex flex-row justify-content-between p-2');
  
  let btnAInc=createButton("+");
  btnAInc.style('width','25px'); 
  btnAInc.style('height','25px'); 
  btnAInc.class('align-self-end');
  btnAInc.mousePressed(incrementingASlider);
  let btnADec=createButton("-");
  btnADec.style('width','25px'); 
  btnADec.style('height','25px');
  btnADec.class('align-self-end');
  btnADec.mousePressed(decrementingASlider);
  btnAInc.parent(AnglValuePanel);
  btnADec.parent(AnglValuePanel);

  AnglLab=createSpan("&alpha;[rad/s2]: "); //label for entry1
  AnglLab.class('align-self-end');
  AnglMinLab=createSpan("-1"); //label for KTMinLab
  
  AnglMaxLab=createSpan("1"); //label for KTMaxLab  
  AnglVal=createSpan(""+alfaP);
  AnglVal.class('align-self-end');
 
  AnglLab.parent(AnglValuePanel);
  AnglVal.parent(AnglValuePanel);
  sliderAngl=createSlider(-1,1, alfaP,0.01);
  sliderAngl.style('width','75px'); 
  sliderAngl.changed(changeAngle);
  AnglMinLab.parent(AnglPanel)
  sliderAngl.parent(AnglPanel);
  AnglMaxLab.parent(AnglPanel);
  
  AnglValuePanel.parent(AnglTitledPanel);
  AnglPanel.parent(AnglTitledPanel);
  AnglTitledPanel.parent(divContainerIn);
  
   let wTitledPanel=createDiv();
  let wPanel=createDiv();
  let wValuePanel=createDiv();
  wTitledPanel.class('d-flex flex-column  p-2');

  wPanel.style('width','100%');
  wPanel.class('d-flex flex-row justify-content-between p-2');
  wValuePanel.style('width','100%');
  wValuePanel.class('d-flex flex-row justify-content-between p-2');
  
  let btnWInc=createButton("+");
  btnWInc.style('width','25px'); 
  btnWInc.style('height','25px'); 
  btnWInc.class('align-self-end');
  btnWInc.mousePressed(incrementingWSlider);
  let btnWDec=createButton("-");
  btnWDec.style('width','25px'); 
  btnWDec.style('height','25px'); 
  btnWDec.class('align-self-end');
  btnWDec.mousePressed(decrementingWSlider);
  btnWInc.parent(wValuePanel);
  btnWDec.parent(wValuePanel);

  wLab=createSpan("&omega;[rad/s]: "); //label for entry1
  wLab.class('align-self-end');
  wMinLab=createSpan("-2"); //label for KTMinLab
  wMaxLab=createSpan("2"); //label for KTMaxLab  
  wVal=createSpan(""+wP);
  wVal.class('align-self-end');
 
  wLab.parent(wValuePanel);
  wVal.parent(wValuePanel);
  sliderW=createSlider(-2,2,wP,0.1);
  sliderW.style('width','75px'); 
  sliderW.changed(changeW);
  wMinLab.parent(wPanel)
  sliderW.parent(wPanel);
  wMaxLab.parent(wPanel);
  
  wValuePanel.parent(wTitledPanel);
  wPanel.parent(wTitledPanel);
  wTitledPanel.parent(divContainerIn);
  
   let slowTitledPanel=createDiv();
  let slowPanel=createDiv();
  let slowValuePanel=createDiv();
  slowTitledPanel.class('d-flex flex-column  p-2');

  slowPanel.style('width','100%');
  slowPanel.class('d-flex flex-row justify-content-between p-2 ');
  slowValuePanel.style('width','100%');
  slowValuePanel.class('d-flex flex-row justify-content-between p-2');
  
  let btnSlowInc=createButton("+");
  btnSlowInc.style('width','25px'); 
  btnSlowInc.style('height','25px'); 
  btnSlowInc.mousePressed(incrementingSlowSlider);
  let btnSlowDec=createButton("-");
  btnSlowDec.style('width','25px'); 
  btnSlowDec.style('height','25px'); 
  btnSlowDec.mousePressed(decrementingSlowSlider);
  btnSlowInc.parent(slowValuePanel);
  btnSlowDec.parent(slowValuePanel);

  slowLab=createSpan(exprLang[4]); //label for entry1
  slowMinLab=createSpan("1"); //label for KTMinLab
  slowMaxLab=createSpan("20"); //label for KTMaxLab  
  slowVal=createSpan(""+usporenje);
  
 
  slowLab.parent(slowValuePanel);
  slowVal.parent(slowValuePanel);
  sliderSlow=createSlider(1,20,1,1);
  sliderSlow.style('width','75px'); 
  sliderSlow.changed(changeSlowingDown);
  slowMinLab.parent(slowPanel)
  sliderSlow.parent(slowPanel);
  slowMaxLab.parent(slowPanel);
  
  slowValuePanel.parent(slowTitledPanel);
  slowPanel.parent(slowTitledPanel);
  slowTitledPanel.parent(divContainerIn);
  
   let btnPanel=createDiv();
  
  btnPanel.style('width','100%');
  btnPanel.class('d-flex align-content-around justify-content-center flex-wrap p-2');
  buttonStart = createButton('<i class="fa fa-play"></i>'); 
  
  buttonStart.mousePressed(starting);
  buttonStart.style( "width","40px");
  buttonStart.parent(btnPanel);
  buttonPause = createButton("||"); 
  buttonPause.mousePressed(pausing);
  buttonPause.style( "width","40px");
  buttonPause.parent(btnPanel);
  buttonStep = createButton('<i class="fa fa-step-forward" aria-hidden="true"></i>'); 
  buttonStep.mousePressed(doingStep);
  buttonStep.style( "width","40px");
  buttonStep.parent(btnPanel);
  buttonStep.attribute('disabled','');
  buttonRestart = createButton('<i class="fa fa-refresh" aria-hidden="true"></i>'); 
  buttonRestart.mousePressed(restarting);
  buttonRestart.style( "width","40px");
  buttonRestart.attribute('disabled','');
  buttonRestart.parent(btnPanel);
  
  btnPanel.parent(divContainer);
  let chbPanel=createDiv();
  chbPanel.parent(divContainer);
  chbPanel.class('d-flex flex-column  ml-3 p-2');
  
  infoChb = createCheckbox(exprLang[5], showInfo); 
  showVChb = createCheckbox(exprLang[6], showV); 
  showAChb = createCheckbox(exprLang[7], showA); 
  infoChb.parent(chbPanel);
  showVChb.parent(chbPanel);
  showAChb.parent(chbPanel);
  infoChb.changed(switchInfo);
  showVChb.changed(switchShowingV);
  showAChb.changed(switchShowingA);
}


function draw() {
  background(255); 
  
  usrlang = navigator.language      || navigator.userLanguage; 
  console.log(     "User's preferred language is: "    + usrlang); 
 
   
   textFont(f);
   if(isMobile){
     textFont(fM);
   }
   stroke(10,10,10);
   fill(10,10,10);
   translate(widthS/2,heightS/2);
  
   push();
   drawingContext.setLineDash([5, 5]);
   stroke(color(100,20,250));
   noFill();
   rectMode(CENTER);
   rect(0,0,500,500);
   
   pop();

   line(-(widthS/2-50),0,widthS/2-50,0);
   push();
   translate(widthS/2-50,0);
   triangle(0,0,-10,-5,-10,5);
   text("X[cm]",5,10);
   pop();
   line(0,heightS/2-50,0,-(heightS/2-50));
   push();
   translate(0,-(heightS/2-50));
   text("Y[cm]",5,10);
   rotate(-HALF_PI);
   triangle(0,0,-10,-5,-10,5);
   
   pop();
   noFill();
   ellipseMode(CENTER);
   ellipse(0,0,2*rPutanje,2*rPutanje);
   
   
   telo.show();
   telo.showXY();
   telo.showR();
   if(showV){
     telo.showV();
     
   }
   if(showA){
     telo.showAN();
     telo.showAT();
     telo.showA();
   }
   
   ispisPodataka();
   dt=1/(FRAME_RATE*usporenje);
   nF++;
   
   t +=dt;
   telo.move();
   telo.updateVectors();
   
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
      heightS=widthS;
    
    }
  }
  else{
    widthS=displayWidth*5/9;
    heightS=displayHeight * 4 /5;
   
  }
}

function windowResized() {
  determineSize();
  resizeCanvas(widthS, heightS,true);
  redraw();
  
}
function ispisPodataka(){
     push();
     stroke(10);
     strokeWeight(1);
     translate(-width/2,-height/2);
     text(expression,width/2-100,30);
     let k;
       if(dirOfRotation){
         k=-1;
       }
       else{
         k=1;
       }
     if(showInfo){
       text("t="+nfs(t,2,2)+"s",LEFT_PADDING_TEXT,30*2);
       text("w[rad/s] = "+nfs(telo.w,2,2)+"rad/s",LEFT_PADDING_TEXT,30*3);
       text("alpha="+nfs(telo.alfa,2,2)+"rad/s2",LEFT_PADDING_TEXT,30*4);
       text("R="+nfs(telo.R.vector.mag()/RAZMERA,2,1)+"cm",LEFT_PADDING_TEXT,30*5);
       text("fi="+nfs(k*telo.fi,2,2)+"rad("+nfs(degrees(k*telo.fi),2,2)+" deg)",LEFT_PADDING_TEXT,30*6);
       text("x="+nfs(telo.position.x/RAZMERA,2,2)+"cm",LEFT_PADDING_TEXT,30*7);
       text("y="+nfs(-telo.position.y/RAZMERA,2,2)+"cm",LEFT_PADDING_TEXT,30*8);
       text("v="+nfs(telo.v.L,2,2)+"cm/s",LEFT_PADDING_TEXT,30*9);
       text("aN="+nfs(telo.aN.L,2,2)+"cm/s2",LEFT_PADDING_TEXT,30*10);
       text("aT="+nfs(telo.aT.L,2,2)+"cm/s2",LEFT_PADDING_TEXT,30*11);
       text("a="+nfs(telo.a.L,2,2)+"cm/s2",LEFT_PADDING_TEXT,30*12);
       
     }
     pop();
}

function determineDirectionRotation(){
   dirOfRotation=directionRotationChb.checked();
  reset();
  redraw();
}

function switchInfo(){
  
 showInfo=infoChb.checked();
  redraw();
}
function switchShowingV(){
  showV=showVChb.checked();
  redraw();
}
function switchShowingA(){
   showA=showAChb.checked();
   redraw();
}

function starting(){
 
  buttonPause.removeAttribute('disabled');
  buttonRestart.removeAttribute('disabled');
  buttonStep.removeAttribute('disabled');
  buttonStart.attribute('disabled','');
  loop();
}
function pausing(){
 
  noLoop();
  buttonStart.removeAttribute('disabled');
}
function doingStep(){
 
  buttonStart.removeAttribute('disabled');
  noLoop();
  redraw();
  noLoop();
}
function restarting(){
 
  buttonPause.removeAttribute('disabled');
  buttonRestart.removeAttribute('disabled');
  buttonStart.attribute('disabled','');
  reset();
  loop();
}



function changeLength(){
    LenVal.html(""+round(sliderLen.value())+"");
    rPutanje=round(sliderLen.value());
   
    reset();
    redraw();
}

function changeAngle(){
  AnglVal.html("" +sliderAngl.value()+"");
   alfaP=sliderAngl.value();
   reset();
 }
 function changeW(){
  wVal.html(""+sliderW.value()+"");
   wP=sliderW.value();
   reset();
 }
 function changeSlowingDown(){
  slowVal.html(""+sliderSlow.value()+"");
   usporenje=sliderSlow.value();
   reset();
  
}

function incrementingLSlider(){
  
   sliderLen.value(sliderLen.value()+1);
   LenVal.html(""+sliderLen.value()+"");
   changeLength();

   
}
function decrementingLSlider(){
  
   sliderLen.value(sliderLen.value()-1);
   LenVal.html(""+sliderLen.value()+"");
   changeLength();

}

function incrementingASlider(){
  
  
   sliderAngl.value(sliderAngl.value()+0.01);
   AnglVal.html(""+sliderAngl.value()+"");
    changeAngle();
   
}
function decrementingASlider(){

  
   sliderAngl.value(sliderAngl.value()-0.01);
   AnglVal.html(""+sliderAngl.value()+"");
    changeAngle();
}

function incrementingWSlider(){
  
  
   sliderW.value(sliderW.value()+0.1);
   wVal.html(""+sliderW.value()+"");
    changeW();
   
}
function decrementingWSlider(){

  
   sliderW.value(sliderW.value()-0.1);
   wVal.html(""+sliderW.value()+"");
    changeW();
}
function incrementingSlowSlider(){
  
   sliderSlow.value(sliderSlow.value()+1);
   slowVal.html(""+sliderSlow.value()+"");
   changeSlowingDown();

   
}
function decrementingSlowSlider(){
  
   sliderSlow.value(sliderSlow.value()-1);
   slowVal.html(""+sliderSlow.value()+"");
   changeSlowingDown();

}





class Vektor
{  
    
   constructor(x,y,L,fi,naziv){
      this.position=new p5.Vector(x,y);    
      this.koef=1;
      
      this.color0=color(0,0,0);
      this.colorSel=color(255,0,255)
      this.fi=fi;
      this.L=L;
      
      this.a=abs(L)*cos(fi);
      this.b=abs(L)*sin(fi);
      this.vector=new p5.Vector(this.a,this.b);
     
      this.Pposition=new p5.Vector(this.position.x,this.position.y);//previous position
     
      
     
      this.naziv=naziv;
      
   }
   update(){
     
     this.a=abs(this.L)*cos(this.fi);
      this.b=abs(this.L)*sin(this.fi);
      this.vector=new p5.Vector(this.a,this.b);
   }
   updateColor(){
     this.selectedArea.colorS=this.color0;
     this.selectedArea.colorS1=this.colorSel;
   }
   move(dv){
      this.position.add(dv);
      if(this.position.x>widthS/2 || this.position.x<-widthS/2 || this.position.y>heightS/2 || this.position.y<-heightS/2){
        this.position=new p5.Vector(this.Pposition.x,this.Pposition.y);//reset to previous position
      }
   }
   
   rotateVector(fi){
       this.fi=fi;//rotate the vector for dfi angle in radians      
 
   }
  
   display() {
   
     //Proverava razmeru
     if(this.naziv!=='R' && abs(telo.w)===0 ){
       razmera=100;
     }
     else if(this.naziv!=='R' && abs(telo.w)>0 && abs(telo.w)<0.2){
       razmera=100;
     }     
     else if(this.naziv!=='R' && abs(telo.w)<1.5){
       razmera=RAZMERA_V;
     }
     else if(this.naziv!=='R' && abs(telo.w)>1.5){
       razmera=RAZMERA_V/abs(telo.w);
     }
     
     else {
       razmera=1;
     }
     
    let trX=this.vector.x*razmera;
    let trY=this.vector.y*razmera;
    let signX=1;
    let signY=1;
    if(trX!==0){
      signX=trX/abs(trX);
    }
    if(trY!==0){
      signY=trY/abs(trY);
    }
    let gr=max(abs(trX),abs(trY));
   
    if(this.naziv!=='R' && gr>150){
        trX=map(abs(trX),0,gr,0,150);
        trY=map(abs(trY),0,gr,0,150);
        trX=signX*trX;
        trY=signY*trY;
    }
    if(this.naziv!=='R' && gr<30){
        trX=map(abs(trX),0,gr,0,30);
        trY=map(abs(trY),0,gr,0,30);
        trX=signX*trX;
        trY=signY*trY;
    }
    
    line(0, 0, trX,trY);
   
  
    push();
  
    translate(trX,trY);
    rotate(this.fi);
    if(abs(this.L)>0.009){
      triangle(0,0,-10,-2,-10,2);
    
    }
    pop();
     push();
    strokeWeight(1);
    translate(trX/2,trY/2);
  
    rotate(-telo.fi);
    translate(0,-15);
    textFont(f);
    if(abs(this.L)>0.5){
      text(this.naziv,0,0);
    }
    pop();
  }
  
  
}

 class Telo{
   
     constructor(r, fi,w, alfa){
       this.r=r;
       this.fi=fi;
       this.w=w;
       this.alfa=alfa;
       this.position=new p5.Vector(rPutanje,0);
       this.R=new Vektor(0,0,rPutanje,0,"R");
       let k;
       if(dirOfRotation){
         k=-1;
       }
       else{
         k=1;
       }
       let signV=1;
       let signAlfa=1;
       if(w!==0){
         signV=k*w/abs(w);
       }
       if(alfa!==0){
         signAlfa=k*alfa/abs(alfa);
       }
       this.v=new Vektor(this.position.x,this.position.y,rPutanje*this.w,signV*HALF_PI,"v");
       let rK=rPutanje/RAZMERA;//da bi se pretvorilo iz px u cm
       this.aT=new Vektor(this.position.x,this.position.y,rK*this.alfa,signAlfa*HALF_PI,"aT");
       this.aN=new Vektor(this.position.x,this.position.y,this.odrediIntAn(), PI,"aN");
       let aVec=p5.Vector.add(this.aT.vector,this.aN.vector);
       let xOsa=createVector(1,0);
       let ugao=xOsa.angleBetween(aVec,xOsa);
       this.a=new Vektor(this.position.x,this.position.y,aVec.mag(), ugao,"a");
       
     }
     move(){
       let k;
       if(dirOfRotation){
         k=-1;
       }
       else{
         k=1;
       }
       this.w +=this.alfa*dt;
       this.fi +=(k*this.w*dt);
       this.position=new p5.Vector(rPutanje*cos(this.fi),rPutanje*sin(this.fi));
       
     }
     updateVectors(){
       let rK=rPutanje/RAZMERA;//da bi se pretvorilo iz px u cm
       this.v.position=this.position.copy();
       this.aT.position=this.position.copy();
       this.aN.position=this.position.copy();
       this.a.position=this.position.copy();  
       let k;
       if(dirOfRotation){
         k=-1;
       }
       else{
         k=1;
       }
       let signV=1;
       let signAlfa=1;
       if(this.w!==0){
         signV=k*this.w/abs(this.w);
       }
       if(this.alfa!==0){
         signAlfa=k*this.alfa/abs(this.alfa);
       }
       let fiV=signV*HALF_PI;
       let fiAlfa=signAlfa*HALF_PI;
       this.v.L=rK*this.w;
       this.v.rotateVector(fiV);
       this.v.update();
       this.aN.L=this.odrediIntAn();
       
       this.aT.L=rK*this.alfa;
       this.aT.rotateVector(fiAlfa);
       let aVec=p5.Vector.add(this.aT.vector,this.aN.vector);
       let xOsa=createVector(1,0);
       let ugao=xOsa.angleBetween(aVec,xOsa);
       
       this.a=new Vektor(this.position.x,this.position.y,aVec.mag(), ugao,"a");
       this.aN.update();
       this.aT.update();
       this.a.rotateVector(ugao);
       this.a.update();
       
       
     }
     odrediIntAn(){
       let rK=rPutanje/RAZMERA;//da bi se pretvorilo iz px u cm
       return this.v.L*this.v.L/rK;
       
     }
     show(){
       
       push();
         fill(color(255,0,0));
         stroke(color(255,0,0));
         strokeWeight(1);
         rotate(this.fi);
         translate(rPutanje,0);
         circle(0,0,this.r);
       pop();
     }
     showXY(){
       
       push();
         fill(color(255,0,255));
         drawingContext.setLineDash([5, 5]);
       
         stroke(color(255,0,255));
         strokeWeight(1);
         line(0,this.position.y,this.position.x,this.position.y);
         line(this.position.x,this.position.y,this.position.x,0);
       pop();
       push();
         stroke(color(50,0,255));
         strokeWeight(3);
         line(0,0,this.position.x,0);
         line(0,0,0,this.position.y);
       pop();
     }
     showR(){
       
       push();
         fill(color(255,255,100));
         strokeWeight(1);
         stroke(color(255,255,0));
         rotate(this.fi);
         this.R.display();
       pop();
     }
     showV(){
       push();
         fill(color(255,0,0));
         stroke(color(255,0,0));
         strokeWeight(2);
         rotate(this.fi);
         translate(rPutanje,0);
     
       this.v.display();
       pop();
       
     }
     showAN(){
       push();
         fill(color(50,25,255));
         stroke(color(50,25,255));
         strokeWeight(2);
         rotate(this.fi);
         translate(rPutanje,0);
     
         this.aN.display();
       pop();
     }
     showAT(){
       
       push();
         fill(color(50,25,255));
         stroke(color(50,25,255));
         strokeWeight(2);
         rotate(this.fi);
         translate(rPutanje,0);
 
         this.aT.display();
       pop();
     }
     showA(){
       
       push();
         fill(color(100,100,200));
         stroke(color(100,100,200));
         strokeWeight(3);
         rotate(this.fi);
         translate(rPutanje,0);
  
         this.a.display();
       pop();
     }
    
  }