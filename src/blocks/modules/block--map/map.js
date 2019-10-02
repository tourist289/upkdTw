import $ from 'jQuery';

$(document).ready(function () {


    $('.js-map__links-list *[data-href]').on('click', function(){
        let mapId = $(this).attr('data-href');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $(`.map__content div`).removeClass('active')
        $(`.map__content div[data-map=${mapId}]`).addClass('active');

    })

});


