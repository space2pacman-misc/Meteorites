class Space {
	constructor(width, height) {
		this._EMPTY = 0;
		this._METEORITE = 1;
		this._witdh = width;
		this._height = height;
		this._space = null;
		this._init();
	}

	addMeteorite() {
		let x = Math.floor(Math.random() * this._witdh);
		let row = this._space[0];

		if(row[x] === this._EMPTY) {
			row[x] = this._METEORITE;
		} else {
			this.addMeteorite();
		}
	}

	moveMeteorites() {
		let i = this._height;

		for(let j = 0; j < this._witdh; j++) {
			if(i === -1) {
				break;
			}
			
			if(this._space[i] && this._space[i + 1]) {
				this._space[i + 1][j] = this._space[i][j];
				this._space[i][j] = 0;
			}

			if(j === this._witdh - 1) {
				j = -1;
				i--;
			}

		}

	}

	getObjects() {
		return this._space;
	}

	_init() {
		this._space = [];

		for(let i = 0; i < this._height; i++) {
			let array = new Array(this._witdh);

			this._space.push(Array.from(array).fill(0));
		}
	}
}