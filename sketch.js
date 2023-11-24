
let font1, font2; 
let size1, size2; 
let height1, height2, height3;
let leading;
let waveSize;


let value = 1; 
let increment = 0.01; 
let maxValue = 10; 
let minValue = 1;



function preload() {
  font1 = loadFont('EBGaramond-MediumItalic.ttf');
  font2 = loadFont('CommitMono-400-Regular.ttf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);

    if (windowWidth > 1000) {
      size1 = 16;
      size2 = 53;

      height1 = 90;
      height2 = 10;
      height3 = 60;

      leading = 18; 

      waveSize= 100;
    } else if (windowWidth > 600) {
      size1 = 16;
      size2 = 53;

      height1 = 85;
      height2 = 0;
      height3 = 60;

      leading = 16; 

      waveSize= 90;

    }  else if (windowWidth > 400) {
      size1 = 12;
      size2 = 32;

      height1 = 85;
      height2 = 0;
      height3 = 60;

      leading = 16; 

      waveSize= 70;

    } else{

      size1 = 10;
      size2 = 32;

      height1 = 80;
      height2 = 0;
      height3 = 50;

      leading = 16; 

      waveSize= 90;
    }

}

function draw() {
  background("#F7F7F5");

   if (mouseIsPressed) {
    value += increment;
    if (value > maxValue) {
      value = maxValue;
    }
  } else {
    value -= increment;
    if (value < minValue) {
      value = minValue;
    }
  }

  pg.textAlign(CENTER, CENTER);
  pg.fill("#272727");

  pg.textFont(font2);
  pg.textSize(size1);
  pg.text('W.I.P', width / 2, height / 2 - height1);

  pg.textSize(size1); 
  pg.textLeading(leading);
  pg.text('Get yourself a drink. \n Wait and be calm. The new website is coming.', width / 2, height / 2 + height2);

  pg.textFont(font1);
  pg.textSize(size2);
  pg.text('Work In Progress', width / 2, height / 2 - height3);

  let tilesX = 80;
  let tilesY = 80;

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      let wave = sin(radians(frameCount)*0.999+(x*y)*0.00092)*(waveSize*value);

   let sx = x * tileW+wave;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      image(pg, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
