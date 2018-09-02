// Logo animation
(function() {
	$(document).on('mousemove', '.js-logo-animation-container', function (event) {
		var halfW = ( this.clientWidth / 2 );
		var halfH = ( this.clientHeight / 2 );

		var coorX = ( halfW - ( event.pageX - this.offsetLeft ) );
		var coorY = ( halfH - ( event.pageY - this.offsetTop ) );

		var degX  = ( ( coorY / halfH ) * 20 ); 
		var degY  = ( ( coorX / halfW ) * -20 );

		$('.js-logo').css('transform', function () {
			var factorX = 0.75; if (coorY < 0) { factorX = 1.5 - factorX; }
			var factorY = 0.75; if (coorX < 0) { factorY = 1.5 - factorY; }
			return 'perspective( 600px ) translate3d( 0, 0, 0 ) rotateX('+ (degX*factorX) +'deg) rotateY('+ (degY*factorY) +'deg)';
		});
	});
})();