

class Flower{

  constructor(){
   this.xLoc = mouseX;
   this.yLoc = mouseY;
   this.numPetals = floor(random(3,15));
   this.centerDiameter = random(20,70);
   this.pL = random(50,100);
   this.pW = random(10,40);
   this.xV = random(-5,5);
   this.yV = random(-5,5);
   this.petalCol = color(random(255), random(255) ,random(255) )
   this.centerCol = color(random(255), random(255) ,random(255) )
   this.rotations = 0
   this.rV = random(-10,10);

  }

  drawFlower(){

  fill(this.petalCol)
  push()
  translate(this.xLoc,this.yLoc)

  rotate(this.rotations);

  for(let i = 0; i< this.numPetals; i++){
    ellipse(this.pL/2,0,this.pL,this.pW)
    rotate(360/this.numPetals)
  }
  fill(this.centerCol)
  ellipse(0,0, this.centerDiameter);
  pop()

  return (this.xLoc);
  }



  moveFlower(){
  this.xLoc += this.xV;
  this.yLoc += this.yV;
  this.rotations += this.rV;

  if(this.xLoc > width + this.pL){
    this.xLoc = -this.pL;
  }
   if(this.xLoc < -this.pL){
    this.xLoc = width +this.pL;
  }
   if(this.yLoc > height + this.pL){
    this.yLoc = - this.pL;
  }
    if(this.yLoc < - this.pL){
    this.yLoc = height + this.pL;
  }


 }
}





let flowers = [];

function setup(){

  createCanvas(windowWidth, windowHeight);
  background(255)
  angleMode(DEGREES);

}

function draw(){
 
  background(255)

  for(let i = 0; i<flowers.length; i++){
    flowers[i].moveFlower();
    print(flowers[i].drawFlower());
  }
  

}



function mouseDragged(){
 
  flowers.push(new Flower())

  print(flowers)
  
}