
$(document).ready(function () {
    // affix menu
    let headerH = $('.block--slider').innerHeight();

    $(window).on('scroll orientationchange', function (e) {
        let headerH = $('.block--slider').innerHeight();

        if($(window).scrollTop() >= headerH ){
            $('header').addClass('fixed');

            player.pauseVideo();
        }else {
            $('header').removeClass('fixed');
            if($('.js_slider-fw .slick-active').find('iframe').length){
                player.playVideo();
            }
        }
    });


    //anchors
    let activeHash = window.location.hash;
    $('nav a').each(function (ind, el) {
        if($(el).attr('href') == activeHash){
            $(el).addClass('active');
        }

        $(el).on('click', function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    });

    // $('nav a').on('click', function () {
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // });


    //============  MMENU

    let idMenu = $('#myMenu');
    idMenu.mmenu({
        extensions: [ 'effect-menu-slide'],
        navbar: {
            title: '<span>UPQODE</span>'
        },
        offCanvas: {
            position: 'right'
        }
    });

    let apiButt = idMenu.data('mmenu');
    apiButt.bind( 'open:finish', () =>  $('.hamburger').addClass('is-active') );
    apiButt.bind( 'close:finish',() => $('.hamburger').removeClass('is-active') );


});