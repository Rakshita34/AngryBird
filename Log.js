class Log {
constructor(x,y,length,angle){
    this.color = "white";
    var options = {
        restitution: 0.5,
        density: 0.8,
        friction: 1.5,
    }
    this.width = length;
    this.height = 20;
    this.body= Bodies.rectangle(x,y,this.width,this.height, options);
    Body.setAngle(this.body,angle);
    World.add(world,this.body);
 
  
 }

display(){
fill(this.color);
var angle = this.body.angle;
rectMode(CENTER);
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
stroke("red");
strokeWeight(2);


rect(0, 0, this.width, this.height);
pop();
}





}