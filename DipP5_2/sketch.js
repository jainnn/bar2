var bars = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
    background(255);
  for (var i = 0; i < 200; i++) {
    bars[i] = new Bar(random(width), random(height));
  }

}

function draw() {
 
  

  for (var i = 0; i < bars.length; i++) {
    bars[i].move();
    bars[i].bounce();
    bars[i].display();
    
    
    for (var j = 0; j < bars.length; j++) {
      if (i != j && bars[i].intersects(bars[j])) {
        bars[i].changeColor();
        bars[j].changeColor();
        bars[i].bounceback();
        bars[j].bounceback();
        
      }
    }
  }

if (mouseIsPressed) {
    bars.push(new Bar(mouseX, mouseY));
}
  
if (bars.length > 200) {
    bars.splice(0, 1);
}

}

function Bar(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  var s = 2;
  this.col = color(30,50,255);
  this.yspeed = random(-s, s);

  this.move = function() {
    this.y = this.y + this.yspeed;
  }

this.changeColor = function(){
  this.col=color(random(255),random(255),random(255));
}


  this.display = function() {
    noStroke();
    strokeWeight(7);
    fill(this.col);
    rectMode(CENTER);
    rect(this.x, this.y, this.r/2, this.r*2);
  }


  this.bounceback = function() {
    this.yspeed = this.yspeed * -1;
  }
  
  
  this.bounce = function() {
    if (this.y > height - 70 || this.y < 0)
      this.yspeed = this.yspeed * -1;
  }
  
  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d <= this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}