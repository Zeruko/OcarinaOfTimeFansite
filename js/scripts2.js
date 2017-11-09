(function($){
        $(document).ready(function(){
    
        
        $(window).resize(function(){
        if($(window).width() <= 598){
            $("#sidebar").hide();
            $("#mainWrapper").css({"width": "100%"});
        }
        else if($(window).width() > 598){
            $("#sidebar").show();
            $("#mainWrapper").css({"width": "85%"});
        }
    });
            
            
    });
})(jQuery);
