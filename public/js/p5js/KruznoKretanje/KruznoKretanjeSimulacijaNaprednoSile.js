let angle = 0;
let radius = 200;
let canvas;
let container;
let path = [];

function setup() {
  canvas = createCanvas(700, 700, P2D);
  container = document.getElementById('kruzni-canvas');
  angleMode(RADIANS);
  ellipseMode(CENTER);
  canvas.parent(container);
}

function draw() {
  background(245);

  const centerX = width / 2;
  const centerY = height / 2;

  // Prikaz konstanti
  noStroke();
  fill(0);
  textSize(24);
  text('v = const', 20, 30);
  text('ω = const', 20, 60);

  // Obeležavanje centra rotacije
  fill(0);
  noStroke();
  ellipse(centerX, centerY, 12, 12);

  // Izračun pozicije objekta
  const x = centerX + radius * cos(angle);
  const y = centerY + radius * sin(angle);

  // Čuvanje i crtanje putanje
  path.push({ x, y });
  if (path.length > 600) path.shift();
  stroke(150, 150, 255);
  noFill();
  beginShape();
    for (let p of path) vertex(p.x, p.y);
  endShape();

  // Crtanje kružnice i objekta
 // fill(100, 150, 255);
 noFill();
  stroke(0);
  ellipse(centerX, centerY, radius * 2, radius * 2);
  fill(255, 0, 0);
  stroke(0);
  ellipse(x, y, 20, 20);

  // Vektori (4× duži, tanji)
  let vMag = 50 * 4;
  let vx   = -vMag * sin(angle);
  let vy   =  vMag * cos(angle);
  stroke(0, 200, 0);
  drawArrow(x, y, vx, vy, 'v');

  let aMag = 40 * 4;
  let ax = centerX - x, ay = centerY - y;
  let aLen = sqrt(ax*ax + ay*ay);
  ax = (ax / aLen) * aMag;
  ay = (ay / aLen) * aMag;
  stroke(255, 100, 0);
  drawArrow(x, y, ax, ay, 'ac');

  stroke(0, 0, 255);
  drawArrow(x, y, ax * 0.8, ay * 0.8, 'Fc');

  // Legenda
  drawLegend();
  
  angle += 0.03;
}

function drawArrow(x, y, dx, dy, label) {
  push();
    translate(x, y);

    // linija malo tanja
    strokeWeight(3);
    line(0, 0, dx, dy);

    // strelica na kraju
    const mag = sqrt(dx*dx + dy*dy);
    const ang = atan2(dy, dx);
    rotate(ang);

    const arrowSize = 12;
    const col = drawingContext.strokeStyle;
    noStroke();
    fill(col);
    triangle(
      mag, 0,
      mag - arrowSize,  arrowSize / 2,
      mag - arrowSize, -arrowSize / 2
    );
  pop();

  // Oznaka vektora sa većim fontom
  fill(0);
  noStroke();
  textSize(32);
  text(label, x + dx + 10, y + dy + 5);
}

function drawLegend() {
  push();
    const startX = width - 300;
    const startY = height - 140;
    textSize(20);
    noStroke();
    fill(0);
    text('Legenda:', startX, startY);

    // v – linijska brzina
    stroke(0,200,0); strokeWeight(3);
    line(startX, startY + 20, startX + 40, startY + 20);
    noStroke(); fill(0,200,0);
    text('v – linijska brzina', startX + 50, startY + 25);

    // an – normalno ubrzanje
    stroke(255,100,0);
    line(startX, startY + 60, startX + 40, startY + 60);
    noStroke(); fill(255,100,0);
    text('an – normalno ubrzanje', startX + 50, startY + 65);

    // Fc – centripetalna sila
    stroke(0,0,255);
    line(startX, startY + 100, startX + 40, startY + 100);
    noStroke(); fill(0,0,255);
    text('Fn (Fc) – centripetalna sila', startX + 50, startY + 105);
  pop();
}
