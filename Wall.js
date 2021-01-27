class Wall {

    constructor(x, y, width, height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1
        }

        this.wall = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;

        World.add(world, this.wall);
    }

    display(){

        rectMode(CENTER);
        rect(this.wall.position.x, this.wall.position.y, this.width, this.height);

    }

}