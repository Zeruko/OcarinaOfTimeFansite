(function($){
    $(document).ready(function(){
              //Swap the positions of the graphics pic and article if the window width is below/above 1199px width when the doc loads
            if($(window).width() <= 1199){
               $(".graphicsPic").insertAfter(".graphics");
            }
            else if($(window).width() >= 1199){
                $(".graphics").insertAfter(".graphicsPic");
            }
        
            //Swap the positions of the graphics pic and article when the window goes below/above 1199px width
        $(window).resize(function(){
            if($(window).width() <= 1199){
               $(".graphicsPic").insertAfter(".graphics");
            }
            else if($(window).width() >= 1199){
                $(".graphics").insertAfter(".graphicsPic");
            }
        });
        
            //Makes sure that the mobile menu and banner h1/body stay in synch
            //Also sets the nav menu display to none.
        $(window).resize(function(){           
            if($(window).width() > 850){
                $(".banner h1").removeClass("bannerText");
                $(".toggle-nav").removeClass("active");
                $(".navigationBar ul").addClass("active");
                
            }
            
            if($(".navigationBar ul").hasClass("active")){
                $(".banner h1").removeClass("bannerText");
                $(".bodyContainer").removeClass("bannerText");
            }
            else{
                $(".banner h1").addClass("bannerText");
                $(".bodyContainer").addClass("bannerText");
            }
            

        });
        

            //jQuery  for toggling the menu
        $(".toggle-nav").click(function(e){
                //Toggles the menu
            $(this).toggleClass("active");
            $(".navigationBar ul").toggleClass("active");
                //This prevents a # being put in the address bar and the browser scrollbar jumping to the top of the page
            e.preventDefault(); 
            
                //Changes the position of the banner header for homepage
                //Moves the entire body down on the other pages.
            if($(".navigationBar ul").hasClass("active")){
                $(".banner h1").removeClass("bannerText");
                $(".bodyContainer").removeClass("bannerText");
            }
            else{
                $(".banner h1").addClass("bannerText");
                $(".bodyContainer").addClass("bannerText");
            }
            
            
        });
        

        
    });
})(jQuery);