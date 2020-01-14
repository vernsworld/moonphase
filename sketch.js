function setup() {
  // put setup code here
  createCanvas(1640, 1480);
}

function draw() {
  // put drawing code here
  background(0)
  push()
  fill(255 ,80)
  for (let i=0; i<1000; i++){
  triangle(i,i,i*2,i*3, i*mouseX, i*mouseY)
}
pop()
push()
  fill(255, 70)
  for (let j=0; j<500; j++){
  rect(j, j, j*3, j*7, j*mouseX, j*mouseY)

  }
  pop()
}