let innerWidth = Math.floor(window.innerWidth / 10);
let innerHeight = Math.floor(window.innerHeight / 10);
let width = innerWidth % 2 === 1 ? innerWidth - 1 : innerWidth;
let height = innerHeight % 2 === 1 ? innerHeight - 1 : innerHeight;
let field = new Field(width, height, ".field");
let space = new Space(width, height);

field.addObects("meteorites", space.getObjects());

setInterval(() => {
	space.addMeteorite();
	space.addMeteorite();
	space.addMeteorite();
	
	space.moveMeteorites();
	field.render();
}, 100)