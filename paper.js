var x = 50;
var y = 627;

var img;

class paper {
    constructor(x, y, width, height){
        var options = {
            isStatic    :false,
            restitution : 0.3 ,
            friction    : 0.5 ,
            density     : 1.2 ,

        }
 
        this.body = Bodies.circle(200, 600, 28, options);

        this.width = 70;

        this.image = loadImage('paper.png');

        World.add(world, this.body);

    }

    display(){

        var angle = this.body.angle;

        push();
        
        translate(this.body.position.x , this.body.position.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image , 0 ,0 , this.width , this.width);

        pop();

    }

}

