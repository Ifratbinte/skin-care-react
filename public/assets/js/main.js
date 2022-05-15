// Preloader
$(window).on('load', function() {

    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});



//sticky scroll 
$(window).scroll(function() {

    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();


    if (scroll >= 40) {
        sticky.addClass('fixed');
        $(".socialIcon").hide();
        $('#cartId').show();
        $('#header-category').show();
        $('#category').removeClass("col-lg-1");
        $('#category').addClass("col-lg-3");
        $('#search-bar').removeClass("col-lg-7");
        $('#search-bar').addClass("col-lg-5");

    } else {
        sticky.removeClass('fixed');
        $(".socialIcon").show();
        $('#cartId').hide();
        $('#header-category').hide();
        $('#search-bar').addClass("col-lg-7");
        $('#category').removeClass("col-lg-3");
        $('#category').addClass("col-lg-1");


    }

});
//Scroll Top
$(window).scroll(
    function() {
        if ($(window).scrollTop() > 40) {
            $('.page_top').fadeIn(300);
        } else {
            $('.page_top').fadeOut(300);
        }
    });
$(function() {
    $('.page_top').click(
        function() {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        }
    );
})


// Product-quantity
$('.value-plus ').on('click', function() {
    var quantity = $(this).parent().find('.value'),
        newVal = parseInt(quantity.text(), 10) + 1;
    quantity.text(newVal);
});

$('.value-minus').on('click', function() {
    var quantity = $(this).parent().find('.value'),
        newVal = parseInt(quantity.text(), 10) - 1;
    if (newVal >= 1) quantity.text(newVal);
});


// language 
$(document).ready(function() {
    $("#country, #country1, #country2, #country3,  #country4,  #country5, #country6,  #country7, #country8, #country9, #country10, #country11,  #country12,  #country13,  #country14,  #country15, #country16, #country17, #country18, #country19,  #country20,  #country21").change(function() {
        var val = $(this).val();
        if (val == "item1") {
            $("#language, #language1, #language2, #language3,  #language4,  #language5, #language6, #language7, #language8, #language9, #language10,#language11,#language12,#language13,#language14,#language15,#language16,#language17, #language18,#language19,  #language20,  #language21").html("<option value='1'>Bangla</option>");
        } else if (val == "item2") {
            $("#language, #language1, #language2, #language3,  #language4,  #language5, #language6, #language7, #language8, #language9, #language10,#language11,#language12,#language13,#language14,#language15,#language16,#language17, #language18,#language19,  #language20,  #language21").html("<option value='2'>Hindi</option>");
        } else if (val == "item3") {
            $("#language, #language1, #language2, #language3,  #language4,  #language5, #language6, #language7, #language8, #language9, #language10,#language11,#language12,#language13,#language14,#language15,#language16,#language17, #language18,#language19,  #language20,  #language21").html("<option value='3'>Japanese</option>");
        } else if (val == "item4") {
            $("#language, #language1, #language2, #language3,  #language4,  #language5, #language6, #language7, #language8, #language9, #language10,#language11,#language12,#language13,#language14,#language15,#language16,#language17, #language18,#language19,  #language20,  #language21").html("<option value='4'>English</option>");
        }

    });
});



$(document).ready(function() {
    $("[data-trigger]").on("click", function(e) {
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('.body-container').addClass("overlay");
    });


    $(".btn-close, .btn-close1, .body-container").click(function(e) {
        $(".mobile-offcanvas, .mobile-offcanvas1").removeClass("show");
        $('.body-container').removeClass("overlay");
    });


});

// slick slider

$('.ta-scroll-slider').slick({
    // autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 5,
    responsive: [{
            breakpoint: 1000, // tablet breakpoint
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 778, // tablet breakpoint
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 600, // mobile breakpoint
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },

    ]

});

// about testimonial slider start

$('.about-testimonial-area .owl-carousel').owlCarousel({
    mouseDrag: false,
    loop: true,
    margin: 2,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 3
        }
    }
});

