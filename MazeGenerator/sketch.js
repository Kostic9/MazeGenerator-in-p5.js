var gridX = 60;
var gridY = 40;
var cellSize = 20;
var cells = [];
var active;
var activeX;
var activeY;
var stack = [];

function setup() {
	createCanvas(gridX * cellSize, gridY * cellSize);
	background(10);
	rectMode(CENTER);
	for (var i = 1; i < gridY+1; i++) {
		var row = [];
		for (var j = 1; j < gridX+1; j++) {
			row.push(new tile(j * cellSize - cellSize/2, i * cellSize - cellSize/2, cellSize, j - 1, i - 1));
		}
		cells.push(row);
	}

	active = cells[0][0];
	active.checked = true;
	stack.push(active);
}

function draw() {
	background(10);
  	for (var i = 0; i < cells.length; i++) {
		for (var j = 0; j < cells[i].length; j++) {
			cells[i][j].display();
		}
	}	
	for (var i = 0; i < 30; i++) {
	var n = [];
	if (active.ind1 > 0 && !cells[active.ind2][active.ind1 - 1].checked) {
		n.push(cells[active.ind2][active.ind1 - 1]);
	}
	if (active.ind2 > 0 && !cells[active.ind2 - 1][active.ind1].checked) {
		n.push(cells[active.ind2 - 1][active.ind1]);
	}
	if (active.ind1 < gridX - 1 && !cells[active.ind2][active.ind1 + 1].checked) {
		n.push(cells[active.ind2][active.ind1 + 1]);
	} 
	if (active.ind2 < gridY - 1 && !cells[active.ind2 + 1][active.ind1].checked) {
		n.push(cells[active.ind2 + 1][active.ind1]);
	}

	if (n.length > 0) {
	  	var rand = n[floor(random(0,n.length))];
	  	if (rand.ind1 - active.ind1 == -1) {
	  		rand.right = false;
	  		active.left = false;
	  	} else if (rand.ind1 - active.ind1 == 1) {
	  		rand.left = false;
	  		active.right = false;
	  	} else if (rand.ind2 - active.ind2 == -1) {
	  		rand.down = false;
	  		active.up = false;
	  	} else if (rand.ind2 - active.ind2 == 1) {
	  		rand.up = false;
	  		active.down = false;
	  	}
	  	rand.checked = true;
	  	active = rand;
	  	stack.push(active);
  	} else if (stack.length > 0) {
  		active = stack.pop();
  	} else {
  		console.log("Done");
  		noLoop();
  	}
  }
}
