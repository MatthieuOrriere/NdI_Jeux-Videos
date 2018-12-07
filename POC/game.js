define('game', ['map', 'player'], function(Map, Player) {

	var keyStatus = { left: false, right: false, up: false, down: false	}
	var cellSize = 30;
	var playerSize = 20;

	var KEYCODE_ENTER = 13;		//useful keycode
	var KEYCODE_SPACE = 32;		//useful keycode
	var KEYCODE_UP = 38;		//useful keycode
	var KEYCODE_DOWN = 40;		//useful keycode
	var KEYCODE_LEFT = 37;		//useful keycode
	var KEYCODE_RIGHT = 39;		//useful keycode

	var Game = {
		cellSize: 30,
		playerSize: 20,
	}

	Game.init = function(mapValues, playerIds) {

		// init Map
		this.map = new Map();
		// init players
		this.players = this.initPlayers(playerIds);
		// bind controls
		document.onkeydown = this.handleKeyDown;
		document.onkeyup = this.handleKeyUp;
		// init canvas
		this.scene = document.getElementById('scene');
		this.scene.width = this.map.getWidth()*cellSize;
		this.scene.height = this.map.getHeight()*cellSize;

		this.ctx = this.scene.getContext('2d');
		// start rendering
		this.tick();
	};
	
	Game.update = function() {
		if(keyStatus.up && this.map.isFrontClear(this.players[0])) {
			this.players[0].moveUp();
		}
		if(keyStatus.down && this.map.isRearClear(this.players[0])) {
			this.players[0].moveDown();
		}
		if(keyStatus.left && this.map.isLeftClear(this.players[0])) {
			this.players[0].moveLeft();
		}
		if(keyStatus.right && this.map.isRightClear(this.players[0])) {
			this.players[0].moveRight();
		}
	};

	Game.draw = function() {
		// Clear canvas on every draw (?)
		this.ctx.clearRect(0,0,this.scene.width,this.scene.height);

		// Render all tiles
		for (var y = 0; y < this.map.getHeight(); y++) {
			for(var x = 0; x < this.map.getWidth(); x++) {
				if(this.map.getTile(x, y) === 0) {
					this.ctx.fillStyle = 'white';
					this.ctx.fillRect(cellSize*x, cellSize*y, cellSize, cellSize);
				}
			}
		}

		this.ctx.fillStyle = 'red';
		for(var i = 0; i < this.players.length; i++) {
			this.ctx.fillRect(cellSize*this.players[i].x, cellSize*this.players[i].y, playerSize, playerSize);
		}
	};

	Game.tick = function() {
		this.update();
		this.draw();

		requestAnimationFrame(this.tick.bind(this));
	};

	Game.initPlayers = function(playerIds) {
		// TODO get all players from server.
		do {
			randX = Math.round(Math.random()*(this.map.getWidth()-1));
			randY = Math.round(Math.random()*(this.map.getHeight()-1));
		} while(this.map.getTile(randX, randY) === 1);

		return [new Player(1, randX, randY)];
	};

	Game.handleKeyUp = function(e) {
		if (!e) {
			var e = window.event;
		}
		switch (e.keyCode) {
			case KEYCODE_LEFT:
				keyStatus.left = false;
				break;
			case KEYCODE_RIGHT:
				keyStatus.right = false;
				break;
			case KEYCODE_UP:
				keyStatus.up = false;
				break;
			case KEYCODE_DOWN:
				keyStatus.down = false;
				break;
		}
	};

	Game.handleKeyDown = function(e) {
		if (!e) {
			var e = window.event;
		}
		switch (e.keyCode) {
			case KEYCODE_LEFT:
				keyStatus.left = true;
				return false;
			case KEYCODE_RIGHT:
				keyStatus.right = true;
				return false;
			case KEYCODE_UP:
				keyStatus.up = true;
				return false;
			case KEYCODE_DOWN:
				keyStatus.down = true;
				return false;
		}
	};

	return Game;
});