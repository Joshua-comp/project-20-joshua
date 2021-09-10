var space
function preload(){
var bgImg=loadImage("images/iss.png")
var brushImg=loadAnimation("images/brush.png")
var gymImg=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png","images/gym1.png")
var eatImg=loadAnimation("images/eat1.png","images/eat2.png")
var bathImg=loadAnimation("images/bath1.png","images/bath2.png")
var moveImg=loadAnimation("images/move.png","images/move1.png")
var sleepImg=loadAnimation("images/sleep.png")


}

function setup() {
  createCanvas(800,400);
  space=createSprite(400, 200, 50,50);
  space.addImage(bgImg)

}

function draw() {
  background(255,255,255);  
  drawSprites();
}