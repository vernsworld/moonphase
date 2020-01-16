function setup() {
  // put setup code here
  createCanvas(1640, 1480);
}

function draw() {
  // put drawing code here
  background(0)
  

  fill(0, 255, 0, 70)
  for (let j=0; j<1500; j++){
  rect(j, j, j*3, j*7, j*100, j*10)

  }

}