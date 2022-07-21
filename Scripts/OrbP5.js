//sketch 1
var s = function( p ) { // p could be any variable name
    //déclaratop,s
    p.orb = [];
    p.c = ["#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56"];
    p.col;
    p.num;
    p.MAX_ORBS = 200;
    p.ORB_DISPLAY_TIME = 200;
    p.lastTimeMouseMoved = 0;
    
    p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.draw = function() {
        p.clear();
          
        p.if = (p.pmouseX !== p.mouseX && p.pmouseY !== p.mouseY){
          p.lastTimeMouseMoved = p.millis();
          p.orb = [];
        }
        
        
        p.diff = Math.max(0, millis() - p.lastTimeMouseMoved - 2000);
        p.for = ( p.i = 0; p.i < Math.round(p.diff / p.ORB_DISPLAY_TIME); p.i++) {
          p.if (p.i === p.MAX_ORBS)
            p.break;
          
          p.if (!p.orb[p.i])
            p.orb[p.i] = new p.SoftOrb(p.c[p.i % p.c.length]);
            p.orb[p.i].display();
        }
    };


p.function = function SoftOrb(col) {
    p.this.loc = createVector(random(width), random(height));
    p.this.vel = createVector(0, 0);
    p.this.col = col;
    p.this.display = function () {
        p.fill(col);
        p.noStroke();
        p.ellipse(this.loc.x, this.loc.y, 50, 50);
    }
    p.this.colour = function () {
    }
}
  };
  
  var myp5 = new p5(s, 'c1');
  
  // Sketch Two
  var t = function( d ) { 
    d.setup = function() {
      d.createCanvas(400, 100);
      x = 50;
      y = 75;
    };
  
    d.draw = function() {
      d.background(100);
      d.fill(100, 100, 200);
      d.circle(x, y, 20)
    };
    
    d.mousePressed = function() {
      x = d.mouseX
      y = d.mouseY
    }
  };
  var myp52 = new p5(t, 'c2');