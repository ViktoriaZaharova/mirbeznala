$(document).ready(function(){
    $(".new-clients-slider").owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 30,
        responsive : {
            0 : {
                items : 1,

            },
            576 : {
                items : 2,
            },
            992 : {
                items : 3,
                margin: 0,
            },
            1200 : {
                items : 4,
            }
        }
    });
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();