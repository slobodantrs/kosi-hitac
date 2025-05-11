
var canvasDrawing;
 let container;
 let containerMain;

 let infoPanel;
 let infoText;//label for instruction

 var sliderAngl;
 var AnglVal;
  var sliderLen;
 var LenVal;
 
 var sliderEditAngl;/*slider for addition angle on the current value*/
 var AnglEditVal;//value of sliderEditAngle
  var sliderEditLen;/*slider for multiply length on the current value of selected vector length*/
 var LenEditVal;
 
// var sliderRF;//slider for ratio of the force
// var ratioF;
 var isMobile;
 var widthS;
 var heightS;
 var vectors=[];
 var vectorsPractice=[];
  let stop=false;
  let mod=0;
  let f;
 let f1;
 let f2;
 let fM;
 let expression;
 let oznake=['a','b','c','d','e'];
 let tekucaOznaka=0;
 let multLab;
 let operation;//-1 on start, 0-finish previous operation, 1-plus,2-substr,3-mult
 let btnPanelOperation;
 let buttonPlus;
 let btnMinus;
 let buttonMult;
 let buttonFinish;
 let buttonAdd;
 let btnRandVect;
 let buttonPract;
 let btnParalellFinish;
 let btnParalell;
 let divContainerTool;
 let divContainerIn;
 let PosPanel;
 let AnglEditTitledPanel;
  let AnglEditPanel;
  let AnglEditValuePanel;
  let AnglEditDonePanel;
  let  titlePOperation;
  let  titlePOperation2;
 let curKoef=1;//koef for mult
 let curOperation=0;//0-no operation, 1-plus,2-substr,3-mult
 let defaultValue=10;
 let showInfo;
 let rPocetka=4;
 let curSelectedVectors=[];//aray of all selected vectors
 let showOriginalVectors;
 let showCopyVectors;
 let START_H_FOR_SELECTION=60;
 let START_X_FOR_SELECTION=20;
 let DIAMETER_SELECTED_VECTORS =15;
 let isMouseDragged=false;
 let pritisnuta=false;
 let pPosition=null;
 let paralellograms=[];
 let drawResult=false;//does the drawing  result vector start
 let curResultVector=null;
 let numClick=0;//number of click in operation 4-drawing result vector
 let resultantT=null;// true solution-resultant
 let resultantEnd=null;
 let result=false;
 let isFinishPractice=false;
 let dSliderLen=0.1;//step for LChange slider
 isChangingAngle=false;//indicate if slider for changing vector angle is triggered
 
function setup() {
  isMobile = window.orientation > -1;
  
   determineSize();
  
 
  canvasDrawing=createCanvas(widthS ,heightS ,P2D);
  
  
  container = document.getElementById('canvasForHTML');
  containerMain= document.getElementById('container');
  infoPanel = document.getElementById('infoPanel');
  
 
  f=textFont("Tahoma",10);//kreira se font
  f1=textFont("Tahoma",12);//kreira se font
  f2=textFont("Tahoma",14);//kreira se font
  fM=textFont("Tahoma",9);//kreira se font
  
  
  createGUI();
  //noLoop();
  operation=-1;
  expression="VEKTORS EXPRESSION: ";
  showInfo=true;
  showOriginalVectors=true;
  showCopyVectors=false;
  
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
      console.log("Mobilni uredjaj"+isMobile+" sirina je:"+widthS);
    }
    else{
      widthS=displayWidth;
      heightS=widthS;
      console.log("Mobilniuredjaj sirina je:"+widthS);
    }
  }
  else{
    widthS=displayWidth*4 /9;
    heightS=displayHeight * 3 /4;
    console.log("Desktop racunar sirina je:"+widthS);
  }
}

function windowResized() {
  determineSize();
  resizeCanvas(widthS, heightS,true);
  
}
function draw() {
   background(220);   
   
   push();
   textFont(f1);
   if(isMobile){
     textFont(fM);
   }
   stroke(10,10,10);
   fill(10,10,10);
   if(mod===0){
     text("ADDING VECTOR AND OPERATION",20,30);
     
     buttonPract.attribute('disabled','');
     buttonAdd.removeAttribute('disabled');
     btnRandVect.removeAttribute('disabled');
     btnParalell.attribute('disabled','');
     btnParalellFinish.attribute('disabled','');
     
   }
   else if(mod===1){//finish adding expression
     buttonPract.removeAttribute('disabled');
     buttonAdd.attribute('disabled','');
     btnRandVect.attribute('disabled','');
     buttonFinish.attribute('disabled','');
     buttonPlus.attribute('disabled','');
     btnMinus.attribute('disabled','');
     buttonMult.attribute('disabled','');
   }
   else if(mod===2){//practice mode
   if(isMobile){
     text("DETERMINE THE RESULTING VECTOR",50,heightS-30);
   }
   else{
     text("DETERMINE THE RESULTING VECTOR",50,30);
   }
    
     buttonAdd.attribute('disabled','');
     btnRandVect.attribute('disabled','');
     buttonPract.attribute('disabled','');
     btnParalell.removeAttribute('disabled');
   }
   pop();
   push();
   stroke(10,10,10);
   
   textFont(f);
   if(isMobile){
     textFont(fM);
   }
   text(expression,widthS/2,30);
   pop();
   strokeWeight(1);
   fill(0,0,255);  
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
   pop();
   line(0,heightS/2-50,0,-(heightS/2-50));
   push();
   translate(0,-(heightS/2-50));
   rotate(-HALF_PI);
   triangle(0,0,-10,-5,-10,5);
   pop();
   
   /* draw original vectors*/
   if(showOriginalVectors){
     for(let i=0;i<vectors.length;i++){
           if(vectors[i].selected){
             strokeWeight(3);
           }
            vectors[i].display();  
            
            vectors[i].selectedArea.display();  
            
     }
     /*Show vector info*/
     for(let i=0;i<vectors.length;i++){
         let vect=vectors[i];
         if(showInfo){
          strokeWeight(1);
          if(vectors[i].selected){
            stroke(color(0,0,0));
          }
          else{
            stroke(color(0,0,0));
          }
            text("Vector "+oznake[i]+"("+nfs(vect.a,3,1)+","+nfs(-vect.b,3,1)+") is added on position ("+nfs(vect.position.x,3,1)+","+nfs(-vect.position.y,3,1)+")",50-widthS/2,-heightS/2+60+(i*30));
         }
     }
   }
   /* draw copy vectors*/
   if(showCopyVectors){
     for(let i=0;i<vectorsPractice.length;i++){
           if(vectorsPractice[i].selected){
             strokeWeight(3);
           }
            vectorsPractice[i].display();  
            if(vectorsPractice[i].closeNumPoint==1){
               vectorsPractice[i].displayClosed(1);
            }
            else if(vectorsPractice[i].closeNumPoint==2){
               vectorsPractice[i].displayClosed(2);
            }
            vectorsPractice[i].selectedArea.display();  
     }
     
     textFont(f1);
     if(isMobile){
       textFont(fM);
     }
      for(let i=0,num=0;i<vectorsPractice.length;i++){
       let vect=vectorsPractice[i];
       if(showInfo){
        
          strokeWeight(1);
          let alfaTag="";
          if(vectorsPractice[i].selected){
            stroke(color(30,30,30));
            alfaTag = nfs(degrees(vectorsPractice[i].fi),3,1)+"deg";
          }
          else{
            stroke(color(0,0,0));
          }
          let tag;
          if(vect.isEndTrueResultant){// End Resultant which is true
            stroke(color(200,5,255));
            tag="R True";
          }
          else if(vect.isEndResultant){// End Resultant got in practice
            stroke(color(200,0,0));
            tag="R Calc";
          }
         else if(vect.isResultant){// middle resultant
           num++;
            tag="R"+num;
             
         }
         else{// some vector
           tag=oznake[i];
         }
           text("Vector "+tag+"("+nfs(vect.a,3,1)+","+nfs(-vect.b,3,1)+") is added on position ("+nfs(vect.position.x,3,1)+","+
           nfs(-vect.position.y,3,1)+")"+alfaTag,50-widthS/2,-heightS/2+60+(i*30));
         }
     }
     
     
   }
   
   /* draw parallegram if it have any*/
   if(paralellograms.length>0){
     for(let i=0;i<paralellograms.length;i++){
       let par=paralellograms[i];
       par.display();
       if(par.drawStart){
     //    console.log('drawing parallelogram display start');
              par.displayStart();
       }
       if(!isMobile && drawResult && numClick % 2===1){
         stroke(color(200,100,100));
         line(par.startP.x,par.startP.y,mouseX-widthS/2,mouseY-heightS/2);
       }
     }
   }
   else{
     if(!isMobile && drawResult && numClick % 2===1){
         stroke(color(200,5,5));
         if(curResultVector!=null){
           line(curResultVector.position.x,curResultVector.position.y,mouseX-widthS/2,mouseY-heightS/2);
         }
      }
   }
   
   /*draw true resultant vector */
   if(mod == 6)//finish practice
   {
     push();    
     resultantT.display();
     pop();
   }
   
   
   /*enable/disable operations controls*/
   if( mod===0 && operation!==0 ){
       buttonPlus.attribute('disabled', '');
       btnMinus.attribute('disabled', '');
       buttonMult.attribute('disabled', '');
       buttonFinish.attribute('disabled', '');
       multLab.attribute('disabled', '');
       buttonAdd.removeAttribute('disabled');
       btnRandVect.removeAttribute('disabled');
   }
   else if(mod===0 && operation===0){//operation=0, enable panel operation and sisable btnUnos and btnRandUnos
      buttonPlus.removeAttribute('disabled');
      btnMinus.removeAttribute('disabled');
      buttonMult.removeAttribute('disabled');
      buttonFinish.removeAttribute('disabled');
      multLab.removeAttribute('disabled');
      buttonAdd.attribute('disabled','');
      btnRandVect.attribute('disabled','');
   }
   else if(mod===2 && operation===3){//operation drawing paralellogram
      btnParalell.attribute('disabled','');
      btnParalellFinish.removeAttribute('disabled');
   }
   else{
      buttonAdd.attribute('disabled','');
      btnRandVect.attribute('disabled','');
   }
    push();
    textFont(f2);
    strokeWeight(3);
   if(mod==6 && result){    
     stroke(color(0,200,0));   
     
     text("TASK SUCCESFULL",-widthS/2+50,-heightS/2+60+(30*vectorsPractice.length));
     
   }
   else if( mod==6 && !result){
     stroke(color(200,0,0));   
     
     text("TASK FAILED",-widthS/2+50,-heightS/2+60+(30*vectorsPractice.length));
   }
   pop();
   /*information*/
   showInformation();
   if(mod<2){
     divContainerTool.hide();
 
     divContainerTool.style("height", "0px");
     divContainerTool.style("visibility", "collapse");
     divContainerIn.show();
    
     divContainerIn.style("height", "auto");
     divContainerIn.style("visibility", "visible");
     btnPanelOperation2.hide();     
     btnPanelOperation1.show();
     btnPanelOperation1.style("height", "auto");
     btnPanelOperation1.style("width", "100%");
     btnPanelOperation1.style("visibility", "visible");
     btnPanelOperation2.style("height", "0px");
     btnPanelOperation2.style("visibility", "hidden");
     titlePOperation2.hide();
     titlePOperation2.style("height", "0px");
     titlePOperation2.style("visibility", "hidden");
     titlePOperation.show();
 
     titlePOperation.style("height", "auto");
     titlePOperation.style("visibility", "vissible");
   }
   else{
     divContainerIn.hide();
     divContainerIn.style("height", "0px");
     divContainerIn.style("visibility", "collapse");
     divContainerTool.show();
     btnPanelOperation1.hide();
     btnPanelOperation2.show();
     
     divContainerTool.style("height", "auto");
     divContainerTool.style("visibility", "visible");
     btnPanelOperation2.style("height", "auto");
     btnPanelOperation2.style("visibility", "visible");
     btnPanelOperation1.style("width", "100%");
     btnPanelOperation1.style("height", "0px");
     btnPanelOperation1.style("visibility", "hidden");
     titlePOperation2.show();
     titlePOperation2.style("height", "auto");
     titlePOperation2.style("visibility", "vissible");
     
     titlePOperation.hide();
     titlePOperation.style("height", "0px");
     titlePOperation.style("visibility", "hidden");
   }
  
}

