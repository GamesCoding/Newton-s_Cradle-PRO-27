class Bob {

    constructor (x,y,r) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.r=r;
        this.x=x;
        this.y=y;
        //this.diameter=bobDiameter
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
       // rectMode(RADIUS);
        fill("blue");
        circle(0,0,this.r,this.r);
        pop();
    }
}