//for Carusel - Slider Syncing - http://kenwheeler.github.io/slick/

$(document).ready(function () {
    $('.what-people-say__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.what-people-say__slider-nav'
    });
});

$('.what-people-say__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.what-people-say__slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 100,
    nextArrow: '<i class="fas fa-arrow-circle-right"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left"></i>',
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    // accessibility: true

});