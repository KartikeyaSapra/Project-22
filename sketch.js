var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairySound.play();

	fairy = createSprite(130,520)
	fairy.addAnimation("flyingFairy",fairyImg);
	fairy.scale = 0.25;

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y > 470 && starBody.positionY > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}

	if(keycode === LEFT_ARROW){
		fairy.y = fairy.y +20
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,true); 
	}

	//writw code to move fairy left and right
	
}
