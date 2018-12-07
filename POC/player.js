class Player {

	constructor(id, x, y, context) {
		this._id = id
		this._x = x;
		this._y = y;

		this._velocity = 0.1;

		var owl = new Image(32, 32);
		owl.src = '../src/assets/character/Owl.png';
		owl.onload = function(){
		  context.drawImage(owl, x, y);
		}
	}

	moveUp() {
		// console.log(this.x, this.y);
		this._y -= this._velocity;
	}

	moveDown() {
		// console.log(this.x, this.y);
		this._y += this._velocity;
	}

	moveLeft() {
		// console.log(this.x, this.y);
		this._x -= this._velocity;
	}

	moveRight() {
		// console.log(this.x, this.y);
		this._x += this._velocity;
	}
}