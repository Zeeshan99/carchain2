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

    loadSliderRange("#year-range");
    loadSliderRange("#km-range");
    loadSliderRange("#price-range");
    
    function loadSliderRange(sliderID) {
        console.log(sliderID);
        let parent = $(sliderID).parents(".range-box");
        let minEle = parent.find(".min-txt");
        let maxEle = parent.find(".max-txt");
        let min = parseInt(minEle.data("min"));
        let max = parseInt(maxEle.data("max"));

        minEle.val(min);
        maxEle.val(max);
        $(sliderID).slider({
            range: true,
            min: min,
            max: max,
            values: [ min, max],
            slide: function( event, ui ) {
                parent.find(".min-txt").val(ui.values[ 0 ]);
                parent.find(".max-txt").val(ui.values[ 1 ]);
            }
        });
    }


    $('#filterAccordion').collapse({
        toggle: false
    })

});