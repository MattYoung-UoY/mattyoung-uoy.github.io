var circles = [];

function setup(){
    createCanvas(displayWidth, displayHeight);
}

function draw(){
    background(0, 0, 0);
	
    stroke(255, 255, 255);
    fill(0, 255, 0);

	ellipse(mouseX, mouseY, 20, 20);

	render();
}

function mousePressed(){
	circles.push(new Circle(mouseX, mouseY));
}

function render(circle){
	for(i = 0; i < circles.length; i++){
		ellipse(circles[i].x, circles[i].y, 20, 20);
	}
}

function Circle(x, y){
	this.x = x;
	this.y = y;
}