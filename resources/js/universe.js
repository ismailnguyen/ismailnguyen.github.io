$(window).load(function(){
	var body = $("body");

	var init = function() {
		$('#universe')
		.show()
		.delay(1)
		.queue(function() {
			body
			.addClass("scale-d view-3D zoom-large")
			.delay(2000)
			.queue(function() {
				$(this).addClass("set-size");
				$(this).dequeue();
			});
		});
	};
	
	$('#load-universe').click(function () {
		$('.header').hide();
		$('.footer').hide();
		
		init();	
	});
});