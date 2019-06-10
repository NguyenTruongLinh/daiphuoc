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
    //end sticky menu

    // Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        autoplayHoverPause: true,
    })
    // End Slider

    // Menu Header
    $('#menu-duan').click(function () {
        $('.menu .child').slideToggle("fast");
        $(this).toggleClass('active');
    })
    $('.menu-mb-close, .overlay-mobile, .menu a').click(function () {
        $('.menu .child').slideUp("fast");
    })
    // End Menu Header

    // Menu mobile
    $('.menu-mobile').click(function () {
        $('header .container .menu').addClass('is-active');
        $('.overlay-mobile').addClass('active');
        $('body,html').css('overflow', 'hidden');
        $('.sticky').css('visibility', 'hidden');
    })

    $('.menu-mb-close, .overlay-mobile, .menu a').click(function(){
        $('header .container .menu').removeClass('is-active');
        $('.overlay-mobile').removeClass('active');
        $('body,html').css('overflow', 'auto');
        $('.sticky').css('visibility', 'visible');
    })
    // End Menu Mobile

    // Dropdown footer MB
    $('#link-cty').click(function(){
        $('#mn-cty').slideToggle('fast');
    })
    $('#link-info').click(function(){
        $('#mn-info').slideToggle('fast');
    })
    // End Dropdowm footer MB

});