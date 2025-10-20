let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(0, 10);
  stroke(200, 100, 255);
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.01) {
    let r = 200 * noise(t + cos(i), sin(i));
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  t += 0.01;
}