$('.owl-prev').click(function() {
    $active = $('.owl-item .item.show');
    $('.owl-item .item.show').removeClass('show');
    $('.owl-item .item').removeClass('next');
    $('.owl-item .item').removeClass('prev');
    $active.addClass('next');
    if ($active.is('.first')) {
        $('.owl-item .last').addClass('show');
        $('.first').addClass('next');
        $('.owl-item .last').parent().prev().children('.item').addClass('prev');
    } else {
        $active.parent().prev().children('.item').addClass('show');
        if ($active.parent().prev().children('.item').is('.first')) {
            $('.owl-item .last').addClass('prev');
        } else {
            $('.owl-item .show').parent().prev().children('.item').addClass('prev');
        }
    }
});

$('.owl-next').click(function() {
    $active = $('.owl-item .item.show');
    $('.owl-item .item.show').removeClass('show');
    $('.owl-item .item').removeClass('next');
    $('.owl-item .item').removeClass('prev');
    $active.addClass('prev');
    if ($active.is('.last')) {
        $('.owl-item .first').addClass('show');
        $('.owl-item .first').parent().next().children('.item').addClass('prev');
    } else {
        $active.parent().next().children('.item').addClass('show');
        if ($active.parent().next().children('.item').is('.last')) {
            $('.owl-item .first').addClass('next');
        } else {
            $('.owl-item .show').parent().next().children('.item').addClass('next');
        }
    }
});
// about testimonial slider end

// Hero Section owl- carousel
var hero_s = $(".hero-slider");
hero_s.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="fa fa-angle-left"></i></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    onInitialized: function() {
        var a = this.items().length;
        $("#snh-1").html("<span>1</span><span>" + a + "</span>");
    }
}).on("changed.owl.carousel", function(a) {
    var b = --a.item.index,
        a = a.item.count;
    $("#snh-1").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");

});

hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
$(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');

// category Page
$('.category-page-area .left-bottom-part .owl-carousel').owlCarousel({

    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    items: 1,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2,
        },
        991: {
            items: 3
        },
        992: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 1
        },
        1500: {
            items: 1
        },
        1800: {
            items: 1
        }
    }
});

// Product Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 20,
    nav: true,
    slideSpeed: 500,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2,
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
})

// category page
// Load More
$(document).ready(function() {
    $(".load-more-content").slice(0, 16).show();
    $(".loadMore-btn").on("click", function(e) {
        e.preventDefault();
        $(".load-more-content:hidden").slice(0, 4).slideDown();
        if ($(".load-more-content:hidden").length == 0) {
            $(".loadMore-btn").text("No Content").addClass("noContent");
        }
    });

})

// blog page
// Load More
$(document).ready(function() {
    $(".load-more-content1").slice(0, 3).show();
    $(".loadMore-btn1").on("click", function(e) {
        e.preventDefault();
        $(".load-more-content1:hidden").slice(0, 3).slideDown();
        if ($(".load-more-content1:hidden").length == 0) {
            $(".loadMore-btn1").text("No Content").addClass("noContent");
        }
    });

})

//category range
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 5000],
        slide: function(event, ui) {
            $("#amount").val("৳" + ui.values[0] + "  - ৳ " + ui.values[1]);
        }
    });
    $("#amount").val("৳ " + $("#slider-range").slider("values", 0) +
        " - ৳ " + $("#slider-range").slider("values", 1));
});

// tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


$("#zoom-img").elevateZoom({
    responsive: true,
    gallery: 'thumbaa-img',
    cursor: 'pointer',
    galleryActiveClass: 'active',
    imageCrossfade: true,
    cursor: "crosshair"
});



// Bounce Animation
$("#bouncebutton").click(function() {
    const element = document.querySelector('.bouncebutton');
    element.classList.add('animated', 'bounce');
    setTimeout(function() {
        element.classList.remove('bounce');
    }, 2000);
});


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// elevateZoom (product details)
$("#zoom-img").elevateZoom({
    gallery: 'thumbaa-img',
    cursor: 'pointer',
    galleryActiveClass: 'active',
    imageCrossfade: true,
    cursor: "crosshair"
});

//Google capcha
function get_action(form) {
    var v = grecaptcha.getResponse();
    if (v.length == 0) {
        document.getElementById('captcha').innerHTML = "You can't leave Captcha Code empty";
        return false;
    } else {
        document.getElementById('captcha').innerHTML = "Captcha completed";
        return true;
    }
}