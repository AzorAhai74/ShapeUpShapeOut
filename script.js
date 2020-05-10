$(document).ready(function() {
        
	let $divContainer1 = $('<div></div>');
	$($divContainer1).addClass('container shadow-lg border border-info');

	let $divContainer2 = $('<div></div>');
	$($divContainer2).addClass('container-fluid');

	let $divRow = $('<div></div>');
	$($divRow).addClass('row');

	let $divCol1 = $('<div></div>');
	$divCol1.addClass('col-md-2 shadow-lg border border-info p-4');
	$($divCol1).css({
		'margin': 'auto'
	});

	
	let $rectH = $('id', 'rectHinput');
	let $rectW = $('id', 'rectWinput');
	$rectBtn.addEventListener('click', addRectangle());
	
	let $squareBtn = $('<button></button>');
	$($squareBtn).addClass('btn btn-primary');
	$($squareBtn).attr('id', 'squareInput');
	$squareBtn.addEventListener('click', addSquare());
	
	let $circleBtn = $('<button></button>');
	$($circleBtn).addClass('btn btn-primary');
	$($circleBtn).attr('id', 'circleInput');
	$circleBtn.addEventListener('click', addCircle());
	
	let $triangleBtn = $('<button></button>');
	$($triangleBtn).addClass('btn btn-primary');
	$($triangleBtn).attr('id', 'triangleInput');
	$triangleBtn.addEventListener('click', addTriangle());

	function addRectangle() {
		let rectW = document.getElementById("rectWinput").value; 
		let rectH = document.getElementById("rectHinput").value;
		let xValue = randomValue(0, 600-rectW);
		let yValue = randomValue(0, 600-rectH);
		let newRect = new Rectangle(xValue, yValue, rectW, rectH);
	};

	function addSquare() {
		let size = document.getElementById("squareInput").value;
		let xValue = randomValue(0, 600-size);
		let yValue = randomValue(0, 600-size);
		let newSquare = new Square(xValue, yValue, size);
	};

	function addCircle() {
		let radius = document.getElementById("circleInput").value;
		let xValue = randomValue(0, 600-(radius*2));
		let yValue = randomValue(0, 600-(radius*2));
		let newCircle = new Circle(xValue, yValue, radius);
	};

	function addTriangle() {
		let size = document.getElementById("triagnleInput").value
		let xValue = randomValue(0, 600-size);
		let yValue = randomValue(0, 600-size);
		let newTriangle = new Triangle(xValue, yValue, size);
	};

	function randomValue(min, max) {
		return Math.floor(Math.random() * (max-min));
	};

	let $divTemplate = $('<div></div>');
	$($divTemplate).addClass('template');
	$($divTemplate).attr('id', 'shapeName');
	$($divTemplate).css({
		'height': '600px',
		'width': '600px',
		'margin': 'auto',
		'background-color': 'lightskyblue'
	});
	

	let $divCol2 = $('<div></div>');
	$($divCol2).addClass('.col-md-2 shadow-lg border border-info p-4');
	$($divCol2).attr('id', 'shapeInput');
	$($divCol2).attr('id', 'heightInput');
	$($divCol2).attr('id', 'widthInput');
	$($divCol2).attr('id', 'areaInput');
	$($divCol2).attr('id', 'perInput');
	$($divCol2).attr('id', 'radiusInput');
	$($divCol2).css({
		'margin': 'auto'
	});
	
	

	
	$($divRow).append($divCol1);
	$($divRow).append($divTemplate);
	$($divRow).append($divCol2);
	$($rectBtn).appendTo($divCol1);
	$($squareBtn).appendTo($divCol1);
	$($circleBtn).appendTo($divCol1);
	$($triangleBtn).appendTo($divCol1);
	$($divContainer2).append($divRow);
	$('body').append($divContainer2);
	

	        
	$($rectBtn).css({
		'background': 'linear-gradient(to bottom, #F080805%, #408c99 100%)',
		'background-color': '#F08080',
	    'border-radius': '6px',
	    'width': '140px',
	    'height': '35px',
		'cursor': 'pointer',
		'color': '#ffffff',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
		'padding': '10px 25px',
		'text-decoration': 'none',
	    'text-shadow': '0px 1px 0px #3d768a',
	    'background-color': '#F08080',
	    'position': 'static',
	    'top': '1px',
	    'margin': '3px'
	});
	
	$($squareBtn).css({
		'background': 'linear-gradient(to bottom, #F080805%, #408c99 100%)',
		'background-color': '#F08080',
	    'border-radius': '6px',
	    'width': '140px',
	    'height': '35px',
		'cursor': 'pointer',
		'color': '#ffffff',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
		'padding': '10px 25px',
		'text-decoration': 'none',
	    'text-shadow': '0px 1px 0px #3d768a',
	    'background-color': '#F08080',
	    'position': 'static',
	    'top': '1px',
	    'margin': '3px'
	});
	
	$($circleBtn).css({
		'background': 'linear-gradient(to bottom, #F080805%, #408c99 100%)',
		'background-color': '#F08080',
	    'border-radius': '6px',
	    'width': '140px',
	    'height': '35px',
		'cursor': 'pointer',
		'color': '#ffffff',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
		'padding': '10px 25px',
		'text-decoration': 'none',
	    'text-shadow': '0px 1px 0px #3d768a',
	    'background-color': '#F08080',
	    'position': 'static',
	    'top': '1px',
	    'margin': '3px'
	});
	
	$($triangleBtn).css({
		'background': 'linear-gradient(to bottom, #F080805%, #408c99 100%)',
		'background-color': '#F08080',
	    'border-radius': '6px',
	    'width': '140px',
	    'height': '35px',
		'cursor': 'pointer',
		'color': '#ffffff',
		'font-family': 'Arial',
		'font-size': '12px',
		'font-weight': 'bold',
		'padding': '10px 25px',
		'text-decoration': 'none',
	    'text-shadow': '0px 1px 0px #3d768a',
	    'background-color': '#F08080',
	    'position': 'static',
	    'top': '1px',
	    'margin': '3px'
	});
	
	
	
	
	
	class Shape {
	    constructor(x, y) {
			this.div = document.createElement('div');
			this.div.style.left = `${x}px`;
			this.div.style.top = `${y}px`;
			shapeName.appendChild(this.div);
	    }
	};
	
	
	class Rectangle extends Shape {
	    constructor(x, y, rectHinput, rectWinput) {
			super(x, y);
			this.div.ClassList.add('rectangle');
			this.div.style.height = `${rectHinput}px`;
			this.div.style.width = `${rectWinput}px`;

			this.div.addEventListener('click', () => {
				shapeInput.value = this.div.classList;
				heightInput.value = rectHinput;
				widthInput.value = rectWinput;
				radiusInput.value = null;
				areaInput.value = rectHinput*rectWinput;
				perInput.value = 2*(+rectWinput + +rectHinput);
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
	    }	
	
	}
	
	class Square extends Shape {
	    constructor(x, y, size) {
			super(x, y);
			this.div.ClassList.add('square');
			this.div.style.height = `${size}px`;
			this.div.style.width = `${size}px`;

			this.div.addEventListener('click', () => {
				shapeInput.value = this.div.classList;
				heightInput.value = size;
				widthInput.value = size;
				radiusInput.value = null;
				areaInput.value = size**2;
				perInput.Value = 4*size;
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
	    }
	}
	
	class Circle extends Shape {
	    constructor(x, y, radius) {
			super(x, y);
			this.div.ClassList.add('circle');
			this.div.style.height = `${radius*2}px`;
			this.div.style.width = `${radius*2}px`;

			this.div.addEventListener('click', () => {
				shapeInput.value = this.div.classList;
				heightInput.value = radius*2;
				widthInput.value = radius*2;
				radiusInput.value = radius;
				areaInput.value = (Math.PI)*((radius) **2);
				perInput.value = (2) * (radius) * (Math.PI);
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
	    }
	}
	
	class Triangle extends Shape {
	    constructor(x, y, size) {
			super(x, y);
			this.div.ClassList.add('triangle');
			this.div.style.borderBottom = `${size}px solid rgb(253, 237, 91)`;
			this.div.style.borderRight = `${size}px solid transparent`;

			this.div.addEventListener('click', () => {
				shapeInput.value = this.div.classList;
				heightInput.value = size;
				widthInput.value = size;
				radiusInput.value = null;
				areaInput.value = (size*size)/2;
				perInput.value = +size + +size + Math. sqrt(size**2 + size**2);
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
	    }
	}



    
    
    

    


    
    
    
    
    



});