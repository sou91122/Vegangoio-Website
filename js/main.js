$(window).on('load', function () {
    var body_top = $('body');
    var nav_height = $('header').outerHeight();
    // $(body_top).css("margin-top", nav_height);
    $(this).scrollTop(0);
});

//sticky header
$(window).scroll(function () {
    var ws = $(window).scrollTop();
    var nav_height = $('header').outerHeight();
    var header_top = $('header');
    if (ws >= nav_height) {
        header_top.addClass("fixed");
    } else {
        header_top.removeClass("fixed");
    }
});

//owl carousel in mobile
$(window).resize(function () {
    owlInitialize();
});

function owlInitialize() {
    if ($(window).width() < 576) {
        $('.small-about-section').addClass("owl-carousel");
        $('.small-about-section.owl-carousel').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            items: 3,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                }
            }
        });
    } else {
        $('.owl-carousel').owlCarousel('destroy');
        $('.small-about-section').removeClass("owl-carousel");
    }
}


$(document).ready(function () {
    
    //Tooltip init
    $('[data-toggle="tooltip"]').tooltip()

    //Initialize owl
    owlInitialize();

    //navbar toggle
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('bg-white');
    });

    //owl carousel
    $('.testimonial-carousel').owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        responsiveClass: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: true,
        margin: 5,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1200: {
                items:2
            }
        }
    });
    $('.product-list-carousel').owlCarousel({

        items: 4,
        loop: false,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1200: {
                items: 4,
                nav: false
            }
        }
    });
    //  datepicker
    $('#datepicker').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        placeholder:true,
    });
    // gift card toggle
    $(function(){
        $(".toogle-btn").click(function () {
            $(".tab-gift-icons").toggle(1000);
        });
    });
    // gift card toggle
    // select 2
    $(function(){
        $('.select-search').select2();
        $('.select-no-search').select2({
            minimumResultsForSearch: -1
        });
    });
    // select 2
    // inner sticky banner
    var windowWidth = $(window).width();
    if (windowWidth >= 992) {
        $(function () {
            var header = $(".inner-banner .banner-form");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 88) {
                    header.addClass("sticky");
                } else {
                    header.removeClass("sticky");
                }
            });
        });
    }
    // inner sticky banner
    // accordion icon
    $(function(){
        $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".fas").addClass("fa-angle-up").removeClass("fa-angle-down");
        });
        
        $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".fas").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hide.bs.collapse', function(){
            $(this).prev(".card-header").find(".fas").removeClass("fa-angle-up").addClass("fa-angle-down");
        });
    });
    // accordion icon
});


