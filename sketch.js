function setup() {
  // put setup code here
  createCanvas(1400, 900);
  background(0)
(push)
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
pop()
// stroke(0, 50)
//   fill(255, 70)
//   for (let j=0; j<1000; j++){
//   rect(j, j, j, j, j*10, j*2)

}


}

function draw() {
  // put drawing code here
 // background(0)

 stroke(0, 50)
  fill(255, 70)
  for (let j=0; j<1000; j++){
  rect(j, j, j, j, j*10, j*2)


  }







