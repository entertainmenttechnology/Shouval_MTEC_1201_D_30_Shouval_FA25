

class Flower{

  constructor(){
   this.xLoc = mouseX;
   this.yLoc = mouseY;
   this.numPetals = floor(random(3,15));
   this.centerDiameter = random(20,70);
   this.pL = random(50,100);
   this.pW = random(10,40);
  }

  drawFlower(){
  push()
  translate(this.xLoc,this.yLoc)

  for(let i = 0; i< this.numPetals; i++){
    ellipse(this.pL/2,0,this.pL,this.pW)
    rotate(360/this.numPetals)
  }
  ellipse(0,0, this.centerDiameter);
  pop()
  }
}

let f 

function setup(){

  createCanvas(windowWidth, windowHeight);
  background(255)
  angleMode(DEGREES);

}

function draw(){
 
  background(255)
  if(f){
      f.drawFlower();
  }
 
}



function mousePressed(){
 
  f = new Flower()
  
}