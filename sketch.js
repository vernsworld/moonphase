let detailY;
let fr = 15; //starting FPS

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(fr); // Attempt to refresh at starting FPS

  //slider vibes
  detailY = createSlider(0, 15, 30, 1);
  detailY.position(10, height + 5);
  detailY.style('width', 'windowWidth');

}

function draw() {
  noCursor();
  //background(255, 20);
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
  rotateX(millis() / 300);
  rotateY(millis() / 2000);
  translate(width/2, height/3);
  drawMoon(100, 400, detailY.value());
  pop();

  //draw moon two -- translating over to another location for extra fun
  push();
  rotateX(millis() / 3000);
  rotateZ(millis() / 6000);
  translate(width, height/2);
  drawMoon(100, 200, detailY.value());
  pop();
}

function drawMoon(x, y, phase){

  //phase will be the slider, scroll bar goes from 1 to 

  let dirX = (mouseX / width - 0.5) * .5;
  let dirY = (mouseY / height - 0.5) * .5;
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
  ambientLight(30, 30, 255, .02);
  pointLight(255, 155, 242, mouseY*-1, mouseX*-1, 100);
  stroke(30, 255, 30, .6);
  strokeWeight(.75);
  fill(255, 60);
  rotateY(millis() / 600);
  rotateX(millis() / 6000);
  rotateZ(millis() / 500);
  ambientMaterial(1000);
  torus((mouseX)/5, (mouseY)/7, 7, 10);
}