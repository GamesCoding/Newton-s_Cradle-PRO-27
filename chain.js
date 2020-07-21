class Chain {
    constructor(bodyA,pointB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 400
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}