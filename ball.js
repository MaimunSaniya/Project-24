class Ball {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      
      this.width = width;
      this.height = height;
      this.radius = 15;

      this.body = Bodies.circle(x, y,15, options);
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x,pos.y);
        
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0, 0,this.radius,this.radius);
      pop();
    }
  };