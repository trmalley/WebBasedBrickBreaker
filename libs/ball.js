function Ball(x, y, r){

	var options = {
		friction: 0.3,
		restitution: 0.6,
		//isStatic: true
	}
	
	this.body = Bodies.circle(x,y,r, options);
	
	var pos = this.body.position;

	this.r = r;
	this.y = pos.y;
	this.x = pos.x;
	
	World.add(world, this.body);

	
	this.show = function(){
		push();
		translate(pos.x, pos.y);
		//translate(p5.Vector.fromAngle(millis() / 1000, 40));
		//pos.x = pos.x+0.8;
		//pos.y = this.y;
		ellipseMode(CENTER);
		strokeWeight(1);
		stroke(255);
		fill(127);
		//translate(this.x, this.y);
		circle(0,0,this.r*2);
		pop();
	}
}

	
	/*
	var options = {
		friction: 0.3,
		restitution: 0.6,
		//isStatic: true
	}
	
	this.body = Bodies.circle(x,y, r, options);
	var pos = this.body.position;

	this.r = r;
	this.y = pos.y;
	this.x = pos.x;
	this.vx = 1;
	this.vy = 1;
	var angle = this.body.angle;
	
	World.add(world, this.body);
	
	this.show = function(){
		//console.log("X " + this.x + " Y " + this.y );
		//console.log("vX " + this.vx + " vY " + this.vy );
		
	
		push();
		translate(this.x, this.y);
		//rotate(angle);
		//ellipseMode(CENTER);
		//strokeWeight(1);
		//stroke(255);
		//fill(127);
		//circle(this.x,this.y,this.r);
		pop();
	}
	
	function update(){

		//console.log("X " + this.x + " Y " + this.y );
		//console.log("vX " + this.vx + " vY " + this.vy );
	}
}*/