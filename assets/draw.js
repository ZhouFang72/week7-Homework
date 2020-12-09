function setup(){
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent('p5Canvas');
    noStroke();
    colorMode(HSB);
}
  
function draw(){
    let lefthue = map(mouseX,0,width,0,360);
    let righthue = (lefthue + 180) % 360;
    fill(lefthue,100,100);
    rect(0,0,width/2,height);
    fill(righthue,100,100);
    rect(width/2,0,width/2,height);
  
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
  