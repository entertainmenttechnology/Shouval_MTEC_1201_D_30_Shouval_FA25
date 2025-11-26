
let sound;
let playbackSpeed = 1; 
let delay
function preload(){

  sound = loadSound("overdrone.mp3");

}

function setup() {
  createCanvas(400, 400);
  //sound.loop();

  delay = new p5.Delay();

}

function draw() {
  background(220);

  playbackSpeed = map(mouseX, 0,width, -3,3);

  
  if (sound.isPlaying()){
  sound.rate(playbackSpeed);
  }

  delay.process(sound,0.12, .7, 2300)

}

function mousePressed(){

if (sound.isPlaying()) {
    // .isPlaying() returns a boolean
    sound.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    sound.loop();
    background(0, 255, 0);
  }

}
