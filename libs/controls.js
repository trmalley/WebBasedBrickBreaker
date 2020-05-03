function keyPress(maxW, maxH) {
	
		if (keyIsDown(UP_ARROW) && paddleL.y > 0 + (paddleL.h/2)) {
			console.log("UP" + paddleL.y);
			paddleL.force = {x: 0,y:-10};
			//console.log("UP " + paddleL.y);
			paddleL.y = paddleL.y - 10;
			//this.v.create(this.x, this.y);
			//pos.y = pos.y - 10;
		} 
		if (keyIsDown(DOWN_ARROW) && paddleL.y < maxH - (paddleL.h/2)) {
			paddleL.force = {x: 0,y:+10};
			paddleL.y = paddleL.y + 10;
			//this.v.create(this.x, this.y);
			console.log("DOWN");
		}
		if (keyIsDown(UP_ARROW) && paddleR.y > 0 + (paddleR.h/2)) {
			//console.log("UP");
			paddleR.force = {x: 0,y:-10};
			//console.log("UP " + paddleL.y);
			paddleR.y = paddleR.y - 10;
			//this.v.create(this.x, this.y);
			//pos.y = pos.y - 10;
		} 
		if (keyIsDown(DOWN_ARROW) && paddleR.y < maxH - (paddleR.h/2)) {
			paddleR.force = {x: 0,y:+10};
			paddleR.y = paddleR.y + 10;
			//this.v.create(this.x, this.y);
			//console.log("DOWN");
		}

	return false;
}


