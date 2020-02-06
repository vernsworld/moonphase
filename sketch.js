let detailY;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  detailY = createSlider(0, 30, 30);
  
  detailY.position(10, height + 5);
  detailY.style('width', '80px');

}

function draw() {
  //background(0);

  push();
  translate(width/2, height/2);
  beginShape();
  fill(0, 60);
  stroke(255, 70);
  for(var i = 0; i < 10; i++) {
    var x = random(-1000, 1000);
    var y = random(-900, 900);
    vertex(x, y);
  }
  endShape();
  pop();

  rotateY(millis() / 500);
  drawEarth();  
  push();
  rotateX(millis() / 2000);
  translate(width/2, height/3);
  drawMoon(100, 400, detailY.value());
  pop();
  push();
  rotateX(millis() / 500);
  translate(width/4, height/2);
  drawMoon(90, 60, detailY.value());
  pop();
}

function drawMoon(x, y, phase){
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(113, 42, 235, -dirX, -dirY, -1);
  directionalLight(228, 235, 42, dirX, dirY, -0);
  directionalLight(255, 255, 255, 10, 10, -1);
  fill(188, 222, 53)
  cone(x, y, phase, 16);

}

function drawEarth(){
  fill(255, 60);
  rotateY(millis() / 1000);
  torus(mouseX, mouseY/5, 3, 12);
}