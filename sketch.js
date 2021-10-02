
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bols=0
var balls=[]
var ballpos=[]
var bosszombey
var zombie1,zombie2,zombie3
var zombilyf=5


function preload(){
  zombe=loadImage("./assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth-1,windowHeight-5);

  engine = Engine.create();
  world = engine.world;

                                                                              
  bosszombey=createSprite(-10,windowHeight-100,100,100)
  bosszombey.addImage(zombe)
  bosszombey.scale=0.2
  

  bosszombey.x=-10

  if(bosszombey.x=windowWidth/4){
    zombie1=createSprite(-10,windowHeight-55,100,100)
    zombie1.addImage(zombe)
    zombie1.scale=0.1
    zombie1.velocityX=5
  }
  

  if(bosszombey.x=windowWidth/2){
    zombie2=createSprite(-10,windowHeight-55,100,100)
    zombie2.addImage(zombe)
    zombie2.scale=0.1
    zombie2.velocityX=4
  }

  if(bosszombey.x=windowWidth/4*3){
    zombie3=createSprite(-10,windowHeight-55,100,100)
    zombie3.addImage(zombe)
    zombie3.scale=0.1
    zombie3.velocityX=3
  }
 
  if(bosszombey.x=-10){
    bosszombey.velocityX=2
  }

  

  button=createButton("Cannon")
  button.position(windowWidth/2,50)
  button.size(60,50)
  button.mouseClicked(drop)

   button2=createButton("Cannon")
  button2.position(100,50)
  button2.size(60,50)
  button2.mouseClicked(drop2)

   button3=createButton("Cannon")
  button3.position(windowWidth-140,50)
  button3.size(60,50)
  button3.mouseClicked(drop3)

}


function draw() 
{
  background("blue");
  Engine.update(engine);
 
  
drawSprites()





  for(var ball of balls){
    ball.display()
  }
}


function drop(){
for(var i=0;i<=0;i++){
var ball=new CannonBall(windowWidth/2+30,100,50,50)
balls.push(ball)
}
var pos=ball.body.position
var distance=dist(bosszombey.position.x,bosszombey.position.y,pos.x,pos.y);
var distance1=dist(zombie1.position.x,zombie1.position.y,pos.x,pos.y);
  var distance2=dist(zombie2.position.x,zombie2.position.y,pos.x,pos.y);
  var distance3=dist(zombie3.position.x,zombie3.position.y,pos.x,pos.y);
console.log(pos)
console.log(distance3)
if (distance<=450 ){
  console.log("collide")
  zombilyf=zombilyf-1
  if(zombilyf===0){
    dedzombo()
    if(zombilyf=zombilyf-1){
      console.log("zombio")
    }
    
      if(zombilyf===0){
        dedzombo()
        
      }
    
  }
}
if (distance1<=570){
  if (distance1>=540){
  dedzombo1()
  }
}
if (distance2<=555 ){
  if (distance2>=530){
  dedzombo2()
  }
}
if (distance3<=520 ){
  if(distance3>=490){
  dedzombo3()
  }
}
}




function drop2(){
  for(var i=0;i<=0;i++){
  var ball=new CannonBall(130,100,50,50)
  balls.push(ball)
  }
  var pos=ball.body.position
  var distance=dist(bosszombey.position.x,bosszombey.position.y,pos.x,pos.y);
  var distance1=dist(zombie1.position.x,zombie1.position.y,pos.x,pos.y);
  var distance2=dist(zombie2.position.x,zombie2.position.y,pos.x,pos.y);
  var distance3=dist(zombie3.position.x,zombie3.position.y,pos.x,pos.y);
  console.log(pos)
  console.log(distance)
  if (distance<=450 ){
    console.log("collide")
    zombilyf=zombilyf-1
    if(zombilyf===0){
      dedzombo()
      if(zombilyf=zombilyf-1){
        console.log("zombio")
      }
      
        if(zombilyf===0){
          dedzombo()
          
        }
      
    }
  }
  if (distance1<=570){
    if (distance1>=540){
    dedzombo1()
    }
  }
  if (distance2<=555 ){
    if (distance2>=530){
    dedzombo2()
    }
  }
  if (distance3<=520 ){
    if(distance3>=490){
    dedzombo3()
    }
  }
  }
  
  
  function drop3(){
    for(var i=0;i<=0;i++){
    var ball=new CannonBall(windowWidth-110,100,50,50)
    balls.push(ball)
    }
    var pos=ball.body.position
    var distance=dist(bosszombey.position.x,bosszombey.position.y,pos.x,pos.y);
    var distance1=dist(zombie1.position.x,zombie1.position.y,pos.x,pos.y);
    var distance2=dist(zombie2.position.x,zombie2.position.y,pos.x,pos.y);
    var distance3=dist(zombie3.position.x,zombie3.position.y,pos.x,pos.y);
    console.log(pos)
    console.log(distance)
    if (distance<=450 ){
      console.log("collide")
      zombilyf=zombilyf-1
      if(zombilyf===0){
        dedzombo()
        if(zombilyf=zombilyf-1){
          console.log("zombio")
        }
        
          if(zombilyf===0){
            dedzombo()
            
          }
        
      }
    }
    if (distance1<=570){
      if (distance1>=540){
      dedzombo1()
      }
    }
    if (distance2<=555 ){
      if (distance2>=530){
      dedzombo2()
      }
    }
    if (distance3<=520 ){
      if(distance3>=490){
      dedzombo3()
      }
    }
    }
    
    
  
  function dedzombo(){
    setTimeout(() => {
      bosszombey.velocityX=0
     bosszombey.velocityY=7
    },2000);
  }
    
     
  function dedzombo1(){
    setTimeout(() => {
      zombie1.velocityX=0
     zombie1.velocityY=7
    },2000);
  }
     
  function dedzombo2(){
    setTimeout(() => {
      zombie2.velocityX=0
     zombie2.velocityY=7
    },2000);
  }
     
  function dedzombo3(){
    setTimeout(() => {
      zombie3.velocityX=0
     zombie3.velocityY=7
    },2000);
  }
    
  
    
  