class Dustbin{
 constructor(x,y)
 {
     //Create a Ground
  this.x=x
  this.y=y	
  this.dustbinwidth=200
  this.height=100
  this.wallthicknes=20
  this.angle=0 
   
   
    
  this.dustbinleftBody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.height/2,this.wallthickness,this.height,{isStatic:true,})
   World.add(world,this.dustbinleftBody)

    
    
   this.dustbinbottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true,})
   World.add(world,this.dustbinbottomBody)

    
   this.dustbinrightBody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.height/2,this.wallthickness,this.height,{isStatic:true,})
   Matter.Body.setAngle(this.dustbinrightBody,-1*this.angle)
   World.add(world,this.dustbinrightBody)
   
    
 } 
 display(){
var PB=this.dustbinbottomBody.position
var PL=this.dustbinleftBody.position
var PR=this.dustbinrightBody.position
push()
translate(PL.x,PL.y)
rectMode(CENTER)
angleMode(RADIANS)
fill(255)
stroke(255)
rotate(this.angle)
rect(0,0,this.wallthickness,this.height)
pop()

push()
translate(PR.x,PR.y)
rectMode(CENTER)
angleMode(RADIANS)
fill(255)
stroke(255)
rotate(-1*this.angle)
rect(0,0,this.wallthickness,this.height)
pop()

push()
translate(PB.x,PB.y)
rectMode(CENTER)
angleMode(RADIANS)
fill(255)
stroke(255)
rotate(this.angle)
rect(0,0,this.dustbinwidth,this.wallthickness)
pop()
 }
  
}