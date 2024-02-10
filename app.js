let stom;

function preload() {
  stom = loadImage('./img/stomata_closed.png');
}

function setup() {
  createCanvas(900, 900);
  background(8, 44, 26);
}

function draw() {
  image(stom, 0, 0, 300, 300);
  image(stom, 0, 300, 300, 300);
  image(stom, 0, 600, 300, 300);
  image(stom, 300, 0, 300, 300);
  image(stom, 300, 300, 300, 300);
  image(stom, 300, 600, 300, 300);
  image(stom, 600, 0, 300, 300);
  image(stom, 600, 300, 300, 300);
  image(stom, 600, 600, 300, 300);
}
