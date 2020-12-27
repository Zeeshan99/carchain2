$(function() {
    'use strict';
    var owl = $(".find-car .owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        lazyLoad : true,
        navigation : true,
        loop:false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            }
        }
    });
});