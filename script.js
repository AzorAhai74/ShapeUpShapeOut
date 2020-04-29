$(document).ready(function() {
        
    let $rectBtn = $("#rectBtn");
    let $rectHinput = $('#rectHinput');
    let $rectWinput = $('#rectWinput');

    let $squareBtn = $('#squareBtn');
    let $squareInput = $('#squareInput');

    let $circleBtn = $('#circleBtn');
    let $circleInput = $('#circleInput');

    let $triangleBtn = $('#triangleBtn');
    let $triangleInput = $('#triangleInput');

    let $template = $('.template');

    let $shapeInput = $('#shapeInput');
    let $heightInput = $('#heightInput');
    let $widthInput = $('#widthInput');
    let $areaInput = $('#areaInput');
    let $perInput = $('#perInput');
    let $radiusInput = $('#radiusInput');
        
    $($rectBtn).css({
        'box-shadow': '0px 10px 14px -7px #276873',
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
        'background' :'linear-gradient(to bottom,  #F08080 5%, #599bb3 100%)',
        'background-color': '#F08080',
        'position': 'static',
        'top': '1px',
        'margin': '3px'
    });

    $($squareBtn).css({
        'box-shadow': '0px 10px 14px -7px #276873',
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
        'background' :'linear-gradient(to bottom,  #F08080 5%, #599bb3 100%)',
        'background-color': '#F08080',
        'position': 'static',
        'top': '1px',
        'margin': '3px'
    });

    $($circleBtn).css({
        'box-shadow': '0px 10px 14px -7px #276873',
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
        'background' :'linear-gradient(to bottom,  #F08080 5%, #599bb3 100%)',
        'background-color': '#F08080',
        'position': 'static',
        'top': '1px',
        'margin': '3px'
    });

    $($triangleBtn).css({
        'box-shadow': '0px 10px 14px -7px #276873',
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
        'background' :'linear-gradient(to bottom,  #F08080 5%, #599bb3 100%)',
        'background-color': '#F08080',
        'position': 'static',
        'top': '1px',
        'margin': '3px'
    });

    $($rectHinput).css({
        'width': '175px',
        'margin': '5px'
    });

    $($rectWinput).css({
        'width': '175px',
        'margin': '5px'
    });

    $($squareInput).css({
        'width': '175px',
        'margin': '5px'
    });

    $($circleInput).css({
        'width': '175px',
        'margin': '5px'
    });

    $($triangleInput).css({
        'width': '175px',
        'margin': '5px'
    });

    $($template).css({
        'width': '600px',
        'height': '600px',
        'background-color': 'lightskyblue',
        'margin': '100px',
        'margin-top': '10px'
    });

    $($shapeInput).css({
        'width': '175px',
        'margin': '5px',
        'margin-bottom': '30px'
    });

    $($heightInput).css({
        'width': '175px',
        'margin': '5px'
    });

    $($widthInput).css({
        'width': '175px',
        'margin': '5px',
        'margin-top': '30px'
    });

    $($areaInput).css({
        'width': '175px',
        'margin': '5px',
        'margin-top': '30px'
    });

    $($perInput).css({
        'width': '175px',
        'margin': '5px',
        'margin-top': '30px'
    });

    $($radiusInput).css({
        'width': '175px',
        'margin': '5px',
        'margin-top': '30px'
    });

    class Shape {
        constructor(width, height, background) {
            this.width = width;
            this.height = height;
            this.background = background;
        };
    };


    class Rectangle extends Shape {
        constructor($width, $height) {
        super($width, $height, $background);
        this.$width = '200px'
        this.$height = '100px'
        
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