/*Determine information*/
function showInformation(){
 if(mod===0){
    if(operation ===-1){
      infoText.html(" Press 'add vector' to create customized vector or 'Add Rand' to create random vector");
    }
    else if(operation === 0){
      infoText.html(" Press '+' or '-' to add  operation addition or substraction in expression for practice. Add '*' to multiply last creating vector. "+
      " Press finish for finishing creating an expression for practice. Change vector's length or vector's angle using sliders on 'Data for vector' panel");
    }
    else if(operation>0 && operation<4){
      infoText.html(" Press 'add vector' to create customized vector or 'Add Rand' to create random vector");    
    }
    
  }
  else if(mod===1){
    infoText.html(" Press 'Practice' to start practice with vector using the created  expression. Then select vector which you want to move clicking or touching colored circle area beside vector's data"+
    "Notice: Use two finger for drag vector on mobile devices and tablets");
  }
  else if(mod===2){
    if(operation ===-1){
      infoText.html(" Press to colored circle beside the vector to select it. Press taster ctrl '+' colored circle(on desktop computer) or touch its all(on mobile and tablet), to select two or more vectors in the same time. Drag to move selected vector."+
      " Press the button || to do task defined with expression using paralelogram's metod or start to select an vector to do expression with 'polygon's method."+
      " Select some vector and use Operation panel to change it's angle or length multiply it with some koeficient. Using sliders to increment an angle or shoose koeficient for multiply."+
      " Pres the button 'res' to draw resultant vector using the polygon's method. For using the 'paralellogram's method  you mast click the '||' button first."+
      " Pres the button 'Fin' to check result. Your resultant wector will be colored red, but resultant determined application is  colored purple");
    }
    else if(operation === 0){
      infoText.html(" Press to colored circle beside the vector to select it. Press taster 'ctrl' + colored circle to select two or more vectors in the same time. On mobile devices only touch in circled area beside all vectors for selection"+
      " Drag to move selected vector. Pres the button 'res' to determine resultant vector using the polygon's method."+
      " For using the 'paralellogram's method  you mast click the '||' button first."+
      " Pres the button 'Fin' to check result. Your resultant wector will be colored red, but  resultant determined application is  colored purple"+
      " Pres the button 'Rest' for restart practicing");
    }
    else if(operation === 3){
      infoText.html(" Select two vectors, one for the edge and one for direction of parallelogram, and next, press button '|| draw' for finish the operation "+
      "");
    }
    else if(operation === 4){
      infoText.html(" Draw resultant clicking on start and end point. Your resultant wector will be colored red, but  resultant determined application is  colored purple");    
    }
    
    
  }
  else if(mod === 5){
      infoText.html(" Drag the selected vector to create parallelogram or polygon of vectors.");
    }
  else if(mod === 6){
      infoText.html(" You finish your 'Practice' and your result is shown. Click 'Restart' button for start new task");
    }
 
}

