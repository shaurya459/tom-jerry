var cat1,cat2,cat3,mouse1,mouse2,mouse3;
var background1;


function preload() {
    //load the images here
cat1Img=loadAnimation("images/cat1.png");
background1=loadImage("images/garden.png");
mouse1Img=loadAnimation("images/mouse1.png");
mouse2Img=loadAnimation("images/mouse2.png");
cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
cat3Img=loadAnimation("images/cat4.png");
mouse3Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat1=createSprite(870,600)
cat1.addAnimation("sleeping cat",cat1Img);
cat1.scale=0.2;
mouse1=createSprite(200,550);
mouse1.addAnimation("mouse",mouse1Img);
mouse1.scale=0.1;
}

function draw() {

    background(background1);
    //Write condition here to evalute if tom and jerry collide
if(cat1.x-mouse1.x<(cat1.width-mouse1.width)/2){
cat1.velocityX=0;  
cat1.addAnimation("catlast",cat3Img);  
cat1.x=300;
cat1.changeAnimation("catlast");
cat1.scale=0.2;
mouse1.addAnimation("mouselast",mouse3Img);
mouse1.changeAnimation("mouselast");
//mouse1.scale=0.15;
}
    drawSprites();
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){
cat1.velocityX=-5;
cat1.addAnimation("cat",cat2Img);
cat1.changeAnimation("cat");
mouse1.addAnimation("mouse",mouse2Img);
mouse1.changeAnimation("mouse");
}
  //For moving and changing animation write code here


}
