
let frames = 0;

function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
  //slider = createSlider(200,400,47);
}

function draw() {
  frames++
    background(50);
noCursor();
    drawMoon(35, 50, frames%30, 100);
     drawMoon(35, 50, frames%15, 200);
   
}


function drawMoon(x, y, phase, location){

      directionalLight(244,50,0,0, 0, -1);

  stroke(5);
  fill(244);
  sphere();

  
}



