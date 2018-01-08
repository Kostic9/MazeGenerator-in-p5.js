class tile {
	constructor(x, y, s, ind1, ind2) {
		this.x = x;
		this.y = y;
		this.s = s;
		this.left = true;
		this.right = true;
		this.up = true;
		this.down = true;
		this.ind1 = ind1;
		this.ind2 = ind2;

		this.checked = false;
	}
	display() {
		if (this.checked) {
			fill(60, 150, 180, 100)
		} else {
			fill(0, 100)
		}
		noStroke()
		rect(this.x, this.y, this.s, this.s);
		stroke(255)
		strokeWeight(2);
		//line(this.x + this.s/2, this.y - this.s/2, this.x + this.s/2, this.y + this.s/2);
		//line(this.x - this.s/2, this.y - this.s/2, this.x + this.s/2, this.y - this.s/2);
		if (this.up) {
			line(this.x - this.s/2, this.y - this.s/2, this.x + this.s/2, this.y - this.s/2);
		}
		if (this.down) {
			line(this.x - this.s/2, this.y + this.s/2, this.x + this.s/2, this.y + this.s/2);
		}
		if (this.left) {
			line(this.x - this.s/2, this.y - this.s/2, this.x - this.s/2, this.y + this.s/2);
		} 
		if (this.right) {
			line(this.x + this.s/2, this.y - this.s/2, this.x + this.s/2, this.y + this.s/2);
		}
	}
}