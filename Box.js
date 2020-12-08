class Box {
constructor(x,y,width,height){
    this.color = "white";
    var options = {
        restitution: 0.5,
        density: 0.8,
        friction: 2,
    }
    this.width = width;
    this.height = height;
    this.body= Bodies.rectangle(x,y,width,height, options);
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