jQuery(document).ready(function() {
    //Scroll Top
    var btn = $('#scoll-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '400');
    });
    //End Scroll Top

    //sticky menu
    function sticktothetop() {
        var window_top = $(window).scrollTop();
        var top = $('#stick-here').offset().top;
        if (window_top > top ) {
            $('#stickThis').addClass('stick');
            $('#stick-here').height($('#stickThis').outerHeight());
        } 
        else {
            $('#stickThis').removeClass('stick');
            $('#stick-here').height(0);
        }
    }
    $(function() {
        $(window).scroll(sticktothetop);
        sticktothetop();
    });

    function sticktothetop1() {
        var window_top = $(window).scrollTop();
        var top = $('#stick-here').offset().top;
        if (window_top > top) {
            $('.cta-bottom-wrapper').addClass('active');
        }
        else {
            $('.cta-bottom-wrapper').removeClass('active');
        }
    }
    $(function() {
        $(window).scroll(sticktothetop1);
        sticktothetop1();
    });
    //end sticky menu

    // Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
    })
    // End Slider

    // Menu Header
    $('#menu-duan').click(function () {
        $('.menu .child').slideToggle("fast");
        $(this).toggleClass('active');
    })
    // End Menu Header

});