function createGUI(){
  let canvasContainer = createDiv();
  
  let infoPar=createP("Instruction: ");
  infoText=createP();
 
  infoPar.parent(infoPanel);
  infoText.parent(infoPanel);

  
  
   //create controls
  let divContainer = createDiv();
  divContainerIn = createDiv();
  let divContainerOperation = createDiv();
  divContainerTool = createDiv();
  let titleP=createElement('h6', 'Data for vector');
  titleP.class('d-flex justify-content-center p-2 text-white'); 
  
  if(isMobile){
   
    divContainer.addClass("text-white");
    titleP.parent(divContainer);
    divContainerIn.parent(divContainer);
    divContainerOperation.parent(divContainer);
    canvasDrawing.parent(divContainer);
  //  canvasContainer.parent(container);
    divContainerTool.parent(divContainer);
    divContainer.parent(container);
  
    divContainer.style('width', widthS+'px');
    divContainerIn.class("d-flex flex-column align-items-start justify-content-left flex-wrap mb-auto");
    divContainerOperation.class("d-flex flex-column align-items-justify justify-content-left flex-wrap mb-auto");
    divContainerTool.addClass('d-flex flex-row align-items-justify justify-content-left flex-wrap mb-auto');
    divContainerIn.style('width', windowWidth);
    divContainerOperation.style('width', windowWidth);
    divContainerTool.style('width', windowWidth);
  }
  else{
    titleP.parent(divContainerIn);
    canvasContainer.class("d-flex flex-row justify-content-center");
    divContainerIn.parent(divContainer);
    canvasDrawing.parent(container);
    canvasDrawing.style('height','100%');
    divContainerTool.parent(divContainer);
   
    divContainer.parent(container);
    divContainerOperation.parent(canvasContainer);
  //  divContainerOperation.parent(containerMain);
    canvasContainer.parent(container);
   
    divContainer.style('width', '180px');
    divContainerIn.addClass('d-flex flex-column');
    divContainerOperation.addClass('d-flex flex-column');
    divContainerTool.addClass('d-flex flex-column');
   
  }
  
  divContainer.id('inputContainer');
  divContainer.style('height', 'auto');
  divContainer.addClass('d-flex flex-column');
  divContainer.style('background', '#0000bb');
  divContainer.style('color', '#ffffbb');

  
  
  PosPanel=createDiv();
  PosTitle=createElement('h5','Position:');
  PosTitle.style('text-align','center');
  
  PosPanel.style('width','100%');
  PosXLab=createSpan("x= "); //label for entry1
   PosXLab.style('padding-right: 5px; padding:5px');
  let PosDistLab=createSpan("   "); //label for entry1
  PosDistLab.style('padding-right: 5px; padding:5px');
  PosYLab=createSpan("y="); //label for entry1
  PosPanel.class('d-flex flex-row justify-content-left p-2 mg-3 mb-auto'); 
  PosXLab.style('width','70px');
  PosYLab.style('width','50px');
  
  inputPosX = createInput(""+defaultValue); 
  inputPosX.style('width','50px');
  inputPosY = createInput(""+defaultValue); 
  inputPosY.style('width','50px');
  
  PosTitle.parent(divContainerIn);
  PosXLab.parent(PosPanel);
  inputPosX.parent(PosPanel);
  PosDistLab.parent(PosPanel);
  PosYLab.parent(PosPanel);
  inputPosY.parent(PosPanel);
  PosPanel.parent(divContainerIn);
 
  LenTitledPanel=createDiv();
  let LenPanel=createDiv();
  let LenValuePanel=createDiv();
  LenTitledPanel.class('d-flex flex-column  p-2');

  LenPanel.style('width','100%');
  LenPanel.class('d-flex flex-row justify-content-between p-2');
  LenValuePanel.style('width','100%');
  LenValuePanel.class('d-flex flex-row justify-content-between p-2');

  LenLab=createSpan("length[px]: "); //label for entry1
  LenMinLab=createSpan("10"); //label for KTMinLab
  LenMaxLab=createSpan("300"); //label for KTMaxLab  
  LenVal=createSpan("100");
  
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
  sliderLen=createSlider(10,360,30,1);
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
  AnglPanel.class('d-flex flex-row justify-content-between p-2 mb-auto');
  AnglValuePanel.style('width','100%');
  AnglValuePanel.class('d-flex flex-row justify-content-between p-2');
  
  let btnAInc=createButton("+");
  btnAInc.style('width','25px'); 
  btnAInc.style('height','25px'); 
  btnAInc.mousePressed(incrementingASlider);
  let btnADec=createButton("-");
  btnADec.style('width','25px'); 
  btnADec.style('height','25px'); 
  btnADec.mousePressed(decrementingASlider);
  btnAInc.parent(AnglValuePanel);
  btnADec.parent(AnglValuePanel);

  AnglLab=createSpan("angle[deg]: "); //label for entry1
  AnglMinLab=createSpan("0"); //label for KTMinLab
  AnglMaxLab=createSpan("360"); //label for KTMaxLab  
  AnglVal=createSpan("30");
  
 
  AnglLab.parent(AnglValuePanel);
  AnglVal.parent(AnglValuePanel);
  sliderAngl=createSlider(1,360,30);
  sliderAngl.style('width','75px'); 
  sliderAngl.changed(changeAngle);
  AnglMinLab.parent(AnglPanel)
  sliderAngl.parent(AnglPanel);
  AnglMaxLab.parent(AnglPanel);
  
  AnglValuePanel.parent(AnglTitledPanel);
  AnglPanel.parent(AnglTitledPanel);
  AnglTitledPanel.parent(divContainerIn);
 

  let btnPanel=createDiv();
  
  btnPanel.style('width','100%');
  btnPanel.class('d-flex align-content-around justify-content-center flex-wrap p-2');
  buttonAdd = createButton('add vect'); 
  buttonAdd.mousePressed(inputingVect);
  buttonAdd.style( "width","70px");
  buttonAdd.parent(btnPanel);
  btnRandVect = createButton('add rand'); 
  btnRandVect.mousePressed(inputingRandVect);
  btnRandVect.style( "width","70px");
  btnRandVect.parent(btnPanel);
  buttonPract = createButton('practice'); 
  buttonPract.mousePressed(practicing);
  buttonPract.style( "width","70px");
  buttonPract.parent(btnPanel);
  buttonPract.attribute('disabled','');
  buttonRestart = createButton('Restart'); 
  buttonRestart.mousePressed(restarting);
  buttonRestart.style( "width","70px");
  buttonRestart.parent(btnPanel);
  
  btnPanel.parent(divContainer);
  
  /*Button panel operation*/
  btnPanelOperation=createDiv();
  btnPanelOperation1=createDiv();
  let btnPanelMult=createDiv();
  let btnPanelAddition=createDiv();
  let btnPanelSubstraction=createDiv();
  let btnPanelFinish=createDiv();
  
  

  btnPanelOperation.style('border-left','solid thin #fffa44');
  
  btnPanelOperation.style('font-size','10px');
  btnPanelOperation.class("d-flex flex-column justify-content-left text-white bg-secondary");
  btnPanelOperation1.class("d-flex flex-column justify-content-left text-white bg-secondary");
  if(isMobile){
    btnPanelOperation1.removeClass("flex-column");
    btnPanelOperation1.addClass("flex-row");
    btnPanelOperation1.style('width','100%');
  }
  
  btnPanelAddition.class('d-flex flex-row justify-content-left p-2');
  btnPanelMult.class('d-flex flex-row justify-content-left p-2');
  btnPanelSubstraction.class('d-flex flex-row justify-content-left p-2');
  btnPanelFinish.class('d-flex flex-row justify-content-left p-2');
  
   titlePOperation=createElement('h6', 'Operation 1');
  titlePOperation.class('d-flex justify-content-center p-2 text-bg-primary'); 
  titlePOperation.parent(btnPanelOperation);
  buttonPlus = createButton('+'); 
  buttonPlus.mousePressed(additionVector);
  buttonPlus.style('width','40px');
  buttonPlus.style('height','40px');
  if(operation<1){
    buttonPlus.attribute('disabled','');
  }

  
  buttonPlus.parent(btnPanelAddition);
  btnMinus = createButton('-'); 
  btnMinus.mousePressed(substrVector);
  btnMinus.parent(btnPanelSubstraction);
  btnMinus.style('width','40px');
  btnMinus.style('height','40px');
  btnPanelSubstraction.parent(btnPanelOperation1);
  
  buttonMult = createButton('*'); 
  buttonMult.style('width','40px');
  buttonMult.style('height','40px');
  
  multLab=createInput("1");
  multLab.style('width','40px');
  multLab.style('height','40px');
  multLab.style('border','solid thin #000');
  
  
  buttonMult.mousePressed(multVector);
  buttonMult.parent(btnPanelMult);
  multLab.parent(btnPanelMult);
  btnPanelAddition.parent(btnPanelOperation1);
  btnPanelSubstraction.parent(btnPanelOperation1);
  btnPanelMult.parent(btnPanelOperation1);
  buttonFinish = createButton('finish'); 
  buttonFinish.mousePressed(finishOperation);
  buttonFinish.addClass("d-flex align-items-center");
  
  buttonFinish.style('width','80px');
  buttonFinish.style('height','40px');
  buttonFinish.parent(btnPanelFinish);
  btnPanelFinish.parent(btnPanelOperation1);
  
  btnPanelOperation1.parent(btnPanelOperation);
  
   /*Button panel operation 2*/
  btnPanelOperation2=createDiv();
  let btnPanelResult=createDiv();
  let btnPanelParall=createDiv();
  let btnPanelEdit1=createDiv();
  let btnPanelEdit2=createDiv();
  
  

  btnPanelOperation2.style('border-top','solid thin #fffa44');
  
  btnPanelOperation2.style('font-size','10px');
  btnPanelOperation2.class("d-flex flex-column justify-content-left text-white bg-secondary p-3");
  if(isMobile){
    btnPanelOperation2.removeClass("flex-column");
    btnPanelOperation2.addClass("flex-row");
    btnPanelOperation2.addClass("mb-auto");
  }
  btnPanelResult.class('d-flex flex-row justify-content-left p-2');
  btnPanelParall.class('d-flex flex-row justify-content-left p-2');
  btnPanelEdit1.class('d-flex flex-row justify-content-left p-2');
  btnPanelEdit2.class('d-flex flex-row justify-content-left p-2');
  
   titlePOperation2=createElement('h6', 'Operation 2');
  titlePOperation2.class('d-flex justify-content-center p-2 text-bg-primary'); 
  titlePOperation2.parent(btnPanelOperation);
  
  let btnResult = createButton('Res'); 
  btnResult.mousePressed(drawResultantVector);
  btnResult.style('width','40px');
  btnResult.style('height','40px');
  if(operation<4){
    btnResult.attribute('disabled','');
  }  
  btnResult.parent(btnPanelResult);
  
  btnParalell = createButton('||'); 
  btnParalell.mousePressed(drawParalellogram);
  btnParalell.parent(btnPanelParall);
  btnParalell.style('width','40px');
  btnParalell.style('height','40px');
  
  btnParalellFinish = createButton('draw ||'); 
  btnParalellFinish.mousePressed(finishDrawParalellogram);
  btnParalellFinish.parent(btnPanelParall);
  btnParalellFinish.style('width','40px');
  btnParalellFinish.style('height','40px');
  
  
  buttonFinishPractice = createButton('Fin'); 
  buttonFinishPractice.style('width','40px');
  buttonFinishPractice.style('height','40px');
  buttonRestartPractice = createButton('Rest'); 
  buttonRestartPractice.style('width','40px');
  buttonRestartPractice.style('height','40px');
  buttonRestartPractice.mousePressed(restartPractice);
  
  
  
  
  buttonFinishPractice.mousePressed(finishPractice);
  buttonFinishPractice.parent(btnPanelEdit1);
  buttonRestartPractice.parent(btnPanelEdit1);
  
  
  
 // buttonUndo = createButton('<-'); 
//  buttonUndo.mousePressed(undoOperation);
 // buttonUndo.style('width','80px');
 // buttonUndo.style('height','40px');
//  buttonUndo.parent(btnPanelEdit2);/*end button panel operation 2*/
  
  btnPanelResult.parent(btnPanelOperation2);
  btnPanelParall.parent(btnPanelOperation2);
  btnPanelEdit1.parent(btnPanelOperation2);
  btnPanelEdit2.parent(btnPanelOperation2);
  
  btnPanelOperation2.parent(btnPanelOperation);
  
  if(isMobile){
    btnPanelOperation.parent(divContainerOperation);
    
  }
  else{
     btnPanelOperation.parent(canvasContainer);
    
  }
  
  
  /*Tool panel*/
  
  let titlePEdit=createElement('h6', 'Tools for practice');
  titlePEdit.class('d-flex justify-content-center p-2 mb-auto'); 
  if(isMobile){
    titlePEdit.parent(divContainer);
  }
  else{
    titlePEdit.parent(divContainerTool);
  }
  
   let LenEditTitledPanel=createDiv();
  let LenEditPanel=createDiv();
  let LenEditValuePanel=createDiv();
  let LenEditDonePanel=createDiv();
  LenEditTitledPanel.class('d-flex flex-column  p-2');

  LenEditPanel.style('width','100%');
  LenEditPanel.class('d-flex flex-row justify-content-between p-2 mb-auto');
  LenEditValuePanel.style('width','100%');
  LenEditValuePanel.class('d-flex flex-row justify-content-between p-2');
  LenEditDonePanel.style('width','100%');
  LenEditDonePanel.class('d-flex flex-row justify-content-center p-2');

  LenEditLab=createSpan("Mult L[times]: "); //label for entry1
  LenEditMinLab=createSpan("0.1"); //label for KTMinLab
  LenEditMaxLab=createSpan("5"); //label for KTMaxLab  
  LenEditVal=createSpan("1");
  
  let btnLEditDone=createButton("Done");
  btnLEditDone.style('width','50px'); 
  btnLEditDone.style('height','25px'); 
  btnLEditDone.mousePressed(doneLEditSlider);
  let btnLEditInc=createButton("+");
  btnLEditInc.style('width','25px'); 
  btnLEditInc.style('height','25px'); 
  btnLEditInc.mousePressed(incrementingLEditSlider);
  let btnLEditDec=createButton("-");
  btnLEditDec.style('width','25px'); 
  btnLEditDec.style('height','25px'); 
  btnLEditDec.mousePressed(decrementingLEditSlider);
  btnLEditInc.parent(LenEditDonePanel);
  btnLEditDec.parent(LenEditDonePanel);
  btnLEditDone.parent(LenEditDonePanel);
 
  LenEditLab.parent(LenEditValuePanel);
  LenEditVal.parent(LenEditValuePanel);
  sliderEditLen=createSlider(0.0,5,0.0,0.1);
  sliderEditLen.style('width','75px'); 
  sliderEditLen.changed(changeEditLength);
  LenEditMinLab.parent(LenEditPanel)
  sliderEditLen.parent(LenEditPanel);
  LenEditMaxLab.parent(LenEditPanel);
  
  LenEditValuePanel.parent(LenEditTitledPanel);
  LenEditPanel.parent(LenEditTitledPanel);
  LenEditDonePanel.parent(LenEditTitledPanel);
  LenEditTitledPanel.parent(divContainerTool);
  
  
  
  AnglEditTitledPanel=createDiv();
  AnglEditPanel=createDiv();
  AnglEditValuePanel=createDiv();
  AnglEditDonePanel=createDiv();
  AnglEditTitledPanel.class('d-flex flex-column  p-2');

  AnglEditPanel.style('width','100%');
  AnglEditPanel.class('d-flex flex-row justify-content-between p-2 mb-auto');
  AnglEditValuePanel.style('width','100%');
  AnglEditValuePanel.class('d-flex flex-row justify-content-between p-2');
  AnglEditDonePanel.class('d-flex flex-row justify-content-center p-2');
  
  let btnAEditInc=createButton("+");
  btnAEditInc.style('width','25px'); 
  btnAEditInc.style('height','25px'); 
  btnAEditInc.mousePressed(incrementingAEditSlider);
  let btnAEditDec=createButton("-");
  btnAEditDec.style('width','25px'); 
  btnAEditDec.style('height','25px'); 
  btnAEditDec.mousePressed(decrementingAEditSlider);
  let btnAEditExe=createButton("done");
  btnAEditExe.style('width','50px'); 
  btnAEditExe.style('height','25px'); 
  btnAEditExe.mousePressed(doneChangeAEditSlider);
  btnAEditInc.parent(AnglEditDonePanel);
  btnAEditDec.parent(AnglEditDonePanel);
  btnAEditExe.parent(AnglEditDonePanel);

  AnglEditLab=createSpan("change angle for[deg]: "); //label for entry1
  AnglEditMinLab=createSpan("0"); //label for KTMinLab
  AnglEditMaxLab=createSpan("360"); //label for KTMaxLab  
  AnglEditVal=createSpan("0 deg");
  
 
  AnglEditLab.parent(AnglEditValuePanel);
  AnglEditVal.parent(AnglEditValuePanel);
  sliderEditAngl=createSlider(0,359,0);
  sliderEditAngl.style('width','100%'); 
  sliderEditAngl.changed(changeEditAngle);
  AnglEditMinLab.parent(AnglEditPanel)
  sliderEditAngl.parent(AnglEditPanel);
  AnglEditMaxLab.parent(AnglEditPanel);
  
  AnglEditValuePanel.parent(AnglEditTitledPanel);
  AnglEditPanel.parent(AnglEditTitledPanel);
  AnglEditDonePanel.parent(AnglEditTitledPanel);
  AnglEditTitledPanel.parent(divContainerTool);
  
  
   
  /*End output panel*/
}

