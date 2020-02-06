let detailY;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  detailY = createSlider(1, 30, 30);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(0);
  rotateY(millis() / 500);
  drawMoon(40, 100, 20, 69);
  
  push();
  rotateX(millis() / 2000);
  translate(width/2, height/3);
  drawMoon();
  pop();
}

function drawMoon(x, y, z, w){
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(113, 42, 235, -dirX, -dirY, -1);
  directionalLight(228, 235, 42, dirX, dirY, -0);
  directionalLight(255, 255, 255, 10, 10, -1);
  fill(188, 222, 53)
  cone(300, 650, detailY.value(), 16);

}