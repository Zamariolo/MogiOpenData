let font,
  fontsize = 40;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  // font = loadFont('');
}

function setup(){
	var canvas = createCanvas(windowWidth,windowHeight*0.7);
	canvas.parent('divCanvas');

	stroke(0);
	strokeWeight(0);

	// Fundo
	fill('#311b92');
	rect(0,0,windowWidth*0.99, windowHeight*0.52);

	// Detalhe de baixo
	fill('#311b92');

	beginShape();
	curveVertex(0, windowHeight*0.51);
	curveVertex(0, windowHeight*0.51);
	curveVertex(1.5*windowWidth/8, windowHeight*0.64);
	curveVertex(3*windowWidth/8, windowHeight*0.55);
	curveVertex(4*windowWidth/8, windowHeight*0.64);
	curveVertex(5*windowWidth/8, windowHeight*0.56);
	curveVertex(6.5*windowWidth/8, windowHeight*0.7);
	curveVertex(windowWidth*0.99, windowHeight*0.52);
	curveVertex(windowWidth*0.99, windowHeight*0.52);
	endShape();

	// Titulo
	textAlign(CENTER)
	fill(255)
	textFont('Georgia', 50,20)
	text('mogi open data', width*0.5, windowHeight/3)

}

function draw(){

}
