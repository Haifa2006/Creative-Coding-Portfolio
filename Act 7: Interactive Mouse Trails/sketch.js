let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  noStroke();
}

function draw() {
  fill(10, 10, 10, 20); 
  rect(0, 0, width, height);

  // Generating the new particles along with the mouse movement
  for (let i = 0; i < 3; i++) {
    let p = new Particle(mouseX, mouseY);
    particles.push(p);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.acc = createVector(0, 0);
    this.lifetime = 255;
    this.size = random(5, 25);
    this.color = color(random(100, 255), random(100, 255), random(255));
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifetime -= 1; 
  }

  finished() {
    return this.lifetime < 0;
  }

  show() {
    this.color.setAlpha(this.lifetime);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
