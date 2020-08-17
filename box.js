class Box{
    constructor(){
        var options = {
            restitution: 1
        }
     this.body=Bodies.rectangle(100,100,50,50,options);
     this.width=50
     this.height=50
     World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}