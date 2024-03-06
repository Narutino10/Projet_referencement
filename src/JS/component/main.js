
$(document).ready(function(){


    $('#menu-buton').on('click',function(){
        $('#site-nav').toggleClass('open');
        })

});

$(window).on('scroll',function(){
    var windowHeight = $(window).height();
    var windowScroll = $(window).scroolTop();
   if(windowScroll > 0){
    $('#site-header').addClass('sticky')
   } else{
    $('#site-header').removeClass('sticky')
   }

    $('main > section:not(#section1, .visible)').each(function(){
        let sectionTop = $(this).position().top;
        let offset = windowHeight - sectionTop + windowScroll;
        if(offset >= windowHeight/3)
        {
            $(this).css({
                'opacity': 1, 
                'top': 0
            }).addClass('visible')
        }
    })
    
}) 


