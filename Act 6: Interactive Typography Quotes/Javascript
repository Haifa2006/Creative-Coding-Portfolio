  let quote = "Creativity takes courage. ";
let font;
let layers = [];

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  textFont(font);
  textSize(24);
  angleMode(DEGREES);

  let rings = 8;
  for (let i = 1; i <= rings; i++) {
    layers.push(new OrbitLayer(quote, i * 60));
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let layer of layers) {
    layer.update();
    layer.display();
  }
}

class OrbitLayer {
  constructor(textStr, radius) {
    this.textStr = textStr;
    this.radius = radius;
    this.angleOffset = random(360);
    this.speed = map(radius, 60, 600, 0.3, 0.05);
  }

  update() {
    this.angleOffset += this.speed;
  }

  display() {
    let angle = this.angleOffset;

    for (let i = 0; i < this.textStr.length; i++) {
      let char = this.textStr.charAt(i);
      let x = cos(angle) * this.radius;
      let y = sin(angle) * this.radius;

      let hueVal = (frameCount * 2 + i * 20 + this.radius) % 360;
      fill(hueVal, 80, 100);

      push();
      translate(x, y);
      rotate(angle + frameCount * 0.1);
      text(char, 0, 0);
      pop();

      angle += 360 / this.textStr.length;
    }
  }
}
