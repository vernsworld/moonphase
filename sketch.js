function setup() {
  // put setup code here
  createCanvas(1400, 900);
}

function draw() {
  // put drawing code here
  background(0)
  

  fill(255, 70)
  for (let j=0; j<1000; j++){
  rect(j, j, j*3, j*7, j*10, j*2)

  }

}