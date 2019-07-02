//import 'flexboxgrid'
import './kapital.scss'
import './js/slick'

import './img/logo.png'
import './img/logo.svg'
import './img/Rectangle2.1.png'
import './img/Rectangle2.2.png'
import './img/Adv-02.png'
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.js-slider-events-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    vertical: true,
    dots: false,
    arrow: false,
    centerMode: false,
    focusOnSelect: false
});
