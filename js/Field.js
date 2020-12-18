class Field {
	constructor(width, height, field) {
		this._witdh = width;
		this._height = height;
		this._field = document.querySelector(field);
		this._objects = {};
		this._init();
	}

	addObects(type, objects) {
		this._objects[type] = objects;
	}

	render() {
		let objects = this._objects["meteorites"];

		this._clear();

		for(let i = 0; i < this._height; i++) {
			for(let j = 0; j < this._witdh; j++) {
				switch(objects[i][j]) {
					case 0:
						this._field.children[i].children[j].classList.add("empty");

						break;
					case 1:
						this._field.children[i].children[j].classList.add("meteorite");

						break;
				}
			}
		}
	}

	_clear() {
		for(let i = 0; i < this._height; i++) {
			for(let j = 0; j < this._witdh; j++) {
				this._field.children[i].children[j].className = "";
				this._field.children[i].children[j].classList.add("cell");
			}
		}
	}

	_createElement(type) {
		let element = document.createElement("div");

		element.classList.add(type);

		return element;
	}

	_init() {
		for(let i = 0; i < this._height; i++) {
			let row = this._createElement("row");

			for(let j = 0; j < this._witdh; j++) {
				let cell = this._createElement("cell");

				row.append(cell);
			}

			this._field.append(row);
		}
	}
}