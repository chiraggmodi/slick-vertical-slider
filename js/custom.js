
function slickHeight() {
  var winWidth = $(window).width();
    if (winWidth > 767) {
        var sliderHeight = $('.slick-slider').height();
        console.log(sliderHeight);
        $('#slick-pager .slick-pager').css('height', sliderHeight - 60);
    }
}
$( window ).resize(function() {
    slickHeight();
});
jQuery(document).ready(function($) {
    $('.featuredPostSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        adaptiveHeight: true,
        asNavFor: '.slick-pager'
    });
    $('.slick-pager').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.pagerNavigation .bottom'),
        prevArrow: $('.pagerNavigation .top'),
        asNavFor: '.featuredPostSlider',
        focusOnSelect: true,
        vertical: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                vertical: false
            }
        }]
    });
    slickHeight();
});