function changeAngle(){
  //isChangingAngle=true;
  changingAngleForSelectedVector();
    AnglVal.html(""+sliderAngl.value()+"");
    let vectorsForUpdate;
    if(mod==0){
      vectorsForUpdate=vectors;
    }
    else if(mod==1 ||(mod == 2 && (operation ==0 || operation==-1))){
      vectorsForUpdate=vectorsPractice;
    }
    for(let i=0;i<vectorsForUpdate.length;i++){
      let v= vectorsForUpdate[i];
      if(v.selected){        
       
        let dfi=2*PI-radians(sliderAngl.value());
        v.rotateVector(dfi);
      }
    }
    redraw();
}
function changeLength(){
    LenVal.html(""+sliderLen.value()+"");
    let vectorsForUpdate=[];
    if(mod==0){
      vectorsForUpdate=vectors;
    }
    else if(mod==1){
      vectorsForUpdate=vectorsPractice;
    }
    for(let i=0;i<vectorsForUpdate.length;i++){
      let v= vectorsForUpdate[i];
      if(v.selected){        
       
        let dL=sliderLen.value();
        v.L=dL;
        v.update();
      }
    }
    redraw();
}
function changeEditLength(){
    changingLengthForSelectedVector();
    LenEditVal.html(""+sliderEditLen.value());
   
}
function changeEditAngle(){

    changingAngleForSelectedVector();
    AnglEditVal.html(""+sliderEditAngl.value());
    
}



