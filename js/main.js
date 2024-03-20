(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("imageContainer");
    const images = container.querySelectorAll(".effect-julia.item");
    const galleryWidth = container.offsetWidth;
    const imageWidth = images[0].offsetWidth;
    const totalImages = images.length;

    let scrollAmount = 0;

    container.style.scrollBehavior = "smooth";

    function scrollGallery(direction) {
        const maxScroll = (totalImages * imageWidth) - galleryWidth;
        if (direction === "left") {
            scrollAmount -= imageWidth * 4;
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
        } else {
            scrollAmount += imageWidth * 4;
            if (scrollAmount > maxScroll) {
                scrollAmount = maxScroll;
            }
        }
        container.scrollLeft = scrollAmount;
    }

    // Left and right arrow click event listeners
    document.getElementById("scrollLeft").addEventListener("click", function() {
        scrollGallery("left");
    });

    document.getElementById("scrollRight").addEventListener("click", function() {
        scrollGallery("right");
    });
});


