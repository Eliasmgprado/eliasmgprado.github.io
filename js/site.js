// var OFFSET_TOP = 50;

// $(window).scroll(function () {
//     if ($('.navbar').length) {
//         if ($('.navbar').offset().top > OFFSET_TOP) {
//             $('.scrolling-navbar').removeClass('navbar-dark');
//             $('.scrolling-navbar').addClass('navbar-light');
//         } else {
//             $('.scrolling-navbar').removeClass('navbar-ligh');
//             $('.scrolling-navbar').addClass('navbar-dark');
//         }
//     }
// });



function toggleNavbarTextColor () {
    if ($('.navbar').length) {
        if ($('.navbar').css('background-image') != 'none') {
            $('.scrolling-navbar').removeClass('navbar-dark');
            $('.scrolling-navbar').addClass('navbar-light');
        } else {
            $('.scrolling-navbar').removeClass('navbar-ligh');
            $('.scrolling-navbar').addClass('navbar-dark');
        }
    }
}

$(window).on( "load", toggleNavbarTextColor);
$(window).scroll(toggleNavbarTextColor)

// $('.nav-link').click(function(){
//     if ($(this).hasClass('active') || $(this).parent().hasClass('active')) {
//         if($(this).hasClass('nav-link')) {
//             $(this).parent().removeClass('active')
//         } else {
//             $(this).removeClass('active');
//         };
//     } else {
//         $('.navbar-nav').find('.nav-item').each(function() {
//             $(this).removeClass('active');
//         });
//         if($(this).hasClass('nav-link')){
//             $(this).parent().addClass('active');
//         } else {
//             $(this).addClass('active');
//         };
//     };
// })

// $('.nav-link').click(function(){
//     if ($(this).parent().hasClass('active')) {
//         $(this).parent().removeClass('active')
//     } else {
//         $('.navbar-nav').find('.nav-item').each(function() {
//             $(this).removeClass('active');
//         });
//         $(this).parent().addClass('active');
//     };
// });

$('.nav-link').hover(function(){
    $(this).parent().addClass('active');
}, function() {
    if (!$(this).parent().hasClass('dropdown')) {
        $(this).parent().removeClass('active')
    };
});

$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    $(this).removeClass('active')
});

function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
  };

$('li.dropdown').click(function(e){
    console.log('out');
    e.preventDefault();
    if ($(e.target).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    } else {
        $(this).addClass('active');
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    };
});