function inputingVect(){
  
  let xS=inputPosX.value();
  let yS=inputPosY.value();
  let LS=sliderLen.value();
  let x,y,L;
  let angle=2*PI-sliderAngl.value();
  let angl=radians(angle);
  
  if(xS!==null && xS!==''){
    x = float(xS);
  }
  else{
    x=defaultValue;
  }
  if(yS!==null && yS!==''){
    y = float(yS);
  }
  else{
    y=defaultValue;
  }
  
  if(LS!==null && LS!==''){
    L=float(LS);
  }
  else{
    L=defaultValue;
  }
 
  let vect= new Vektor(x,y,L,angl);
  if(curKoef>1){
    expression=expression+curKoef+"*"+oznake[tekucaOznaka];//form expression for excersise
  }
  else{
     expression =expression+oznake[tekucaOznaka];//form expression for excersise
  }
  vect.koef=curKoef;
  tekucaOznaka++;
  vect.operation=curOperation;
  let r=int(random(255));
  let g=int(random(255));
  let b=int(random(255));
  vect.color0=color(r,g,b);
  vect.colorSel=color(255-r,255-g,255-b);
  vect.updateColor();
  vect.selected=true;
  removeSelectedVectors();
  curSelectedVectors[curSelectedVectors.length] = vect;
  vectors[vectors.length]=vect;
  
  operation=0;
  curOperation=0;
  
 
  redraw();
}
function inputingRandVect(){
  
  let vect= randomVector();
  if(curKoef>1){
    expression=expression+curKoef+"*"+oznake[tekucaOznaka];
  }
  else{
     expression =expression+oznake[tekucaOznaka];
  }
 
  tekucaOznaka++;
  vect.koef=curKoef;
  vect.operation=curOperation;
  vect.selected=true;
  removeSelectedVectors();
  curSelectedVectors[curSelectedVectors.length] = vect;
  vectors[vectors.length]=vect;
  
  operation=0;
  curOperation=0;
  
}
function practicing(){
  console.log('practicing');
  mod=2;//mod for teaching
  showOriginalVectors=false;
  showCopyVectors=true;
  createCopyVector();

}
function randomVector(){
  let x=random(-widthS/2+80,widthS/2-80);
  let y=random(-heightS/2+80,heightS/2-80);
  let angle=radians(random(0,360));
  sliderAngl.value(angle);
  let vect=new Vektor(x,y,random(10,200),angle);
  let r=int(random(255));
  let g=int(random(255));
  let b=int(random(255));
  vect.color0=color(r,g,b);
  vect.colorSel=color(255-r,255-g,255-b);
  vect.updateColor();
  return vect;
}

function additionVector(){
  removeSelectedVectors();
  operation=1;
  curOperation=1;
  
   expression=expression+"+";
}
function substrVector(){
  removeSelectedVectors();
  operation=2;
  curOperation=2;
  
   expression=expression+"-";
}
function multVector(){
  operation=0;
  curOperation=0;//some vector which is multiplicated with koef is added to previous expression
  curKoef=float(multLab.value());
  let vect=vectors[vectors.length-1];
  vect.koef=curKoef;
 let exp=expression.substr(0,expression.length-1);
  if(multLab!=null && multLab!==""){
    
    expression=exp+curKoef+"*"+oznake[tekucaOznaka-1];
  }
  curKoef=1;
  
}
function finishOperation(){
    removeSelectedVectors();
    mod=1;
    operation=-1;
    curOperation=0;
    determineResultantVector();
}
/*After finishing practice the resultant must be determined*/
function determineResultantVector(){
  let p1=vectors[0].position;
  let prevP=p1.copy();
  for(let i=0;i<vectors.length;i++){
    let dv=vectors[i];
    let op=dv.operation;
    let kf=dv.koef;
    dv.vector.mult(kf);//multiple current vector with koeficient
    let currP=null;
    
    if(op==0 || op==1){//addition two vectors
      currP=p5.Vector.add(prevP,dv.vector);
    }
    else if(op==2){//substraction of two vectors
       currP=p5.Vector.sub(prevP,dv.vector);
    }
    if(currP !=null){
      prevP=currP.copy();
    }
  }
  
  let vect=new p5.Vector.sub(prevP,p1);
  let L=vect.mag();
  let xOsa=new p5.Vector(1,0);
        
  let fi=2*PI-vect.angleBetween(xOsa);
  resultantT=new Vektor(p1.x,p1.y,L,fi);
  resultantT.isEndTrueResultant=true;
  
  
}

function drawResultantVector()
{
  
  console.log('drawResultantVector');
  operation=4;//draw resultant
 /* if(isMobile){
   drawResult=true;
  }*/
  
}
function drawParalellogram()
{
  mod=2;
  operation=3;//draw resultant
  console.log('drawParallelogramantVector');
  infoText.html("Selektuj dva vektora kao stranice paralelograma");
  btnParalellFinish.removeAttribute('disabled');
  if(isMobile){
    removeSelectedVectors();
    formCurrentSelectedVectors();
  }
}

function finishDrawParalellogram()
{
  mod=2;
  operation=0;
  numClick=0;//reset for next drawing resultant
  console.log('finishDrawParalellogram i curSelectedVectors.length='+curSelectedVectors.length);
  if(isMobile){
    formCurrentSelectedVectors();
  }
  if(curSelectedVectors.length>=2){
    let vectorsCopy=[];
      for(let j=0,k=0;j<curSelectedVectors.length;j++){
        console.log("ispisuje curSelectedVectors broj " +j);
        
        let sv=curSelectedVectors[j];
        if(sv!==null && sv!==undefined){
          
           console.log("vector "+j+":"+sv.position.x+","+sv.position.x+","+sv.a+","+sv.b);
           vectorsCopy[k]=sv;
           k++;
        }
        
      }
     let par=new Paralelogram(vectorsCopy[0],vectorsCopy[1]);
     paralellograms[paralellograms.length]=par;
     btnParalellFinish.attribute('disabled','');
  }
  else{
    infoText.html("Selektuj dva vektora kao stranice paralelograma");
  }
  removeSelectedVectors();
  
}
function restartPractice()
{
  console.log('restartPractice');
  isMouseDragged=false;
   pritisnuta=false;
   pPosition=null;
   
   drawResult=false;//does the drawing  result vector start
   curResultVector=null;
   numClick=0;//number of click in operation 4-drawing result vector
//   resultantT=null;// true solution-resultant
//determineResultantVector();
   resultantEnd=null;
   result=false;
    curKoef=1;//koef for mult
   curOperation=0;//0-no operation, 1-plus,2-substr,3-mult
  vectorsPractice=[];
  removeSelectedVectors();
  createCopyVector();
  paralellograms=[];
  mod=2;
  operation=0;
  
}
/*finish some practice when button finish is clicked*/
function finishPractice()
{
  console.log('finishPractice');
  for(let i=vectorsPractice.length-1;i>0;i--){
    let vect=vectorsPractice[i];
    if(vect.isResultant){
      vect.isEndResultant=true;
      result=checkExactness(vect);//does the result is true or not
      mod=6;
      if(resultantT!==null){
          vectorsPractice[vectorsPractice.length]=resultantT;
        }
      
      if(result){
        
        break;
      }
    }
  }
  
}
/*check exactness of result*/
function checkExactness(resV){
   let res=false;
   let RVect=resV;//resultant vector which is got by the user
   let pStartPract=RVect.position;
   let pStartTrue=resultantT.position;
   let pEndPract=p5.Vector.add(RVect.position,RVect.vector);
   let pEndTrue=p5.Vector.add(resultantT.position,resultantT.vector);
   let dpSt=p5.Vector.sub(pStartTrue,pStartPract);//displacement started points of both resultant vector
   let dpEnd=p5.Vector.sub(pEndTrue,pEndPract);//displacement started points of both resultant vector
   let LDifference=dpEnd.mag()-dpSt.mag();
   let ADifference=dpEnd.angleBetween(dpSt);
   if(LDifference<5 && ADifference<5){
     res=true;
   }
   return res;
  
}

function undoOperation()
{
  console.log('undoOperation');
}

/* Write selected vectors from vectorspractice to array currentSelectedVectors*/
function formCurrentSelectedVectors(){
  curSelectedVectors=[];
   for(let i=0;i<vectorsPractice.length;i++)
    {
      let vect=vectorsPractice[i];
      if(vect.selected){
        curSelectedVectors[i]=vect;
      }
    }
}
function removeSelectedVectors(){
  curSelectedVectors=[];
  if(mod==0){
    for(let i=0;i<vectors.length;i++)
    {
      let vect=vectors[i];
      if(vect.selected){
        vect.selected=false;
        vect.selectedArea.selected=false;
      }
    }
  }
  else if(mod==2){
  for(let i=0;i<vectorsPractice.length;i++)
  {
    let vect=vectorsPractice[i];
    if(vect.selected){
      vect.selected=false;
      vect.selectedArea.selected=false;
    }
  }
  }
  
}
function incrementingLSlider(){
  changingLengthForSelectedVector();
   sliderLen.value(sliderLen.value()+1);
   LenVal.html(""+sliderLen.value()+"");
   changeLength();

   
}
function decrementingLSlider(){
  changingLengthForSelectedVector();
   sliderLen.value(sliderLen.value()-1);
   LenVal.html(""+sliderLen.value()+"");
   changeLength();

}

