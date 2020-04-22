function animate (animationElementId) {
	var container = document.body;

	container.onmousemove = event => {
		var halfW = ( container.clientWidth / 2 );
		var halfH = ( container.clientHeight / 2 );

		var coorX = ( halfW - ( event.pageX - container.offsetLeft ) );
		var coorY = ( halfH - ( event.pageY - container.offsetTop ) );

		var degX  = ( ( coorY / halfH ) * 20 ); 
		var degY  = ( ( coorX / halfW ) * -20 );

		var factorX = 0.75; if (coorY < 0) { factorX = 1.5 - factorX; }
			var factorY = 0.75; if (coorX < 0) { factorY = 1.5 - factorY; }

		var animationElement = document.getElementById(animationElementId);

		animationElement.style.transform = 'perspective( 600px ) translate3d( 0, 0, 0 ) rotateX('+ (degX*factorX) +'deg) rotateY('+ (degY*factorY) +'deg)';
	}
}

export default animate