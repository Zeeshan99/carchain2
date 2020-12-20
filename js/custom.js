$(document).ready(function(){

    //Trigger Owl Carousel
    var owl = $(".owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        lazyLoad : true,
        navigation : true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            992 : {
                items: 4
            }
        }
    });
    $('.section_1 .owl-carousel .owl-item').on('click', function(event) {
        var index = $(this).index();
        
        $(`.section_1 .main-images .image:eq(${index})`).addClass('active').siblings().removeClass("active");
    });

    $('.section_1 .main-images .full-width').on("click", function() {
        var image = $(this).parent(".image").find(".inner-img");
        console.log();
        $('.image-full-width-container').addClass('show');
        $('.image-full-width-container .image').attr('src', image.attr('src'));
    });

    $('.image-full-width-container').on("click", function() {
        $(this).removeClass('show');
    });
    $('.image-full-width-container .image').on("click", function(e) {
        e.stopPropagation();
    });



    /** */




});