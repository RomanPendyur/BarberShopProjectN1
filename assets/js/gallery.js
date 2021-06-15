'use strict'
$(document).ready(function() {
    $('.gallery-slider-one').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        asNavFor: ".gallery-slider-two"
    });

    $('.gallery-slider-two').slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: ".gallery-slider-one",
        initialSlide: 0,
        centerMode: true,
    });
})