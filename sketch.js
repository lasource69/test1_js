let color1, color2, color3;
let t = 0;
let direction = 1;

function setup() {
  createCanvas(400, 400);
  color1 = color(255, 0, 0); // Red
  color2 = color(0, 255, 0); // Green
  color3 = color(0, 0, 255); // Blue
}

function draw() {
  background(220);

  let circleX = width / 2;
  let circleY = height / 2;
  let circleDiameter = 100;

  let currentColor;

  if (t <= 0.5) {
    currentColor = lerpColor(color1, color2, t * 2);
  } else {
    currentColor = lerpColor(color2, color3, (t - 0.5) * 2);
  }

  fill(currentColor);
  noStroke();
  ellipse(circleX, circleY, circleDiameter, circleDiameter);

  t += 0.01 * direction;
  if (t >= 1 || t <= 0) {
    direction *= -1;
  }
}
