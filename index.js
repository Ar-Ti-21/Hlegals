// script for TABS//
$(function () {
    $(".experience__tabs").tabs();
});

$(document).ready(function () {
    $('.experience__slider').slick(settingSliderExperience);
})

const settingSliderExperience = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,

    //   responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //
    //   {
    //     breakpoint: 1200,
    //     settings: 'unslick'
    //   }
    // ]

}


$(document).ready(function () {
    $('.team__slider').slick(settingSliderTeam);
})

const settingSliderTeam = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,

    //   responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //
    //   {
    //     breakpoint: 1200,
    //     settings: 'unslick'
    //   }
    // ]

}

//
// $(window).on('resize', function () {
//     if ($(window).width() > 320 && !$('.homepage-team__slider').hasClass('slick-initialized')) {
//         $('.homepage-team__slider').slick(settingSliderTeam);
//     }
//     if ($(window).width() >= 1600 && $('.homepage-team__slider').hasClass('slick-initialized')) {
//         $('.homepage-team__slider').slick('unslick');
//     }
// });





// script_change-language-page //
var header = document.getElementById("contacts__cng-lang");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// script_change-language-page //
// var header = document.getElementById("contacts-mobile__cng-lang");
// var btns = header.getElementsByClassName("btnMobile");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }


// script_nav-links-desktop get active current nav link//
var header = document.getElementById("header__nav-links");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("actives");
        current[0].className = current[0].className.replace(" actives", "");
        this.className += " actives";
    });
}





