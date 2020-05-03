function paddle(x, y, w, h){
	
	
	var options = {
		friction: 0.3,
		restitution: 0.6,
		//isStatic: true
	}
	
	this.body = Bodies.rectangle(x,y,w,h, options);
	var pos = this.body.position;
	
	//vector = Matter.vector;
	
	//this.v = vector;
	
	this.w = w;
	this.h = h;
	this.y = pos.y;
	this.x = pos.x;
	var angle = this.body.angle;
	
	World.add(world, this.body);
	
	
	this.show = function(){
		
		//var translatedX = this.x * maxW;
		//var translatedY = this.y * maxH;
		if (keyIsDown(UP_ARROW) && this.y > 0 + (paddleL.h/2)) {
			console.log(pos.y);
			pos.y = pos.y - 1;
			//translate(this.x, pos.y);
			//Body.setPosition(this.body, pos)
			//this.body.force = {x: 0,y:-.01};
			//console.log("UP " + paddleL.y);
			//this.y = this.y - 10;
			//this.v.create(this.x, this.y);
			//pos.y = pos.y - 10;
		} 
		if (keyIsDown(DOWN_ARROW) && this.y < maxH - (paddleL.h/2)) {
			//this.body.force = {x: 0,y:+10};
			pos.y = pos.y + 1;
			//translate(this.x, pos.y);
			
			//this.y = this.y + 10;
			//this.v.create(this.x, this.y);
			//console.log("DOWN");
		}
		//Body.setPosition(this.body, this.v)
		//pos.y = this.y;
		push();
		//pos.y = .y;
		//console.log("Y: " + pos.y);
		//pos.y = pos.y;
		
		//Body.setPosition(this.body, pos);
		
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(1);
		stroke(255);
		fill(127);
		rect(0,0,this.w,this.h);
		//triangle(translatedX-(this.w/2),translatedY,translatedX+(this.w/2),translatedY,translatedX,translatedY-this,h);
		pop();
	}
}