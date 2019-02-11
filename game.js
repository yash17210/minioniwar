p1x=1400
p2x=25
p1y=840
p2y=840
score1 = 100
score2 = 100


var musicAS = new Audio();
musicAS.src = "musicAS.mp3";

//var game_over = new Audio();
//game_over.src = "gameover.mp3";

function setup() {
  createCanvas(1500, 840);
  background(0,0,0);
}

function draw() {
  musicAS.play()

if(gameover()!=0){minion()}
else
{ 

document.location.reload();

}
}
function  gameoverdisplay1()
 {
  background(255,102,0)
  fill(0)
  alert('Player 1 won the game.Press Ok to restart')
 }

function  gameoverdisplay2()
 {
  background(0,204,0)
  fill(0)
  alert('Player 2 won the game.Press OK to restart')
 }
function gameover()
{
  
if(score1<0)
{

  gameoverdisplay2()
  return 0
}
else if(score2<0)
{

  gameoverdisplay1()
  return 0  
}
  return 1
}
function minion()
{

  background(102,153,153);

  if (p1x<0)p1x=0;
  if (p1y<50)p1y=50;
  if (p1x>1375)p1x=1375;
  if (p1y>720)p1y=720;

  if (keyIsDown(LEFT_ARROW))p1x -=5;
  if (keyIsDown(RIGHT_ARROW)){p1x +=5;}
  if (keyIsDown(UP_ARROW)){p1y-=5;}
  if (keyIsDown(DOWN_ARROW)){p1y+=5;}
  
  fill(26,140,255);
  ellipse(p1x+50,p1y,100,100)
  fill(255,204,0)
  rect(p1x,p1y,100,100);
  fill(153, 153, 102)
  ellipse(p1x+50,p1y,40,40)
  fill(255,255,255)
  ellipse(p1x+50,p1y,30,30)
  fill(0,0,0)
  ellipse(p1x+50,p1y,10,10)
  fill(26,140,255);
  rect(p1x,p1y+60,100,40)
  rect(p1x,p1y+60,100,40)
  fill(255,255,255)
  ellipse(p1x+25,p1y+100,25,25)
  ellipse(p1x+75,p1y+100,25,25) 
  if (p2x<0)p2x=0;
  if (p2y<50)p2y=50;
  if (p2x>1375)p2x=1375;
  if (p2y>720)p2y=720;

  keyTyped();
  fill(0,0,0);
  ellipse(p2x+50,p2y,100,100)
  fill(255,204,0)
  rect(p2x,p2y,100,100);
  fill(153, 153, 102)
  ellipse(p2x+50,p2y,40,40)
  fill(255,255,255)
  ellipse(p2x+50,p2y,30,30)
  fill(0,0,0)
  ellipse(p2x+50,p2y,10,10)
  fill(0,0,0);
  rect(p2x,p2y+60,100,40)
  rect(p2x,p2y+60,100,40)
  fill(255,255,255)
  ellipse(p2x+25,p2y+100,25,25)
  ellipse(p2x+75,p2y+100,25,25) 
  
  text(score2,20,20,100,100)
  text(score1,1450,20,100,100)

}
function fire(fx,fy)
{
    fill(255,0,0);
    arc(fx,fy,75,50,2.0,-2.0,PIE)
 
}

function fart(fax,fay)
{
    fill(51, 204, 51);
  ellipse(fax,fay,25,25);
}

function keyTyped() {
  if(key=='i')
  {
    fx=p1x;
  fy=p1y+50;
  while(fx>0)
  {
  fire(fx,fy);

    fx-=20;}
  if (p2y >= p1y-75 && p2y < p1y + 75 && p2x<p1x)
  { score2 = score2- 15
  }

key='m';
  }
  
  if(key=='o')
  {
  fax=p1x+115;
  fay=p1y+70; 
  while(fax<1350)
  {
  fart(fax,fay);
    fax+=15;}
  if (p2y >= p1y-75 && p2y < p1y + 75 && p2x>p1x)
  { score2 = score2- 15
  }
  
key='m';
  }
  if(key=='f')
  {
    fx=p2x;
  fy=p2y+70;
  while(fx>0)
  {
    
    fart(fx,fy);
    fx-=15;}
  if (p1y >= p2y && p1y < p2y + 50 && p2x>p1x )
  {   score1 = score1- 15
  }
  
key='m';
  }
  if(key=='g')
  {
  fax=p2x+115;
  fay=p2y+50;
  while(fax<1350)
  {
  
  fire(fax,fay);
    fax+=20;
  }
  
  if (p1y >= p2y && p1y < p2y + 50 && p2x<p1x)
  {score1 = score1- 15
  }

key='m';
  }
  if (key == 'a') {
    p2x = p2x -5
  } 
  if (key == 'd') {
    p2x=p2x+5;

  }
  if (key == 'w') {
    p2y=p2y-5;
  }
  if (key== 's') {
    p2y=p2y+5;

}

  
}
function player2()
{
  keyTyped()
}