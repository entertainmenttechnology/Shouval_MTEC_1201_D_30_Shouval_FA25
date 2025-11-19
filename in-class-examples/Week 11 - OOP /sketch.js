
function setup(){

  createCanvas(windowWidth, windowHeight);
  background(255)
  angleMode(DEGREES);

}

function draw(){


}

let numPetals = 12;
let centerDiameter = 40;
let pL = 100;
let pW = 20;

function mousePressed(){
  push()
  translate(mouseX,mouseY)

  for(let i = 0; i< numPetals; i++){
    ellipse(pL/2,0,pL,pW)
    rotate(360/numPetals)
  }
  ellipse(0,0, centerDiameter);
  pop()

}