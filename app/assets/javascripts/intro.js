// Intro graphic for workandtext

function intrographic() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	var params = {width: w, height: h};
	var elem = document.getElementById('animation');
	var two = new Two(params).appendTo(elem);
	var circle = two.makeCircle(w/2,h/2,200);

	circle.fill = 'rgb(130,130,130)';
	circle.opacity = '1';
	circle.stroke = '0';

	two.bind('update', function(frameCount) {
	  var t = 0.01;
	  circle.scale += t*3;
	  circle.opacity -= t;	
	}).play();

	var hidediv = setTimeout(hidediv, 4000);
	function hidediv() {
		document.getElementById('animation').style.display='none';
	} 
};

function intrographic1() {
    // initialize new svg canvas the size of the window on load
    var w = window.innerWidth;
    var h = window.innerHeight;
    var elem = document.getElementById('animation');
    var two = new Two({width:w,height:h}).appendTo(elem);
    
    //shape constructor
    function Square(centerx,centery,size) {
	this.centerx=centerx;
	this.centery=centery;
	this.size=size;
	this.topright=[centerx+(size/2),centery+(size/2)];
	this.topleft=[centerx-(size/2),centery+(size/2)];
	this.bottomleft=[centerx-(size/2),centery-(size/2)];
	this.bottomright=[centerx+(size/2),centery-(size/2)];
    };

    for (i=0;i<(w/50);i++) {
	for (j=0;j<(h/50);j++) {
	    //init square and draw triangle from square
	    var square = new Square(25+(i*50),25+(j*50),50);
	    var triangle1 = two.makePolygon(square.centerx,square.centery,square.bottomleft[0],square.bottomleft[1],square.bottomright[0],square.bottomright[1]);
	    var triangle2 = two.makePolygon(square.centerx,square.centery,square.bottomright[0],square.bottomright[1],square.topright[0],square.topright[1]);
	    var triangle3 = two.makePolygon(square.centerx,square.centery,square.topright[0],square.topright[1],square.topleft[0],square.topleft[1]);
	    var triangle4 = two.makePolygon(square.centerx,square.centery,square.topleft[0],square.topleft[1],square.bottomleft[0],square.bottomleft[1]);
	    triangle1.fill= 'rgb(252,252,252)';
	    triangle2.fill= 'rgb(239,239,239)';
	    triangle3.fill= 'rgb(226,227,233)';
	    triangle4.fill= 'rgb(252,252,252)';
	    triangle1.stroke= 'rgb(252,252,252)';
	    triangle2.stroke= 'rgb(239,239,239)';
	    triangle3.stroke= 'rgb(226,227,233)';
	    triangle4.stroke= 'rgb(252,252,252)';
	}
    }

    two.update();

    var hidediv = setTimeout(hidediv, 4000);
    function hidediv() {
     	document.getElementById('animation').style.display='none';
    } 



}


// function intrographic2() {
// 	var w = window.innerWidth;
// 	var h = window.innerHeight;
// 	var params = {width: w, height: h};
// 	var elem = document.getElementById('animation');
// 	var two = new Two(params).appendTo(elem);

// 	var node = diagram.getFactory().createSvgNode(bounds);
// 	node.setTransparent(true); // hide ShapeNode geometry

// 	var svg = new SvgContent();
// 	svg.parse("app/assets/animation/square1.svg");
// 	node.setContent(svg);

// 	var group = two.interpret(node);
// 	two.update();
// }

// intrographic2();

intrographic1();