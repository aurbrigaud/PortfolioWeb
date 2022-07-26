// old script

// let img;
// function preload() {
//   img = loadImage("ID_AurelienBrigaud.png");


// }

// function setup() {
//   cnv = createCanvas(img.width, img.height);

//   let newCanvasX = (windowWidth - img.width) / 2;
//   let newCanvasY = (windowHeight - img.height) / 2;
//   cnv.position(newCanvasX, newCanvasY);
//   print(img.width, img.height);
// }

// function draw() {
//   background(255);
//   fill(0);
//   noStroke();

//   let tiles = (mouseX+10)/5;
//   let tilesSize = width/tiles;

//   translate(tilesSize/2, tilesSize/2);


//   for (let x = 0; x < tiles; x++) {
//     for (let y = 0; y < tiles; y++) {

//       let c = img.get(int (x*tilesSize), int (y*tilesSize));
// let size = map (brightness(c), 0, 255, tilesSize, 0);
//       ellipse(x * tilesSize, y * tilesSize, size, size);
//     }
//   }
// }


var s = function (p) { // p could be any variable name
  // let x = 0;
  // let y = 0;


  let img;
  p.preload = function () {
    img = p.loadImage("ID_AurelienBrigaud.png");
  }




  p.setup = function () {
    cnv = p.createCanvas(img.width, img.height);

    let newCanvasX = (p.windowWidth - img.width) / 2;
    let newCanvasY = (p.windowHeight - img.height) / 2;
    cnv.position(newCanvasX, newCanvasY);
    console.log(img.width, img.height);      // t = 0;
    // x = 100;
    // y = 50;
  };

  p.draw = function () {
    p.background(255);
    p.fill(0);
    p.noStroke();

    let tiles = (p.mouseX + 10) / 5;
    let tilesSize = p.width / tiles;

    p.translate(tilesSize / 2, tilesSize / 2);


    for (let x = 0; x < tiles; x++) {
      for (let y = 0; y < tiles; y++) {

        let c = img.get(p.int(x * tilesSize), p.int(y * tilesSize));
        let size = p.map(p.brightness(c), 0, 255, tilesSize, 0);
        p.ellipse(x * tilesSize, y * tilesSize, size, size);
      }
    }

  };
};
var myp5 = new p5(s, 'c1');
