
let frames = 0;

function setup() {
 createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  frames++
  background(0);
  
  drawMoon(200);
  push()
  translate(width/6, height/5);
  drawMoon(100);

}


function drawMoon(moonphase, moonsize){
  //maybe uses ellipse, or sphere, or some other functions to draw a moon
  //that looks different depeneding on what number is passed to moonphase
  fill(255,255,0);
  ellipse(width/2, height/2, moonsize, moonsize);
  
}
