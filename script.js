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

	let $rectBtn = $('<button></button>');
	$($rectBtn).addClass('btn btn-primary');
	$($rectBtn).attr('id', 'rectHinput');
	$($rectBtn).attr('id', 'rectWinput');
	
	let $squareBtn = $('<button></button>');
	$($squareBtn).addClass('btn btn-primary');
	$($squareBtn).attr('id', 'squareInput');
	
	let $circleBtn = $('<button></button>');
	$($circleBtn).addClass('btn btn-primary');
	$($circleBtn).attr('id', 'circleInput');
	
	let $triangleBtn = $('<button></button>');
	$($triangleBtn).addClass('btn btn-primary');
	$($triangleBtn).attr('id', 'triangleInput');

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
	    constructor() {
			
	    }
	};
	
	
	class Rectangle {
	    constructor() {
	        
	    }
	
	}
	
	class Square {
	    constructor() {
	    }
	}
	
	class Circle {
	    constructor() {
	
	    }
	}
	
	class Triangle {
	    constructor() {
	
	    }
	}



    
    
    

    


    
    
    
    
    



});