function setup() {
  // put setup code here
  //frameRate(25);
 createCanvas(displayWidth, displayHeight);

  background(255, 200, 200);
  var c = color(255, 255, 0);
  fill(c);
  noStroke();
}

    function draw() {
      // put drawing code here
      frames++
    background(100);
    drawMoon(frames%20, );
    
}

function drawMoon(moonphase, moonsize){
fill(244, 244,0);
ellipse(width/2, height/2, moonsize, moonsize)
fill(0);
let ellipseXPosition = map(moonphase, 0, 30, 566, 796); 
ellipse(mouseX, height/2, moonsize, moonsize)
print(mouseX);
//796 - 566 range of X for second ellipse 
}