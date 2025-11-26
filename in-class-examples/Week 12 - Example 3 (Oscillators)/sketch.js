let osc1, osc2


let cScale = [261.63, 293.66, 329.63, 349.23, 349.23, 392.00, 440.00, 493.88, 523.25]
  
let slider1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  osc1 = new p5.Oscillator('sine');
  osc2 = new p5.Oscillator('sine');

  slider1 = createSlider(-10,10,0.1);


}

function draw() {
  background(220);

  let offset = slider1.value();

  let vol = map(mouseY, 0,height, 0, 1)

  let index = floor(map(mouseX, 0, width, 0, cScale.length))
  let freq = cScale[index];

  fill(0);
  text("frequency = " + freq, 50,50);

  osc1.amp(vol,0.1);
  osc1.freq(freq, 0.1);


  osc2.amp(vol,0.1);
  osc2.freq(freq+ offset , 0.1);

}

let counter = 0 
function mousePressed(){
 
  if(counter % 2 == 0){
    osc1.start();
    osc2.start();

  }
  else{
    osc1.stop();
    osc2.stop();

  }
 

  counter ++
 
}




