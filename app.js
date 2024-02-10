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
    stom1 = openstom
  }
  if (keyCode === 65) {
    stom2 = openstom
  }
  if (keyCode === 90) {
    stom3 = openstom
  }
  if (keyCode === 87) {
    stom4 = openstom
  }
  if (keyCode === 83) {
    stom5 = openstom
  }
  if (keyCode === 88) {
    stom6 = openstom
  }
  if (keyCode === 69) {
    stom7 = openstom
  }
  if (keyCode === 68) {
    stom8 = openstom
  }
  if (keyCode === 67) {
    stom9 = openstom
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

