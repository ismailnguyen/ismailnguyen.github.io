var game_size = 20;
var container_width = window.innerWidth / game_size;
var container_height = window.innerHeight / game_size;
var move_direction_x = move_direction_y = 0;
var trail = [];

var leftBorder = 0;
var rightBorder = container_width - 1;
var topBorder = 0;
var bottomBorder = container_height - 1;

var snake =	
{
	position : {
		x: null,
		y: null
	},
	
	last_direction : {
		x: null,
		y: null
	},
	
	tail : null,
	
	init : function()
	{
		this.initPosition();
		this.initTail();
	},
	
	initPosition : function()
	{
		this.position.x = getRandomPositionX();
		this.position.y = getRandomPositionY();
	},
	
	initTail : function()
	{
		this.tail = 3;
	},
	
	move : function(direction_x, direction_y)
	{
		this.position.x += direction_x;
		this.position.y += direction_y;
		
		this.last_direction.x = direction_x;
		this.last_direction.y = direction_y;
	},
	
	moveLeft : function()
	{
		this.move(-1, 0);
	},
	
	moveUp : function()
	{
		this.move(0, -1);
	},
	
	moveRight : function()
	{
		this.move(1, 0);
	},
	
	moveDown : function()
	{
		this.move(0, 1);
	},
	
	moveForward : function()
	{
		this.move(this.last_direction.x, this.last_direction.y);
	},
	
	hasReachLeftBorder : function(leftBorder)
	{
		return this.position.x < 0;
	},

	hasReachRightBorder : function(rightBorder)
	{
		return this.position.x > rightBorder;
	},

	hasReachTopBorder : function(topBorder)
	{
		return this.position.y < 0;
	},

	hasReachBottomBorder : function(bottomBorder)
	{
		return this.position.y > bottomBorder;
	},
	
	isAtPosition : function(position)
	{
		return this.position.x === position.x && this.position.y === position.y;
	},
	
	increaseTail : function()
	{
		this.tail++;
	}
};

var fruit =
{
	position : {
		x: null,
		y: null
	},
	
	init : function()
	{
		this.position.x = getRandomPositionX();
		this.position.y = getRandomPositionY();
	}
};

window.onload = function () 
{
	canv = document.getElementById("game_container");
	canv.width = window.innerWidth;
	canv.height = window.innerHeight;
	
	context = canv.getContext("2d");
	document.addEventListener("keydown", keyPush);
	
	snake.init();
	fruit.init();
	
	setInterval(game, 1000/15);
}

function keyPush (event)
{
	switch (event.keyCode)
	{
		case 37 :
			snake.moveLeft();
			break;
		case 38 :
			snake.moveUp();
			break;
		case 39 :
			snake.moveRight();
			break;
		case 40 :
			snake.moveDown();
			break;	
	}
}

function game ()
{
	snake.moveForward();

	if (snake.hasReachLeftBorder(leftBorder))
	{
		snake.position.x = container_width - 1;
	}
	
	if (snake.hasReachRightBorder(rightBorder))
	{
		snake.position.x = 0;
	}
	
	if (snake.hasReachTopBorder(topBorder))
	{
		snake.position.y = container_height - 1;
	}
	
	if (snake.hasReachBottomBorder(bottomBorder))
	{
		snake.position.y = 0;
	}
	
	context.fillStyle = 'black';
	context.fillRect(0, 0, canv.width, canv.height);
	
	context.fillStyle = 'lime';
	for (var i = 0; i < trail.length; i++)
	{
		context.fillRect(trail[i].x * game_size, trail[i].y * game_size, game_size - 2, game_size - 2);
		
		if (snake.isAtPosition(trail[i]))
		{
			snake.initTail();
		}
	}
	
	trail.push(
	{
		x : snake.position.x,
		y : snake.position.y
	});
	
	while(trail.length > snake.tail)
	{
		trail.shift();
	}
	
	if (snake.isAtPosition(fruit.position))
	{
		snake.increaseTail();
		
		fruit.init();
	}
	
	context.fillStyle = 'red';
	context.fillRect(fruit.position.x * game_size, fruit.position.y * game_size, game_size - 2, game_size - 2);
}

function getRandomPositionX()
{
	return Math.floor(Math.random() * container_width);
}

function getRandomPositionY()
{
	return Math.floor(Math.random() * container_height);
}