// Konami code
var easter_egg = new Konami();
easter_egg.code = function()
{ 
    $('.chat-box').toggle('scale');
	$('#chat-input').focus();
}
easter_egg.load();
