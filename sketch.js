//Create variables here
var dog;
var happyDog;
var database;
var FoodS;
var Foodstock;

function preload()
{
	//load images here
 dogImg=loadImage("dogImg1.png");
 happyDog=loadImage("dogImg.png")


}

function setup() {
	createCanvas(500 , 500);
  database = firebase.database()
  dog = createSprite(250 , 250);
  dog.addImage("dog", dogImg)
  var foodStock = database.ref('Food');
  foodStock.on("value" , readStock);
  
}


function draw() {  
background(46, 139, 87);



  drawSprites();
  //add styles here
  
}

function readStock(){


  
}



