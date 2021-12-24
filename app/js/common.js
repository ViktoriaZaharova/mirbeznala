$(document).ready(function () {
    $(".new-clients-slider").owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,

            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
                margin: 0,
            },
            1200: {
                items: 4,
            }
        }
    });

    $('.staff-slider').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            576: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    $('.reviews-slider').owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 2,
                margin: 20,
            },
            1200: {
                items: 3,
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
        $('.block_hover').slideUp().parent().removeClass('in');
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

// tabs
$(document).ready(function ($) {
    $('.tabs li a').click(function (e) {
        e.preventDefault();
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').removeClass('active');

        var selectTab = $(this).attr("href");

        $(selectTab).addClass('active');
    });
});

