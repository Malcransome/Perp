var img;
var value = (220, 58, 17);

function preload() {
	img = loadImage('assets/Your sorority graphic-02.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	background(random(255), random(255), random(255));
}


function draw() {
	background(220, 17, 58, value);
	// var A = map(mouseX, 0, windowWidth, 100, 300);
	translate(-230, -120);
	image(img, mouseX + -random(0, 5), mouseY + -random(0, 5), img.width / 4, img.height / 4);
 // textSize(18);
 // fill(0);
 // text('press "Z"',50,50,20);
	
}

function keyTyped() {
	if (key === 'z') {
		value = random(0, 255);
	} else {
		value = 0;
	}
}