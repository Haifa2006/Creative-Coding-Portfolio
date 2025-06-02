function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(20, 30, 40); // Space-like background
  translate(width / 2, height / 2);

  drawBody();
  drawEyes();
  drawAntennae();
  drawMouth();
}

function drawBody() {
  push();
  scale(1.2);
  fill(0, 150, 100);
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let angle = 0; angle < 360; angle += 10) {
    let r = 100 + 10 * sin(3 * angle);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function drawEyes() {
  push();
  noStroke();
  fill(255);
  ellipse(-30, -30, 40, 60); // Left eye
  ellipse(30, -30, 40, 60);  // Right eye

  fill(0);
  ellipse(-30, -30, 20); // Pupils
  ellipse(30, -30, 20);
  pop();
}

function drawAntennae() {
  push();
  stroke(150, 255, 200);
  strokeWeight(4);
  line(-40, -90, -60, -130);
  line(40, -90, 60, -130);

  fill(255, 100, 200);
  ellipse(-60, -130, 15);
  ellipse(60, -130, 15);
  pop();
}

function drawMouth() {
  push();
  noFill();
  stroke(0); 
  strokeWeight(3);
  translate(0, 40);
  beginShape();
  vertex(-20, 0);
  bezierVertex(-10, 20, 10, 20, 20, 0);
  endShape();
  pop();
}
