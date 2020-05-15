$(document).ready(function() {
	//clears input values upon page reload//	
	$('input[type!="button"][type!="submit"], select, textarea').val('').blur();

	//function to add location of rectangle and input values of rectangle dimensions//
	function addRectangle() {
		let rectH = document.getElementById('rectH').value;
		let rectW = document.getElementById('rectW').value;
		let xValue = randomValue(0, 600-rectW);
		let yValue = randomValue(0, 600-rectH);
		let newRect = new Rectangle(xValue, yValue, rectW, rectH);
	};
	//function to add location of square and input values of square dimensions//
	function addSquare() {
		let size = document.getElementById('squareLength').value;
		let xValue = randomValue(0, 600-size);
		let yValue = randomValue(0, 600-size);
		let newSquare = new Square(xValue, yValue, size);
	};
	
	//function to add location of circle and input values of circle dimensions//
	function addCircle() {
		let radius = document.getElementById('circleRadius').value;
		let xValue = randomValue(0, 600-(radius*2));
		let yValue = randomValue(0, 600-(radius*2));
		let newCircle = new Circle(xValue, yValue, radius);
	};
	//function to add location of triangle and input values of triangle dimensions//
	function addTriangle() {
		let size = document.getElementById('triangleH').value;
		let xValue = randomValue(0, 600-size);
		let yValue = randomValue(0, 600-size);
		let newTriangle = new Triangle(xValue, yValue, size);
	};
	//function to place shapes in random locaiton of shape area//
	function randomValue(min, max) {
		return Math.floor(Math.random() * (max-min));
	};


	//button submit listeners that places shapes on shape area//
	let $rectBtn = document.getElementById('rectBtn');
	$rectBtn.addEventListener('click', addRectangle);

	let $squareBtn = document.getElementById('squareBtn');
	$squareBtn.addEventListener('click', addSquare);

	let $circleBtn = document.getElementById('circleBtn');
	$circleBtn.addEventListener('click', addCircle);

	let $triangleBtn = document.getElementById('triangleBtn');
	$triangleBtn.addEventListener('click', addTriangle);
	
		
	let shape = document.getElementById('shapeArea');

	let shapeInput = document.getElementById('shapeName');

	let heightInput = document.getElementById('height');

	let widthInput = document.getElementById('width');

	let areaInput = document.getElementById('area');

	let radiusInput = document.getElementById('radius');

	let perInput = document.getElementById('perimeter');
		
	//class for shape constructor//
	class Shape {
		constructor(x, y) {
			this.div = document.createElement('div');
			this.div.style.left = `${x}px`;
			this.div.style.top = `${y}px`;
			shape.appendChild(this.div);
		}
	};
	
	//class for rectangle constructor//
	class Rectangle extends Shape {
		constructor(x, y, rectH, rectW) {
			super(x, y);
			this.div.style.backgroundColor = 'palegreen';
			this.div.style.position = 'absolute';
			this.div.style.opacity = '75%';
			this.div.style.height = `${rectH}px`;
			this.div.style.width = `${rectW}px`;

			this.div.addEventListener('click', () => {
				shapeInput.value = "rectangle";
				heightInput.value = rectH;
				widthInput.value = rectW;
				radiusInput.value = "Does Not Apply";
				areaInput.value = rectH*rectW;
				perInput.value = 2*(+rectW + +rectH);
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
		}	
	
	}
	
	//class for square constructor//
	class Square extends Shape {
		constructor(x, y, size) {
			super(x, y);
			this.div.style.backgroundColor = 'palevioletred';
			this.div.style.positon = 'absolute';
			this.div.style.opacity = '75%';
			this.div.style.height = `${size}px`;
			this.div.style.width = `${size}px`;

			this.div.addEventListener('click', () => {
				shapeInput.value = "Square";
				heightInput.value = size;
				widthInput.value = size;
				radiusInput.value = "Does Not Apply";
				areaInput.value = size**2;
				perInput.value = 4 * size;
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
		}
	}
	//class for circle constructor//
	class Circle extends Shape {
		constructor(x, y, radius) {
			super(x, y);
			this.div.style.backgroundColor = 'mediumpurple';
			this.div.style.position = 'absolute';
			this.div.style.opacity = '75%';
			this.div.style.borderRadius = '50%';
			this.div.style.height = `${radius*2}px`;
			this.div.style.width = `${radius*2}px`;

			this.div.addEventListener('click', () => {
				shapeInput.value = "Circle";
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
	//class for triangle constructor//
	class Triangle extends Shape {
		constructor(x, y, size) {
			super(x, y);
			this.div.style.position = 'absolute';
			this.div.style.opacity = '75%';
			this.div.style.borderBottom = `${size}px solid rgb(253, 237, 91)`;
			this.div.style.borderRight = `${size}px solid transparent`;
			

			this.div.addEventListener('click', () => {
				shapeInput.value = "Triangle";
				heightInput.value = size;
				widthInput.value = size;
				radiusInput.value = "Does Not Apply";
				areaInput.value = (size*size)/2;
				perInput.value = +size + +size + Math. sqrt(size**2 + size**2);
			});

			this.div.addEventListener('dblclick', () => {
				this.div.remove();
			});
		}
	}

	
	
		
		
	
	



    
    
    

    


    
    
    
    
    



});