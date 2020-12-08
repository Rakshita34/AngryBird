class Ground{
    constructor(x,y,width,height){
    this.color = "red";
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);    
    this.width = width;
    this.height = height;

    }

    display(){
        fill(this.color);
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
console.log(pos.x, pos.y);
    }
}