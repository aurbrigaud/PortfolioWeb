const MAX_ORBS = 2000;
const ORB_DISPLAY_TIME = 200;
const COLORS = ["#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56"];
// Sketch Two
 var t = function( d ) { 

    d.orb = [];
    d.lastTimeMouseMoved = 0;

    d.setup = function() {
      d.createCanvas(d.windowWidth, d.windowHeight);
      x = 50;
      y = 75;
    };
  
    d.draw = function() {
        if (d.pmouseX !== d.mouseX && d.pmouseY !== d.mouseY){
            d.lastTimeMouseMoved = d.millis();
            d.orb = [];
            d.clear();
          }


          let diff = Math.max(0, d.millis() - d.lastTimeMouseMoved - 3000);
          for (var i = 0; i < Math.round(diff / ORB_DISPLAY_TIME); i++) {
            if (i === MAX_ORBS)
              break;
            
            if (!d.orb[i]){
              d.orb[i] = new d.SoftOrb(COLORS[i % COLORS.length]);
              d.orb[i].display();
            }
          }
    };
    


    d.SoftOrb = function(col) {

        this.loc = d.createVector(d.random(d.width), d.random(d.height));

        this.vel = d.createVector(0, 0);
        this.col = col;
        this.display = function () {
            d.fill(col);
            d.noStroke();
            d.ellipse(this.loc.x, this.loc.y, d.windowWidth/50,d.windowWidth/50);
        }
        this.colour = function () {
        }
    }
  };
  var myp52 = new p5(t, 'c2');