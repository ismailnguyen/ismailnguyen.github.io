$(document).ready(function() {

    // Scroll animations
    AOS.init();

    $('.js-scrollTo').click(function() {
        var page = $(this).attr('href');
        var speed = 750; // milliseconds

        $('html, body').animate(
            { 
                scrollTop: $(page).offset().top 
            }
            , speed
        );
        
        return false;
    });

    // Burger menu
    $('.navbar-burger').click(function() {
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    // Carousel
    bulmaCarousel.attach('#works-carousel', {
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        loop: true,
        navigation: true,
        pagination: false,
        navigationSwipe: true
    });

    // Modal
    $('.modal-close, .modal-background').click(function () {
        $('.modal').removeClass('is-active');
        $('html').removeClass('is-clipped');
    });

    $('.work-item').click(function () {
        $('#' + $(this).data('target')).addClass('is-active');
        $('html').addClass('is-clipped');
    });
});