let img1;
let img2;
let img3;
let pos = 25;
let pos1 = -400;
let pos2 = -800;
let pos3 = -1250;
let shapeX;
let shapeY;
const radius = 50;
const diameter = radius*2;
let shapeMove = false;

function setup() {
  createCanvas(1000, 400);
  noStroke();
  fill("black");
  shapeX = width/2;
  shapeY = height/2;
  img1 = loadImage("scales.png");
  img2 = loadImage("eflag.jpg");
  img3 = loadImage("sflag.jpg");
    let url = 'https://api.carbonintensity.org.uk/regional'
  loadJSON(url,gotData)
   text = ([0], 20.80);
}

function gotData(data){
  print(data); 
}

function draw() {
  background(220);
  circle(shapeX, shapeY, diameter);
  rect(225, pos1, 30, 30);
  rect(380, pos2, 30, 30);
  image(img1, 200, 250, 250, 150);
  image(img2, 150, 20, 120, 60);
  image(img3, 350, 20, 120, 60);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  pos1 += event.delta; 
  pos2 += event.delta;
  pos3 += event.delta;
  //uncomment to block page scrolling
  //return false;
}

function mousePressed() {
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if(d<radius) {
    shapeMove = true;
  } else {
    shapeMove = false;
 }
}


function mouseReleased() {
  shapeMove = false;
}


function mouseDragged() {
  
  if(shapeMove) {
    shapeX = mouseX;
    shapeY = mouseY;
  }
}
  
  