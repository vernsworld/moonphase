let detailY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //slider vibes
  detailY = createSlider(0, 16, 30);
  detailY.position(10, height + 5);
  detailY.style('width', 'windowWidth');

}

function draw() {
  noCursor();
  //return of the psycho background vibes from my first sketch
  push();
  translate(width/2, height/2);
  beginShape();
  fill(231, 231, 239, 20);
  stroke(30, 255, 30, 100);
  strokeWeight(.75);
  for(var i = 0; i < 10; i++) {
    var x = random(-1000, 1000);
    var y = random(-900, 900);
    vertex(x, y);
  }
  endShape();
  pop();
  
  //draw the "earth" aka that psycho torus triangle vibe
  rotateY(millis() / 5000);
  drawEarth();  

  //draw moon one -- translating over to another location for extra fun
  push();
  rotateX(millis() / 6000);
  translate(width/2, height/3);
  drawMoon(100, 400, detailY.value());
  pop();

  //draw moon two -- translating over to another location for extra fun
  push();
  rotateX(millis() / 3000);
  translate(width/4, height/2);
  drawMoon(90, 60, detailY.value());
  pop();
}

function drawMoon(x, y, phase){
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(155, 155, 242, -dirX, -dirY, -1);
  directionalLight(0, 0, 255, dirX, dirY, -0);
  directionalLight(255, 255, 255, 10, 10, -1);
  stroke(30, 255, 30, .6);
  strokeWeight(.25);
  fill(227, 227, 251);
  ambientMaterial(250);
  cone(x, y, phase, 16);

}

function drawEarth(){
  ambientLight(30, 30, 255, .05);
  pointLight(155, 155, 242, mouseY*-1, mouseX*-1, 100);
  stroke(30, 255, 30, .6);
  strokeWeight(.75);
  fill(200, 60);
  rotateY(millis() / 1000);
  ambientMaterial(1000);
  torus(mouseX*-1, mouseY/-5, 3, 12);
}