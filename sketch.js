
let frames = 0;

function setup() {
 createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  frames++
  background(0);
  
  drawMoon(frames%30, 200);


}


function drawMoon(moonphase, moonsize){
  //maybe uses ellipse, or sphere, or some other functions to draw a moon
  //that looks different depeneding on what number is passed to moonphase
  fill(255,255,0);
  ellipse(width/2, height/2, moonsize, moonsize);
  fill(0);
  let ellipseXPosition = map(moonphase, 0, 30, 566, 796);
  ellipse(ellipseXPosition, height/2, moonsize, moonsize);
  //print(mouseX);
}
