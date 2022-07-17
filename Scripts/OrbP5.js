var orb = [];
var c = ["#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56", "#FE2C19", "#52C5DB", "#6A25FF", "#FFAED8", "#CDCA56"];
var col;
var num;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 200; i++) {
        orb[i] = new SoftOrb(c[i]);
    }
    // color1 = random(255);
    // color2 = random(255);
    // color3 = random(255);


}

function draw() {
   // background(255);
    // let color= (random(20),random(0), random(255) );
  //  fill(255, 0, 0);
   // rectMode(CENTER);
   // rect(width/2, height/2, mouseX, 200);
    
    for (var i = 0; i < orb.length; i++) {

        // orb[i].colour(); // <-----???!
        // orb[i].edges();
        // fill(value);
        //fill(255, 0, 0)
        orb[i].display();
        // orb[i].move();
    }

    // if(mouseX===this.loc.x){
    //     fill(0);
    //         }
            

}

// function mousePressed() {

//     if (value === 0) {
//         value = 255;
//       } else {
//         value = 0;
//       }

// }



// function mousePressed() {

//     if (value === 0) {
//         // value = 255;
//     } else {
//         // value = 0;

//     }

// }

function SoftOrb(col) {
    this.loc = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    


    this.col = col;
    this.display = function () {
        fill(col);
        noStroke();


        ellipse(this.loc.x, this.loc.y, 50, 50);
    }

    this.colour = function () {


        //  fill(color1, color2, color3);
        //fill(255, 0, 0);
        //fill(col);

    }
}