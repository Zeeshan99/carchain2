$(function() {
    'use strict';
    //For Car Card
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

    /**
     * LoadSliderRange  fucntion
     * To get `data-min` and `data-max` from the input and put them into this code
     */
    loadSliderRange("#year-range");
    loadSliderRange("#km-range");
    loadSliderRange("#radius-range");
    loadSliderRange("#price-range");
    function loadSliderRange(sliderID) {
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

    //For All Selectbox & inputs
    $(".find-car .filter-section select").on('change', function() {
        let value = $(this).val();
        if (value == 0) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    });
    $(".find-car .filter-section input").on('input', function() {
        let value = $(this).val();
        if (value.trim() == '') {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    });


    //For Location And Radius
    $(".find-car .filter-section .location").on('input', function() {
        let value = $(this).val();
        if (value.trim() == '' ) {
            $(".find-car .filter-section .linkedToLocation").removeClass("active");
        } else {
            $(".find-car .filter-section .linkedToLocation").addClass("active");
        }
    });
    
    
    //For Make Selectbox
    $(".find-car .filter-section .makeSelection").on('change', function() {
        let value = $(this).val();
        if (value == 0) {
            $(".find-car .filter-section .linkedToMake,.find-car .filter-section .linkedToModel").removeClass("active");
            $(".find-car .filter-section .linkedToMake select,.find-car .filter-section .linkedToModel select").val("0").removeClass('selected');
        } else {
            $(".find-car .filter-section .linkedToMake").addClass("active");
        }
    });
    //For Model Selectbox
    $(".find-car .filter-section .modelSelection").on('change', function() {
        let value = $(this).val();
        if (value == 0) {
            $(".find-car .filter-section .linkedToModel").removeClass("active");
            $(".find-car .filter-section .linkedToModel select").val("0").removeClass('selected');
        } else {
            $(".find-car .filter-section .linkedToModel").addClass("active");
        }
    });
    
});