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
		
		// If user wants a game, redirect to flight game
		if(msg.indexOf('game') >= 0)
		{
			window.location.replace('./flight/index.html');
		}

        // Print user request
        print_message(msg, 'user');

        // Print bot response
        setTimeout(function() 
        {
            print_message(msg, 'bot');
        }, 1000); 

    });

    function print_message(msg, type)
    {
        INDEX++;
        var str="";

        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
        str += "<span class=\"msg-avatar\">";

        if (type == 'bot')
        {
            str += "<img src=\"https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-23-128.png\">";
        }
        else
        {
            str += "<img src=\"https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-15-128.png\">";
        }

        str += "<\/span>";
        str += "<div class=\"cm-msg-text\">";

        if (type == 'bot')
        {
            str += "I'm your father !";
        }
        else
        {
            str += msg;
        }

        str += "<\/div>";
        str += "<\/div>";

        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);

        if(type == 'user')
        {
            $("#chat-input").val(''); 
        }

        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
    }  

    $(".chat-box-toggle").click(function() {
        $(".chat-box").toggle('scale');
    });
  
});