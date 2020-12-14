class PinkBlock extends Box{
    constructor(x,y){
        super(x,y,50,60);
    }

    display(){
       fill("lightpink");
       if(this.body.speed < 4){
        super.display();
        }
        else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility -5;
        tint(255,this.Visiblity);
        rect(this.x,this.y, 20, 30);
        pop();
        }
    }
} 
