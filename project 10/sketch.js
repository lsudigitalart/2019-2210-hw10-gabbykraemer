var particles = [];

function setup() {
  createCanvas(800, 600);
  background(100,23,224);


}

function draw() {

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }


    for (var i = 0; i < 100; i++) {
      particles.push(new Particle);
    }

}

function Particle() {
  this.xPos = random(width);
  this.cSize = random(1, 500);
  this.yPos = height + this.cSize;
  this.cColor = random(214,53,175);
  this.cSpeed = random(80);
  this.display = function () {
     fill(map(this.yPos, 0, height, 100, 255));
     this.yPos = this.yPos - this.cSpeed;
     // this.xPos = this.xPos + this.yPos / 200;
     this.cSpeed = map(this.yPos, 0,600, 0, 20)
     square(this.xPos, this.yPos, this.cSize);
   }
 }
