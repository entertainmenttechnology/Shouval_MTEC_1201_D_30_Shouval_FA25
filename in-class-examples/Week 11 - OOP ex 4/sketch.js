
class Worm {
 constructor(){
  this.xLoc = [];
  this.yLoc = [];
  this.numSegments = floor(random(30,200));
  this.wormGirth = random(50,300)
  this.col1 = color(random(255),random(255),random(255))
  this.col2 = color(random(255),random(255),random(255))
  this.xV = random(-5,5)
  this.yV = random(-5,5)

  this.count = 0; 

  for(let i = 0 ; i<this.numSegments; i++){
    this.xLoc[i] = width/2
    this.yLoc[i] = height/2
  }
 }

 displayWorm(){
  this.xLoc[this.numSegments-1] =  map(noise(this.count), 0,1,0,width)
  this.yLoc[this.numSegments-1] =  map(noise(this.count +10), 0,1,0,height)



    for(let i = 0 ; i<this.numSegments; i++){
      
      this.xLoc[i] = this.xLoc[i+1]
      this.yLoc[i] = this.yLoc[i+1]


      let diameter = this.wormGirth*sin(map(i, 0,this.numSegments, 0,PI))

      let col = lerpColor(this.col1, this.col2, sin(map(i, 0,this.numSegments, 0,PI)))

      stroke(col);


      ellipse(this.xLoc[i], this.yLoc[i],diameter)
    }

  this.count += 0.01
 }

}

 

function setup(){
  createCanvas(windowWidth, windowHeight)


}

let count = 0

function draw(){
background(0)
fill(0)
 
for(let i = 0; i<worms.length; i++){
  worms[i].displayWorm();
}
//  xLoc[numSegments-1] = mouseX
//  yLoc[numSegments-1] = mouseY

// xLoc[numSegments-1] = random(width)
// yLoc[numSegments-1] = random(height)

 // console.log(xLoc)
}

let worms = [];

function mousePressed(){

  worms.push(new Worm());

}