function incrementingASlider(){
  
  changingAngleForSelectedVector();
   sliderAngl.value(sliderAngl.value()+1);
   AnglVal.html(""+sliderAngl.value()+"");
    changeAngle();
   
}
function decrementingASlider(){

  changingAngleForSelectedVector();
   sliderAngl.value(sliderAngl.value()-1);
   AnglVal.html(""+sliderAngl.value()+"");
    changeAngle();
}

function incrementingLEditSlider(){
  changingLengthForSelectedVector();
   sliderEditLen.value(sliderEditLen.value()+0.1);
   LenEditVal.html(""+sliderEditLen.value()+"times[*]");

   
}
function decrementingLEditSlider(){
  changingLengthForSelectedVector();
   sliderEditLen.value(sliderEditLen.value()-0.1);
   LenEditVal.html(""+sliderEditLen.value()+" times[*]");
 
}

function incrementingAEditSlider(){
  changingAngleForSelectedVector();
  //isChangingAngle=true;
   sliderEditAngl.value(sliderEditAngl.value()+1);
   AnglEditVal.html(""+sliderEditAngl.value()+"");
    
   
}
function decrementingAEditSlider(){
//  isChangingAngle=true;
  changingAngleForSelectedVector();
   sliderEditAngl.value(sliderEditAngl.value()-1);
   AnglEditVal.html(""+sliderEditAngl.value()+"");
  
}

function changingLengthForSelectedVector(){
    for(let i=0;i<vectorsPractice.length;i++){
      let vect=vectorsPractice[i];
      if(vect.selected){
        vect.isChangingLength=true;
      }
    }
}
function changingAngleForSelectedVector(){
    for(let i=0;i<vectorsPractice.length;i++){
      let vect=vectorsPractice[i];
      if(vect.selected){
        vect.isChangingAngle=true;
      }
    }
}
function doneChangeAEditSlider(){
  let vectorsForUpdate;
    if(mod==2 || mod==5){
        vectorsForUpdate=vectorsPractice;
      
      
      for(let i=0;i<vectorsForUpdate.length;i++){
        let v= vectorsForUpdate[i];
        if(v.selected){        
         
          let dfi=2*PI-radians(sliderEditAngl.value());
          dfi=v.fi+dfi;
          v.rotateVector(dfi);
        }
      }
    }
}
function doneLEditSlider(){
   if(mod==2 || mod==5){//mod for practice
      vectorsForUpdate=vectorsPractice;
    }
    for(let i=0;i<vectorsForUpdate.length;i++){
      let v= vectorsForUpdate[i];
      if(v.selected){        
       
        let koef=sliderEditLen.value();
        v.L=koef*v.L;
        v.update();
      }
    }
    redraw();
  
}

function createCopyVector(){
 
  
    for(let i=0;i<vectors.length;i++){
      let v=vectors[i];
      let vectCopy=new Vektor(v.position.copy().x,-v.position.copy().y,v.L,v.fi);
      vectCopy.color0=v.color0;
      vectCopy.colorSel=v.colorSel;
      vectCopy.updateColor();
      vectCopy.selectedArea=new SelectedArea(-widthS/2+START_X_FOR_SELECTION,-heightS/2+START_H_FOR_SELECTION+(i)*30,vectCopy.color0,vectCopy.colorSel);
      vectorsPractice[i]=vectCopy;
    }

}
/* check if moving vector have any closest point */
function checkClosest(vect){
  let res=null;
  for(let i=0;i<vectorsPractice.length;i++){
    
     let currVec=vectorsPractice[i];
     if(currVec!==vect){
       let pSt=vect.position.copy();
       
       
       let numP=currVec.checkClosed(pSt);//return 1-start point is closest, 2-end point,0-no closest
      
       if(numP===1){
         res=currVec.position.copy();
         currVec.closeNumPoint=1;
       }
       else if(numP===2){
         res=currVec.position.copy();
         res.add(currVec.vector.copy());
         currVec.closeNumPoint =2;
       }
       else{
         currVec.closeNumPoint =0;
       }
     }
    
  }
  return res;
}

function restarting(){
  vectors=[];
  vectorsPractice=[];
   stop=false;
   mod=0; 
  tekucaOznaka=0;
  curKoef=1;//koef for mult
  curOperation=0;//0-no operation, 1-plus,2-substr,3-mult
  defaultValue=10;
  rPocetka=4;
  curSelectedVectors=[];//aray of all selected vectors

  isMouseDragged=false;
  pritisnuta=false;
  pPosition=null;
  paralellograms=[];
  drawResult=false;//does the drawing  result vector start
  curResultVector=null;
  numClick=0;//number of click in operation 4-drawing result vector
  resultantT=null;// true solution-resultant
  result=false;
  isFinishPractice=false;
 isChangingAngle=false;//indicate if slider for changing vector angle is triggered
 operation=-1;
  expression="VEKTORS EXPRESSION: ";
  showInfo=true;
  showOriginalVectors=true;
  showCopyVectors=false;
 
}

function mouseClicked(evt){
  console.log("mouseClicked");
  if(!isMobile && mod==2){
    
    console.log(nfs(mouseX,3,1)+","+nfs(mouseY,3,1));
    let anySelected=false;
    for(let i=0;i<vectorsPractice.length;i++){
      let vect=vectorsPractice[i];
      if(vect.selectedArea.contains(mouseX,mouseY)){
        vect.selected=true;
        vect.selectedArea.selected=true;
        curSelectedVectors[curSelectedVectors.length] = vect;
        anySelected=true;
        console.log("selektovan ");
      }
      else if(vect.isChangingAngle){//block deselection of the current selected vector during changing its angle
        vect.isChangingAngle=false;//not deselect vector if slider for changing angle triggered
        anySelected=true;
        
      }
      else if(vect.isChangingLength){//block deselection of the current selected vector during changing its angle
        vect.isChangingLength=false;//not deselect vector if slider for changing angle triggered
        anySelected=true;
        
      }
      else{
        if(!(keyIsPressed && keyCode==CONTROL)){
          vect.selected=false;
          vect.selectedArea.selected=false;         
          
        }
        
      }
    }
    if(!anySelected){
      console.log("Nije selektovan ni jedan, uklanja se selekcija");
       removeSelectedVectors();
    }
    else{
      pritisnuta=true;
      
    }
  }
  if(!isMobile && mod==2 && operation==4){//drawing result vector
     
     if(drawResult && numClick % 2==0){//first click
        
        numClick++;
        /*In method for determine resultant width paralellogram*/
        if(paralellograms.length>0){
          for(let i=0;i<paralellograms.length;i++)
          {
            let par=paralellograms[i];
            let p=new p5.Vector(mouseX-widthS/2,-(mouseY-heightS/2));
            console.log('mouse click'+p.x+','+p.y);
            let d=dist(p.x,p.y,par.startP.x,par.startP.y);
            curResultVector=new Vektor(p.x,p.y,0,0);
            curResultVector.isResultant=true;
            if(d<=5){
              curResultVector.position=p.copy();
            }
          }
        }
        else{//the method polygon force        
            let p=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
            curResultVector=new Vektor(p.x,-p.y,0,0);
            curResultVector.isResultant=true;
       
                let vect=curResultVector;
                let cl=checkClosest(vect);//return closest point or null if have any
                
                if(cl!==null){
                   dVect=p5.Vector.sub(cl,p);
                    curResultVector.position=p5.Vector.add(p.copy(),dVect);
                }
                else{
                   curResultVector.position=p.copy();
                }
        }//end clausule else when the method polygon force is used
        
      }// end first click
      else if(!isMobile && numClick % 2==1){
        if(curResultVector!==null){
          vectorsPractice[vectorsPractice.length]=curResultVector;
        }
        drawResult=false;
        operation=0;
        numClick=0;
      }
  }
}
function mouseReleased(){
  console.log('mouseReleased');
  if(!isMobile ){
    pritisnuta=false;
     pPosition=null;
    isMouseDragged=false;
  }

  
}

