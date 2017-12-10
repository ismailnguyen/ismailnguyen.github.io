$(function() {

    var INDEX = 0;

    $("#chat-submit").click(function(e) 
    {
        e.preventDefault();

        var msg = $("#chat-input").val();
        if(msg.trim() == '')
        {
            return false;
        }

        // Handle user request
        handle_message(msg);

        // Print bot response
        setTimeout(function() 
        {
            respond_message(msg);
        }, 1000); 

    });

    function handle_message(msg)
    {
        INDEX++;
        var str = "";

        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
        str += "<span class=\"msg-avatar\">";

        str += "<img src=\"https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-15-128.png\">";

        str += "<\/span>";
        str += "<div class=\"cm-msg-text\">";
        str += msg;

        str += "<\/div>";
        str += "<\/div>";

        $("#chat-input").val('');
  
		print_message(str);
    }
	
	function respond_message(msg)
    {
		// If user wants a game, redirect to flight game
		let userWantsPlayGame = msg.indexOf('game') >= 0;
		
        INDEX++;
        var str = "";

        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg bot\">";
        str += "<span class=\"msg-avatar\">";

        str += "<img src=\"https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-23-128.png\">";

        str += "<\/span>";
        str += "<div class=\"cm-msg-text\">";

		if (userWantsPlayGame)
		{
			str += "Let's start !";
		}
		else
		{
			str += "I'm your father !";
		}

        str += "<\/div>";
        str += "<\/div>";

		print_message(str);
		
		if(userWantsPlayGame)
		{
			window.location.replace('./flight/index.html');
		}
    }
	
	function print_message(message)
	{
		$(".chat-logs").append(message);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
		
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
	}

    $(".chat-box-toggle").click(function() {
        $(".chat-box").toggle('scale');
    });
  
});