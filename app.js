let stom1;
let stom2;
let stom3;
let stom4;
let stom5;
let stom6;
let stom7;
let stom8;
let stom9;
let closedstom;
let openstom;

var note1;
var note2;
var note3;
var note4;
var note5;
var note6;
var note7;
var note8;
var note9;

function preload() {
  stom1 = loadImage('./img/stomata_closed.png');
  stom2 = loadImage('./img/stomata_closed.png');
  stom3 = loadImage('./img/stomata_closed.png');
  stom4 = loadImage('./img/stomata_closed.png');
  stom5 = loadImage('./img/stomata_closed.png');
  stom6 = loadImage('./img/stomata_closed.png');
  stom7 = loadImage('./img/stomata_closed.png');
  stom8 = loadImage('./img/stomata_closed.png');
  stom9 = loadImage('./img/stomata_closed.png');
  closedstom = loadImage('./img/stomata_closed.png');
  openstom = loadImage('./img/stomata_opened.png');

  note1 = loadSound('./mp3/d4.mp3');
  note2 = loadSound('./mp3/e4.mp3');
  note3 = loadSound('./mp3/f4.mp3');
  note4 = loadSound('./mp3/f-4.mp3');
  note5 = loadSound('./mp3/g4.mp3');
  note6 = loadSound('./mp3/a5.mp3');
  note7 = loadSound('./mp3/a-5.mp3');
  note8 = loadSound('./mp3/c5.mp3');
  note9 = loadSound('./mp3/d5.mp3');
}

function setup() {
  createCanvas(900, 900);
  background(8, 44, 26);
}

function draw() {
  image(stom1, 0, 0, 300, 300);
  image(stom2, 0, 300, 300, 300);
  image(stom3, 0, 600, 300, 300);
  image(stom4, 300, 0, 300, 300);
  image(stom5, 300, 300, 300, 300);
  image(stom6, 300, 600, 300, 300);
  image(stom7, 600, 0, 300, 300);
  image(stom8, 600, 300, 300, 300);
  image(stom9, 600, 600, 300, 300);
}

function keyPressed(){
  if (keyCode === 81) {
    stom1 = openstom;
    note1.play();
  }
  if (keyCode === 65) {
    stom2 = openstom;
    note4.play();
  }
  if (keyCode === 90) {
    stom3 = openstom;
    note7.play();
  }
  if (keyCode === 87) {
    stom4 = openstom;
    note2.play();
  }
  if (keyCode === 83) {
    stom5 = openstom;
    note5.play();
  }
  if (keyCode === 88) {
    stom6 = openstom;
    note8.play();
  }
  if (keyCode === 69) {
    stom7 = openstom;
    note3.play();
  }
  if (keyCode === 68) {
    stom8 = openstom;
    note6.play();
  }
  if (keyCode === 67) {
    stom9 = openstom
    note9.play();
  }
}

function keyReleased() {
  if (keyCode === 81) {
    stom1 = closedstom
  }
  if (keyCode === 65) {
    stom2 = closedstom
  }
  if (keyCode === 90) {
    stom3 = closedstom
  }
  if (keyCode === 87) {
    stom4 = closedstom
  }
  if (keyCode === 83) {
    stom5 = closedstom
  }
  if (keyCode === 88) {
    stom6 = closedstom
  }
  if (keyCode === 69) {
    stom7 = closedstom
  }
  if (keyCode === 68) {
    stom8 = closedstom
  }
  if (keyCode === 67) {
    stom9 = closedstom
  }
}