function mouseMoved(){
  console.log('mouseMoved');
  
   if(!isMobile && mod==2 && operation==4){//drawing result vector
     
     if(!drawResult  && numClick % 2==0){//before first click
        drawResult=true;
        for(let i=0;i<paralellograms.length;i++)
        {
          let par=paralellograms[i];
          let p=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
          let d=dist(p.x,p.y,par.startP.x,par.startP.y);
          
          if(d<=5){
            par.drawStart=true;
          }
        }
        
      }
      else if(numClick % 2==1){//before second click
        if(curResultVector!=null){// if user click resultant but no click the button for  parallelogram 
          let p=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
          console.log('mouseMoved-before second click'+p.x+','+p.y);
          let xOsa=new p5.Vector(1,0);
          let v=p5.Vector.sub(p,curResultVector.position);
          let L=dist(p.x,p.y,curResultVector.position.x,curResultVector.position.y);
          let fi=v.angleBetween(xOsa);
          curResultVector.L=L;
          curResultVector.fi=2*PI-fi;
          curResultVector.update();
        }
      }
  }
  
}

function mouseDragged(){
 console.log("mouseDragged.");
  if (!isMobile && mod==2 && mouseButton === LEFT) {
    
    if( mouseIsPressed && isMouseDragged  ){
      
      let d=dist(mouseX-widthS/2,mouseY-heightS/2,pPosition.x,pPosition.y);
      let position=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
      let dVect=p5.Vector.sub(position,pPosition);
      dVect.normalize();
      dVect.mult(d);
      console.log("mouseDragged: ("+(mouseX-widthS/2)+","+(mouseY-heightS/2)+")");
      console.log("d="+d);
      
      for(let i=0;i<vectorsPractice.length;i++)
      {
        let vect=vectorsPractice[i];
        if(vect.selected){
          curSelectedVectors[curSelectedVectors.length]=vect;
         // let ve=new Vektor(vect.x,vect.y,vect.L,vect.fi);
          let cl=checkClosest(vect);//return closest point or null if have any
          let pP=vect.position;
          if(cl!==null){
             dVect=p5.Vector.sub(cl,pP);
          }
          vect.move(dVect);
          
        }
      }
      pPosition=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
    }
    else{
      isMouseDragged=true;
      pritisnuta=true;
      pPosition=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
      console.log("Pocetak mouseDragged: ("+(mouseX-widthS/2)+","+(mouseY-heightS/2)+")");
    }
  
  }
  if(!isMobile && mod==2 && operation==4){//drawing result vector
     if(!drawResult && numClick % 2==0){//before first click
       
        drawResult=true;
        for(let i=0;i<paralellograms.length;i++)
        {
          let par=paralellograms[i];
          let p=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
          let d=dist(p.x,p.y,par.startP.x,par.startP.y);
          
          if(d<=5){
            par.drawStart=true;
          }
        }
        
      }
      else if(!isMobile && numClick % 2==1){//before second click
        
        let p=new p5.Vector(mouseX,mouseY);
        let xOsa=new p5.Vector(1,0);
        let v=p5.Vector.sub(p,curResultVector.startP);
        let L=dist(p,curResultVector.position);
        let fi=v.angleBetween(xOsa);
        curResultVector.L=L;
        curResultVector.fi=fi;
        curResultVector.update();
        vectorsPratice[vectorsPratice.length]=curResultVector;
      }
  }
  
}
function touchEnded(){
  console.log('touchEnded');
  if(isMobile ){
    pritisnuta=false;
     pPosition=null;
    isMouseDragged=false;
   
  }
}

function touchStarted(){
  console.log("touchStarted");
 
  
  if(isMobile && (mod==2 || mod===5)){
    
    console.log(nfs(mouseX,3,1)+","+nfs(mouseY,3,1));
    let anySelected=false;
    for(let i=0;i<vectorsPractice.length;i++){
      
      let vect=vectorsPractice[i];
      console.log("Ispitujemo da li je selektovan "+vect.a+" "+vect.selected);
      console.log("u modu i operaciji "+mod+","+operation);
      if(vect.selectedArea.contains(mouseX,mouseY)){
        console.log("Kliknuta oblast pored"+vect.selected);
        if(!vect.selected){
          vect.selected=true;
          vect.selectedArea.selected=true;
          anySelected=true;
        console.log("selektovan "+vect.L);
        }
        else{
          console.log("deselektovan "+vect.L);
          vect.selected=false;
          vect.selectedArea.selected=false;
        }
 
        
        
      }
      else if(vect.isChangingAngle){//block deselection of the current selected vector during changing its angle
        vect.isChangingAngle=false;//not deselect vector if slider for changing angle triggered
        anySelected=true;
        
      }
      else if(vect.isChangingLength){//block deselection of the current selected vector during changing its angle
        vect.isChangingLength=false;//not deselect vector if slider for changing angle triggered
        anySelected=true;
        
      }
      else if(mod===2 && operation===3){
        anySelected=true;
        formCurrentSelectedVectors();
        console.log("selctovan za metodu paralelograma, curSelectedVectors.length="+curSelectedVectors.length+", vp.length="+vectorsPractice.length);
        
      }
      else if(touches.length>2){
         vect.selected=false;
          vect.selectedArea.selected=false;   
          mod=2;
          console.log("deselektovan, vraca se mod=2 ");
      }
      else{
        console.log("Nije kliknuta oblast pored"+vect.selected);
        console.log('deselect '+touches.length);
      }
      
        
      
    }
    if(!anySelected){
      console.log("Nije selektovan ni jedan, uklanja se selekcija");
       removeSelectedVectors();
    }
    else{
      pritisnuta=true;
      console.log("Ima selektovanih operation="+operation);
      if(operation !=3){
        console.log('mod=5');
          mod=5;//???
      }
    }
  }
  /*End checking selection*/
  
  console.log("mod,operation"+mod+","+operation);
  /*Drawing resultant vector*/
  if(isMobile && mod==2 && operation===4){//drawing result vector
          console.log("touchStart->Drawing resultant vector");
          /*change mouseMove*/
         if(!drawResult && numClick % 3==0){//before first click
              numClick++;
              drawResult=true;
              console.log('before first click, drawResult '+drawResult+',numClick='+numClick+',paralellograms.length='+paralellograms.length);
        
            
          }
          else if(numClick % 3==2){//before second click
              numClick++;
              console.log("before second click. mx="+(mouseX-(widthS/2))+","+(mouseY-(heightS/2)));
               console.log("before second click, curResultVector.position: "+curResultVector.position.x+","+ curResultVector.position.y);
         
          }     
          
           else if(drawResult && numClick % 3==1){//first click
                  console.log('first click, numClick '+ numClick);
                  numClick++;
                  
                  /*In method for determine resultant width paralellogram*/
                  if(paralellograms.length>0){
                      console.log('Pocetak crtanja rezultante method parallelogram 1 tacka : mx,my='+(mouseX-(widthS/2))+','+(mouseY-(heightS/2)));               
                     
                      for(let i=0;i<paralellograms.length;i++)
                      {
                        let par=paralellograms[i];
                        let p=new p5.Vector(mouseX-(widthS/2),mouseY-(heightS/2));
                        console.log('Pocetak crtanja rezultante metoda paralelograma1 tacka : mx,my='+(mouseX-(widthS/2))+','+(mouseY-(heightS/2)));
                        console.log('mouse click'+p.x+','+p.y);
                        let d=dist(p.x,p.y,par.startP.x,par.startP.y);
                        console.log('start par:'+par.startP.x+','+par.startP.y);
                        curResultVector=new Vektor(p.x,-p.y,0,0);//- jer se y osa razlikuje u dekartovom koo sistemu od ekranovog
                        curResultVector.isResultant=true;
                        if(d<=5){
                          par.drawStart=true;
                          curResultVector.position=par.startP.copy();
                        }
                       
                      }
                  }
                  else{//the method polygon force
                      console.log('Pocetak crtanja rezultante 1 tacka : mx,my='+(mouseX-(widthS/2))+','+(mouseY-(heightS/2)));
                      let p=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
                      curResultVector=new Vektor(p.x,-p.y,0,0);
                      curResultVector.isResultant=true;
                
                      let vect=curResultVector;
                      let cl=checkClosest(vect);//return closest point or null if have any
                     
                      if(cl!==null){
                         console.log('Closest point> '+cl.x+','+cl.y);
                         dVect=p5.Vector.sub(cl,p);
                          curResultVector.position=p5.Vector.add(p.copy(),dVect);
                      }
                      else{
                         curResultVector.position=p.copy();
                      }  
                      console.log('Pocetak crtanja rezultante 1 tacka :curResultVector.position: '+curResultVector.position.x + ',' + curResultVector.position.y);
                       
                 
                  }//end clausule else when the method polygon force is used
              
            }
            else if(isMobile && numClick % 3==0){// end second click
                console.log("after second click. mx="+(mouseX-(widthS/2))+","+(mouseY-(heightS/2)));
                console.log("after second click, curResultVector.position: "+curResultVector.position.x+","+ curResultVector.position.y);
                let p=new p5.Vector(mouseX-(widthS/2),mouseY-(heightS/2));
                let xOsa=new p5.Vector(1,0);
                let v=p5.Vector.sub(p,curResultVector.position);
                console.log("v:" +v.x+","+v.y);
                let L=dist(p.x,p.y,curResultVector.position.x,curResultVector.position.y);
                let fi=2*PI-v.angleBetween(xOsa);
                console.log('fi='+degrees(fi)+'deg');
                curResultVector.L=L;
                curResultVector.fi=fi;
                curResultVector.update();
                console.log('end second click numClick='+numClick+' and curResultVector:(x,y,L,fi):'+curResultVector.position.x+','+curResultVector.position.y+','+curResultVector.L+','+curResultVector.fi);
                if(curResultVector!==null){
                  vectorsPractice[vectorsPractice.length]=curResultVector;
                }
                drawResult=false;
                operation=0;
                numClick=0;
            }
      
     
  }
  
  
}

