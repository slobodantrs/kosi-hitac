

// Klizanje tela niz strmu ravan — p5.js skeč
/*
Kreirajmo sledeće promenljive kao globalne:ugao nagiba (pozitivno: ravan pada ulevo→desno),pozicija centra bloka na nagibu,velicina bloka,gravitaciono ubrzanje, koeficijent trenja
U setup metodu prvo kreiramo platno za crtanje canvas i ugradimo koristeći parent metodu u div kontejner koji smo definisali u index.html pod id="sketch-folder".
Startna pozicija bloka u odnosu na liniju strme ravni udaljena od koo početka je 150. Koordinatni sistem ćemo posmatrati tako da je x osa paralelna sa linijom strme ravni.
U draw metodi posle podešavanja pozadine kod zadužen za crtanje i tela i vektora sila smo odvojili u dve posebne metode: drawIncline() i  drawBlockAndForces();
Ovde treba napomenuti da se koriste metode translate za translaciju koordinatnog sistema, rotate() za rotaciju koordinatnog sistema i push(), pop() da bi se izmene koje se dešavaju između
njih vratile na početno stanje posle poziva pop(). Pročitati više o tome....
Da bi se dobila animacija ....
U updateMotion()....
*/
// Klizanje tela niz strmu ravan — p5.js skeč

// --- Parametri simulacije ---
let alpha;           // ugao nagiba (pozitivno: ravan pada ulevo→desno)
const blockSize = 50;
const g = 9.81;      // gravitaciono ubrzanje
const mu = 0.2;      // koeficijent trenja

// Dinamika kretanja
let a;               // akceleracija duž ravni
let v = 0;           // trenutna brzina
let s = 0;           // pređeni put duž ravni (px)
const dt = 1/60;     // vremenski korak (pretpostavka 60 FPS)

// Pozicija i granice
const startX = 150;  
let inclineY;        // y-pozicija same ravni
let maxS;            // maksimalni pomak duž ravni

// Stanje animacije
let state = 'running';       // 'running' ili 'pause'
let pauseStart = 0;
const pauseDuration = 1000;  // pauza na kraju (ms)

function setup() {
  const canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');

  alpha = PI/6;                  // 30°
  inclineY = height/3;           // ravan startuje na 1/3 visine
  maxS = width - startX;         // dok ne stigne do desne ivice

  // akceleracija duž nagiba: g·sinα − μ·g·cosα
  a = g * sin(alpha) - mu * g * cos(alpha);

  angleMode(RADIANS);
  rectMode(CENTER);
  textAlign(LEFT, CENTER);
}

function draw() {
  background(240);
  drawIncline();
  updateMotion();
  drawBlockAndForces();
}

function updateMotion() {
  if (state === 'running') {
    // Eulerova integracija
    v += a * dt;
    s += v * dt;

    // kada blok dostigne kraj
    if (s >= maxS) {
      s = maxS;
      state = 'pause';
      pauseStart = millis();
    }
  }
  else if (state === 'pause') {
    if (millis() - pauseStart >= pauseDuration) {
      // resetujemo
      s = 0;
      v = 0;
      state = 'running';
    }
  }
}

// Crtanje ravni
function drawIncline() {
  push();
    translate(0, inclineY);
    rotate(alpha);
    noStroke();
    fill(220, 230, 255);
    triangle(0, 0, width*1.5, 0, 0, height);
    stroke(0);
    strokeWeight(2);
    line(0, 0, width*1.5, 0);
  pop();
}

// Crtanje bloka i sila
function drawBlockAndForces() {
  // komponente sile težine
  const Qx = g * sin(alpha),
        Qy = g * cos(alpha),
        N  = Qy,
        Ftr= mu * N,
        scaleF = 20;

  // izračun pozicije bloka u globalnim koordinatama
  let bx = startX + s,
      by = inclineY + bx * tan(alpha);

  push();
    translate(bx, by);
    rotate(alpha);
    translate(0, -blockSize/2);

    // blok
    fill(200);
    stroke(0);
    rect(0, 0, blockSize, blockSize);

    // Qx
    drawArrow(createVector(0,0),
              createVector(Qx*scaleF,0),
              'red');
    text('Qₓ', Qx*scaleF+5, -5);

    // Qy
    drawArrow(createVector(0,0),
              createVector(0,Qy*scaleF),
              'red');
    text('Qᵧ', 5, Qy*scaleF+15);

    // Q (rezultanta)
    drawArrow(createVector(0,0),
              createVector(Qx*scaleF, Qy*scaleF),
              'purple');
    text('Q', Qx*scaleF/2+5, Qy*scaleF/2+5);

    // N
    drawArrow(createVector(0,0),
              createVector(0, -N*scaleF),
              'green');
    text('N', 5, -N*scaleF-10);

    // trenje
    drawArrow(createVector(0,0),
              createVector(-Ftr*scaleF, 0),
              'orange');
    text('Fₜᵣ', -Ftr*scaleF-30, -5);
  pop();
}

// Pomoćna za strelice
function drawArrow(base, vec, col) {
  push();
    stroke(col);
    strokeWeight(3);
    fill(col);
    translate(base.x, base.y);
    line(0,0, vec.x, vec.y);
    const arrowSize = 7;
    push();
      translate(vec.x, vec.y);
      rotate(vec.heading());
      triangle(0,0, -arrowSize, arrowSize/2, -arrowSize, -arrowSize/2);
    pop();
  pop();
}
