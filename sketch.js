function setup() {
  
  createCanvas(800, 600);
  
  background(204,204,204);
  
  // Layout
  
    strokeWeight(0);
    rect(12,12,776,576);
    
    textAlign(CENTER);
    textStyle(NORMAL)
    text("Chiara Piva | Creative Coding | 2017-2018",385,575);

}

function draw() {
  
  //ROBOT  
  // Neck
    strokeWeight(3);
    fill(102,102,102);
    line(385,244,385,321);
    line(399,244,399,321);
    line(413,244,413,321);

  // Antennas
    strokeWeight(3);
    line(358,127,364,135);
    line(439,51,417,126);
    line(458,199,488,204);
  
 // Body
    noStroke(0);
    fill(144,144,144);
    ellipse(386,484,90,90);
 
    fill(0,0,0);
    rect(324,322,118,162);
    
    noStroke(0);
    fill(144,144,144);
    rect(324,344,119,9);
    
 // Head 
    fill(0,0,0);
    ellipse(400,184,121,121);
 
 // Grey button
    noStroke(0);
    fill(144,144,144);
    ellipse(381,176,13,13);
 
    noStroke(0);
    fill(144,144,144);
    ellipse(426,151,10,10);
 
    noStroke(0);
    fill(144,144,144);
    ellipse(438,195,10,10);

 // Eye
    noStroke(0);
    fill(255,255,255);
    ellipse(416,178,40,40);
    
    noStroke(0);
    fill(0,0,0);
    ellipse(416,178,8,8);
    
    fill(144,144,144);
    rect(324,344,119,9);
    
    
    //OTHER
    //Asterisk 
    textAlign(CENTER);
    textSize(50);
    fill(233,32,90)
    text("*",600,200);
    text("*",240,250);
    //text("*",325,300);

    textAlign(CENTER);
    textSize(150);
    fill(233,32,90)
    text("*",200,200);
    text("*",600,600);
    
    textAlign(CENTER);
    textSize(25);
    fill(233,32,90)
    text("*",150,400);
    text("*",100,300);
    text("*",550,400);
    text("*",600,300);
    
}
