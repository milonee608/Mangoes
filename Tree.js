class Tree{
    constructor(x,y,width,height){
       this.body=Bodies.rectangle(x,y,width,height);
       this.width=width;
       this.height=height;
       this.image= loadImage("sprites/tree.png");
       World.add(world,this.body);
      
    }
display(){
    imageMode(CENTER);
    var p=this.body.position;
    image(this.image,p.x,p.y,width,height);
}

}