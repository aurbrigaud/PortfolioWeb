

  let img;
  function preload() {
    img = loadImage("ID_AurelienBrigaud.png");
    

  }
  
  function setup() {
    cnv = createCanvas(img.width, img.height);
  
    let newCanvasX = (windowWidth - img.width) / 2;
    let newCanvasY = (windowHeight - img.height) / 2;
    cnv.position(newCanvasX, newCanvasY);
    print(img.width, img.height);
  }
  
  function draw() {
    background(255);
    fill(0);
    noStroke();
    
    let tiles = (mouseX+10)/5;
    let tilesSize = width/tiles;
    
    translate(tilesSize/2, tilesSize/2);
    
    
    for (let x = 0; x < tiles; x++) {
      for (let y = 0; y < tiles; y++) {
        
        let c = img.get(int (x*tilesSize), int (y*tilesSize));
  let size = map (brightness(c), 0, 255, tilesSize, 0);
        ellipse(x * tilesSize, y * tilesSize, size, size);
      }
    }
  }
