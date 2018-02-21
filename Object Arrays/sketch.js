var balls = [];
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;

function preload() {
	img1 = loadImage('assets/P.png');
	img2 = loadImage('assets/E.png');
	img3 = loadImage('assets/blockQ.png');
	img4 = loadImage('assets/blockP.png');
	img5 = loadImage('assets/blockE.png');
	img6 = loadImage('assets/R.png');
	img7 = loadImage('assets/Q.png');
	img8 = loadImage('assets/Tag.png');
	img9 = loadImage('assets/perp graphic-08.png');
	
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	// for (var i = 0; i < 50; i++) {
	// 	balls.push(new Jitter());
	// }
}

function mousePressed() {
	var b = new Jitter(mouseX, mouseY);
	balls.push(b);
}

function mouseDragged() {
	var b = new Jitter(mouseX, mouseY);
	balls.push(b);
}


function draw() {
	// noStroke();
	// for (var x = 0; x <= width; x += 30) {
	//  for (var y = 5; y <= height; y += 30) {
	// 	fill(229, 100);
	// 	ellipse(x, y, 10, 10);
	// image(img8,400, 200);
	// var v1 = (mouseX, 0,width,0,255);
		background(250);
	for (var i = 0; i < balls.length; i++) {
		balls[i].move();
		balls[i].showP();
		balls[i].showE();
		balls[i].showR();
		balls[i].showQ();
		// balls[i].showShapes();

		// for (var i = 0; i < 50; i++) {
		// 	balls.push(new Jitter());
		// }
	}
}

function keyPressed(){
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	if (keyCode == BACKSPACE){
	background(r,g,b);
		console.log ('PLEASE');
	}
}
// }
// }

function Jitter() {
	this.x1 = mouseX -+ random(0,100);
	this.y1 = mouseY -+ random(0,100);
	this.x2 = mouseX -+ random(0,10);
	this.y2 = mouseY -20;
	this.x3 = mouseX + 50;
	this.y3 = mouseY +50;
	this.x4 = mouseX -+ random(0,100);
	this.y4 = mouseY -+ random(0,50);
	this.s = random(5,50);
	this.s1 = random(10, 20);
	this.diameter = random(10, 80);
	this.speed = 3;

	this.move = function() {
		this.x1 += random(-this.speed, this.speed);
		this.y1 += random(-this.speed, this.speed);
		this.x2 += random(-this.speed, this.speed);
		this.y2 += random(-this.speed, this.speed);
		this.x3 += random(-this.speed, this.speed);
		this.y3 += random(-this.speed, this.speed);
		this.x4 += random(-this.speed, this.speed);
		this.y4 += random(-this.speed, this.speed);
	};

	this.showP = function() {
		image(img1, this.x1, this.y1, this.s, this.s);
	}

	this.showE = function() {
		image(img2, this.x2, this.y2, this.s, this.s);
	}

	this.showR = function() {
		image(img6, this.x3, this.y3, this.s, this.s);
	}

	this.showQ = function() {
		image(img7, this.x4, this.y4, this.s, this.s);
	}

	// this.showShapes = function() {
	// 	noFill();
	// 	strokeWeight(2);
	// 	rect(this.x1, this.y1, 50, 50);
	// 	stroke(255, 0, 150);
	// 	ellipse(this.x2, this.y2, 30, 30);
	// 	stroke(0, 200, 230);

	// }

	// this.clicked = function() {
	// 	var d = dist(mouseX.mouseY, this.x1, this.y2);
	//  if (d<10)
	//  this.nudge = this.x1 + 20;
	// }







}