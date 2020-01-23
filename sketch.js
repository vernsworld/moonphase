function setup() {
  // put setup code here
  //frameRate(25);
  createCanvas(displayWidth, displayHeight);

  background(0);
//background will be different if you refresh page
push();
translate(width/2, height/2);
beginShape();
fill(0, 60);
stroke(255, 70);
for(var i = 0; i < 1000; i++) {
  var x = random(-1000, 1000);
  var y = random(-900, 900);
  vertex(x, y);
}
endShape();
pop();
}



function draw() {
  // put drawing code here
 // background(0)
//chartreuse triangles
  fill(223,255,0, 50);
  stroke(255,50)
  quad(mouseX, mouseY, 86, 10, 69, 63, 15, 76);
    quad(mouseX+41, mouseY+50, 86, 20, 69, 63, 30, 76);
          quad(mouseX-41, mouseY-50, 86, 20, 69, 63, 30, 76);

//psycho rectangle cone
stroke(0, 50);
  fill(255);
  for (let j=0; j<1000; j++){
    rect(j, j, j, j, j*10, j*2);
  }


}


