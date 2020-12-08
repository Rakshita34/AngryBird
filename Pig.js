class Pig {
    constructor(x,y){
        this.color = "green";
        var options = {
            restitution: 0.5,
            density: 0.8,
            friction: 2,
        }
        this.width = 50;
        this.height = 50;
        this.body= Bodies.rectangle(x,y,50,50, options);
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
    rect(0, 0, this.width, this.height);
    pop();
    }
    
    
    
    
    
    }