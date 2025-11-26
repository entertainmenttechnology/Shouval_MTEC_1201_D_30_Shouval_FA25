
let sound;
let playbackSpeed = 1;
let delay;

let duration;
let x = 0;

let fft 

let slider 

function preload() {

  sound = loadSound("bohemian.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //sound.loop(); 
  duration = sound.duration();
  print(duration);


  delay = new p5.Delay();

  slider = createSlider(-5,5,1,0.1);

  rectMode(CENTER);

  fft = new p5.FFT()
}

function draw() {
  background(220);

  let currentTime = sound.currentTime();
  x = constrain(map(currentTime, 0, duration, 25, width - 25), 25, width - 25);

  fill(200);
  rect(width / 2, height / 2, width, 50, 25);
  fill(255);
  ellipse(x, height / 2, 50);



  if (sound.isPlaying()) {
    rect(width / 2, height / 2 + 75, 50);

    fill(0, 100, 200)

    rect(width / 2 - 15, height / 2 + 75, 10, 40)
    rect(width / 2 + 15, height / 2 + 75, 10, 40)

    sound.rate(slider.value());

  }
  else {
    rect(width / 2, height / 2 + 75, 50);
    fill(0, 100, 200)
    triangle(width / 2 - 15, height / 2 + 15 + 75, width / 2 - 15, height / 2 - 15 + 75, width / 2 + 15, height / 2 + 75)
  }

  let waveform = fft.analyze();

  //print(waveform);
  for(let i = 0; i<waveform.length; i++){
    line(i,0,i, waveform[i])

  }

  //playbackSpeed = map(mouseX, 0,width, -3,3);
  // if (sound.isPlaying()){
  // sound.rate(playbackSpeed);
  // }

  // delay.process(sound,0.12, .7, 2300)

}

function mousePressed() {

  if (mouseX > width / 2 - 25 && mouseX < width / 2 + 25 && mouseY > height / 2 + 50 && mouseY < height / 2 + 100) {
    if (sound.isPlaying()){
    sound.pause();
    background(255, 0, 0);
    //print(mouseX);
       }
     else {
    sound.loop();

    }
    }

}

function mouseDragged(){
 
  if (mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {

  let cueTime = map(mouseX, 0, width, 0, duration);
  sound.jump(cueTime);

  // print(mouseX)
}
}





