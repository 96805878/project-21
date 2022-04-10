class Ball{
    constructor(x,y){
        this.x=x
        this.y=y
        this.radius=20;

        var options={
        isStatic:false,
		restitution:0.3,
		density:1.2
		

        }
        
        this.body=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)


    }




    display(){
        push()
        fill("white")
        
        ellipse(this.body.position.x,this.body.position.y,this.radius)
        pop()
    }

}