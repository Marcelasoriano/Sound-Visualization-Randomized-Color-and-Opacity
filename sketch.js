let j;
let x, y;

function preload() {
music = loadSound("SUPERMODEL.mp3"); // Maneskin: Supermodel https://www.youtube.com/watch?v=skxjm_0DBeI
}

function setup() {
  createCanvas(600, 600, WEBGL);
  music.play();
  music.setVolume(1.0);
  amp = new p5.Amplitude();
  fft = new p5.FFT(1, 64);
  r = random(0,250);
  g = random(0,250);
  b = random(0,250);
  p = 1; 
}

function draw() {
  background(0);
  stroke(r, g, b,155);
  x = 30;
  y = 30;
  fill(0)
  rotateY(frameCount * 0.01);
  if (p>0){
  x = x + random(-20, 20);
  y = y + random(20, -20);
  r = r + random(-20, 20);
  g = g + random(20, -20);
  b = b + random(-20, 20);
  if(x<2){x=0}
  if(x>0){x=windowWidth}
  if(y<0){y=0}
  if(y>windowHeight/2){y=windowHeight/2}
  if(r<0){r=0}
  if(r>255){r=255}
    if(g<0){g=0}
  if(g>255){g=255}
    if(b<0){b=0}
  if(b>255){b=255}
  }

  for (let j = 1; j < 4; j++) {
    push();
    for (let i = 2; i < 60; i++) {
      translate(
        cos(frameCount * 0.002 + j) * 150,
        sin(frameCount * 0.002 + j) * 150,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      box(6, 6, 6);
      pop();
    }
  }
  function mousePressed(){
  p=p*-1;
}
}