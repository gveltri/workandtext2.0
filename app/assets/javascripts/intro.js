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

intrographic();