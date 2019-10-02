
$(document).ready(function () {

// **** next - prev buttons for sliders

    $('.js-prev').on('click', function(){
        $(this).closest('[data-rel=slider]').find('.slider').slick('slickPrev');
    });
    $('.js-next').on('click', function(){
        $(this).closest('[data-rel=slider]').find('.slider').slick('slickNext');
    });


// **** play video in slider after slide was changed;

    $('.js_slider-fw').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if($(this).find('.slick-active').find('video').length){
            $(this).find('.slick-active').find('video')[0].play();
        }

        if($('.js_slider-fw .slick-active').find('iframe').length){
            player.playVideo();
        } else {
            player.pauseVideo();
        }
    });


    $('.js_slider-fw').slick(getSliderFWSettings());

    function getSliderFWSettings(){
        return {
            slidesToShow:1,
            slidesToScroll:1,
            arrows: true,
            dots: true,
            focusOnSelect:true,
            autoplay: false,
            responsive:[
                {
                    breakpoint: 800,
                    settings:{
                        dots: false
                        //swipe: true
                    }
                }
            ]
        }
    }
});