function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  // Car Body
  fill(0, 70, 13);  // Green color
  rect(200, 200, 350, 100);
  
  // Car Roof
  fill(0, 70, 13);  // Green color
  rect(250, 150, 250, 50);
  
  // Windows
  fill(180);  // Light gray for windows
  rect(270, 160, 80, 30);
  rect(400, 160, 80, 30);
  
  // Wheels
  fill(0);  // Black for wheels
  ellipse(250, 300, 80, 80);
  ellipse(500, 300, 80, 80);
  
  // Wheel Centers
  fill(150);  // Gray for wheel centers
  ellipse(250, 300, 40, 40);
  ellipse(500, 300, 40, 40);
  
  // Headlights
  fill(255, 255, 0);  // Yellow for headlights
  ellipse(205, 240, 20, 20);
  ellipse(545, 240, 20, 20);
}
