$(document).ready(function(){

    $('.menu a').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 1000,
            easing: "linear"
        });
    
        return false;
    });


    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('mobile');
    });

    $('.menu a').on('click', function() {
        $('.nav-toggle').removeClass('open');
        $('.menu').removeClass('mobile');
    });
    
});