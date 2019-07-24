//import 'flexboxgrid'
import './kapital.scss'
import './js/slick'

import './img/logo.png'
import './img/logo.svg'
import './img/Rectangle2.1.png'
import './img/Rectangle2.2.png'
import './img/Adv-02.jpg'
import './img/projects-1.jpg'
import './img/projects-2.jpg'
import './img/b1.jpg'
import './img/b2.jpg'
import './img/c1.jpg'
import './img/c2.jpg'
import './img/current-graf.svg'
import './img/search.svg'


$('.js-project').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.js-slider-events-for').slick({
    asNavFor: '.slider-events__nav',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    fade: false,
    vertical: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    variableWidth: false,
    focusOnSelect: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                dots: true,
                asNavFor: null,
                vertical: false,
            }
        }
    ]
});
$('.js-slider-events-nav').slick({
    asNavFor: '.slider-events__for',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    vertical: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: false,
    focusOnSelect: true,
    verticalSwiping: true,
    centerPadding: "0px",
});



/*function slickSliderWithResize() {
    if (jQuery(window).width() < 1160) {
        $(window).on('resize orientationchange', function() {
            setTimeout(function() {
                $('.js-slider-events-for').slick('unslick');
                $('.js-slider-events-nav').slick('unslick');

                $('.js-slider-events-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    fade: false,
                    vertical: true,
                    asNavFor: '.slider-events__nav',
                    responsive: [
                        {
                            breakpoint: 1061,
                            settings: {
                                dots: true,
                                asNavFor: null,
                                vertical: false,
                            }
                        }
                    ]
                });
                $('.js-slider-events-nav').slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '.slider-events__for',
                    vertical: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                    focusOnSelect: true
                });
            }, 100)
        });
    }
}
slickSliderWithResize();*/