function touchMoved(evt){ 
      console.log("touchMoved.");     
    
  if (isMobile && (mod==2 || mod==5) && mouseButton === LEFT) {
    
    if( mouseIsPressed && isMouseDragged  ){
      if(event.cancelable && curSelectedVectors.length > 0){//when the vector is dragging
        evt.preventDefault();
      } 
      
      let d=dist(mouseX-widthS/2,mouseY-heightS/2,pPosition.x,pPosition.y);
      let position=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
      let dVect=p5.Vector.sub(position,pPosition);
      dVect.normalize();
      dVect.mult(d);
      console.log("touchMoved: ("+(mouseX-widthS/2)+","+(mouseY-heightS/2)+")");
      console.log("d="+d);
      
      for(let i=0;i<vectorsPractice.length;i++)
      {
        let vect=vectorsPractice[i];
        if(vect.selected){
          //evt.preventDefault();
          console.log("Dodaje u tekuce selektovane  vector" +vect.a+", kojih ima vec "+curSelectedVectors.length);
          curSelectedVectors[curSelectedVectors.length]=vect;
         // let ve=new Vektor(vect.x,vect.y,vect.L,vect.fi);
          let cl=checkClosest(vect);//return closest point or null if have any
          let pP=vect.position;
          if(cl!==null){
             dVect=p5.Vector.sub(cl,pP);
             mod=2;
          }
          vect.move(dVect);
          
        }
      }
      pPosition=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
    }
    else{
      isMouseDragged=true;
      pritisnuta=true;
      pPosition=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
      console.log("Pocetak touch move: ("+(mouseX-widthS/2)+","+(mouseY-heightS/2)+")");
    }
  
  }
  if(isMobile && mod==2 && operation==4){//drawing result vector
     if(!drawResult && numClick % 2==0){//before first click
       
        drawResult=true;
        for(let i=0;i<paralellograms.length;i++)
        {
          let par=paralellograms[i];
          let p=new p5.Vector(mouseX-widthS/2,mouseY-heightS/2);
          let d=dist(p.x,p.y,par.startP.x,par.startP.y);
          
          if(d<=5){
            par.drawStart=true;
          }
        }
        
      }
      else if(numClick % 2==1){//before second click
        console.log("before second click.");
        let p=new p5.Vector(mouseX,mouseY);
        let xOsa=new p5.Vector(1,0);
        let v=p5.Vector.sub(p,curResultVector.startP);
        let L=dist(p,curResultVector.position);
        let fi=v.angleBetween(xOsa);
        curResultVector.L=L;
        curResultVector.fi=fi;
        curResultVector.update();
        vectorsPratice[vectorsPratice.length]=curResultVector;
      }
  } 


}




class Paralelogram{
   constructor(a,b){
      this.a=a;//the first vector is both edge of paralellogram and vector for offset copy 
      this.b=b;//the second vector is both edge of paralellogram and vector for offset copy 
      this.startP=a.position;
      this.p2=p5.Vector.add(this.startP,this.a.vector);
      this.p3=p5.Vector.add(this.startP,this.b.vector);
      this.p4=p5.Vector.add(this.p2,this.b.vector);
      this.drawStart=false;
   }
   display(){
     push();
     strokeWeight(1);
     stroke(color(255,100,100));  
   //  console.log('this.startP.x,this.startP.y'+this.startP.x+','+this.startP.y);
   //  console.log('this.p2.x,this.p2.y'+this.p2.x+','+this.p2.x);
     drawingContext.setLineDash([3, 3]);
     line(this.startP.x,this.startP.y,this.p2.x,this.p2.y);
     line(this.startP.x,this.startP.y,this.p3.x,this.p3.y);
     line(this.p2.x,this.p2.y,this.p4.x,this.p4.y);
     line(this.p3.x,this.p3.y,this.p4.x,this.p4.y);
     pop();
   }
   displayStart(){
     push();
     strokeWeight(2);
     stroke(color(255,255,100));  
     circle(this.startP.x,this.startP.y,7);
     pop();
   }
  
}

class SelectedArea{
   constructor(x,y,c,cs){
     this.position=new p5.Vector(x,y);
     this.r=DIAMETER_SELECTED_VECTORS/2;
     this.selected=false;
     this.colorS=c;
     this.colorS1=cs;
   }
   display() {
     if(this.selected){
        stroke(this.colorS1);  
        fill(this.colorS1);
     }
     else{
       stroke(this.colorS);  
        fill(this.colorS);
     }
    ellipseMode(CENTER);
    let d=2*this.r;
    if(this.selected){
      d=d+10;
    }
    circle(this.position.x,this.position.y,d);  
    
  }
  
  contains(xP,yP){
    let res=false;
    let d=dist(xP,yP,widthS/2+this.position.x,heightS/2+this.position.y);
 //   console.log("XP,YP="+xP+","+yP);
//    console.log("widthS/2+this.position.x,heightS/2+this.position.y"+(widthS/2+this.position.x)+","+(heightS/2+this.position.y));
    console.log("d="+d);
    if(d<this.r){
      res=true;
    }
    return res;
  }
}
class Vektor
{  
    
   constructor(x,y,L,fi){
      this.position=new p5.Vector(x,-y);    
      this.koef=1;
      
      this.color0=color(0,0,0);
      this.colorSel=color(255,0,255)
      this.fi=fi;
      this.L=L;
      this.a=L*cos(fi);
      this.b=L*sin(fi);
      this.vector=new p5.Vector(this.a,this.b);
      this.v=new p5.Vector(0,0);
      this.Pposition=new p5.Vector(this.position.x,this.position.y);//previous position
      this.operation=0;//first vector haven't any operation
      this.selected=false;
      this.selectedArea=new SelectedArea(-widthS/2+START_X_FOR_SELECTION,-heightS/2+START_H_FOR_SELECTION+(vectors.length)*30,this.color0,this.colorSel);
      
      this.closeNumPoint=0;
      this.isResultant=false;
      this.isEndResultant=false;
      this.isEndTrueResultant=false;
      this.isChangingAngle=false;
      this.isChangingLength=false;
      
   }
   update(){
     this.a=this.L*cos(this.fi);
      this.b=this.L*sin(this.fi);
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
       this.update();
   }
   checkClosed(pointForCheck){
      let res=0;
      let positionK=p5.Vector.add(this.position,this.vector);
      let d=p5.Vector.sub(pointForCheck,this.position).mag();
      let d1=p5.Vector.sub(pointForCheck,positionK).mag();
      if(d<4){
        res=1;
      }
      else if(d1<4){
        res=2;
      }
      return res;
   }
   displayClosed(numPoint){
       stroke(color(200,0,0));
       strokeWeight(3);
       if(numPoint===1){
         circle(this.position.x,this.position.y,5);
       }
       else if(numPoint===2){
          push();
          translate(this.a,this.b);
          circle(this.position.x,this.position.y,5);
          pop();
       }
   }
   
   display() {
     push();
     if(this.selected){
        stroke(this.colorSel);  
        fill(this.colorSel);
        strokeWeight(3);
     }
     
     else{
       strokeWeight(1);
       stroke(this.color0);  
        fill(this.color0);
     }
     if(this.isEndTrueResultant){
       push();
       strokeWeight(4);
       stroke(color(200,5,255));
       
      
     }
     else if(this.isEndResultant){
       
       strokeWeight(3);
       stroke(color(255,0,0));  
       
     }
     
     else if(this.isResultant){
       push();
       strokeWeight(2);
       stroke(color(200,5,5));
       drawingContext.setLineDash([5, 5]);
      
     }
    
    line(this.position.x, this.position.y, this.position.x+this.vector.x,this.position.y+this.vector.y);
    circle(this.position.x,this.position.y,rPocetka);
     pop();
    push();
    translate(this.position.x+this.vector.x,this.position.y+this.vector.y);
    rotate(this.fi);
    triangle(0,0,-10,-2,-10,2);
    pop();
  }
  
  
  
}
