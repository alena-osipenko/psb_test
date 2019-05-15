import 'owl.carousel/dist/assets/owl.carousel.css';
import './scss/main.scss';
import 'bootstrap';
import 'owl.carousel';

"use strict";

console.log('Hello, world!');

$(document).ready(function () {
    $('.steps-carousel').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:8,
        autoWidth: true,
        responsive:{
            600: {
                margin:24,
                items: 3
            },
                1280:{
                center: false,
                responsiveClass:true,
                loop:false,
                margin:24,
                items: 4
            }
        }
    });

    $('.fsc-carousel').owlCarousel({
        margin:16,
        items: 5,
        dots: true,
        loop: true,
        responsiveClass:true,
        navText: ['<svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 13L11 25" stroke="#646478" stroke-width="2"></svg>', '<svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 13L1 25" stroke="#646478" stroke-width="2"></svg>'],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });


    $(".fs-carousel").length && function () {
        var e = 0;

        function t() {
            $(".fs-carousel .owl-item.active .fs-carousel__item").each(function () {
                e = $(this).attr("data-color")
            }), $(".fs").css({background: e})
        }

        $(".fs-carousel").owlCarousel({
            // mouseDrag: !true,
            margin: 0,
            items: 1,
            loop: true,
            dots: true,
            autoplay: !0,
            autoplayHoverPause: !0,
            navText: ['<svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 13L11 25" stroke="#646478" stroke-width="2"></svg>', '<svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 13L1 25" stroke="#646478" stroke-width="2"></svg>'],
            onInitialized: function () {
                t(), function () {
                    $(".fs-carousel .owl-dots").wrap('<div class="owl-scene" />');
                    var t = 0, e = $(".owl-dot");
                    e.each(function (e) {
                        t += parseInt($(this).outerWidth() + 24)
                    }), $(".fs-carousel .owl-dots").css("width", t), 5 < e.length && e.eq(4).addClass("last_etc")
                }()
            },
            onTranslated: function () {
                t()
            },
            // responsive: {0: {nav: !1}, 1024: {nav: !0}}
        }).on("changed.owl.carousel", function (e) {
            ++e.page.index;
            var t = e.page.index, a = 0, i = $(".fs-carousel .owl-dot.active"), n = $(".fs-carousel .owl-dot");
            n.each(function (e) {
                a += parseInt($(this).outerWidth() + 24)
            }), $(i).hasClass("last_etc") && 5 < n.length && (n.removeClass("first_etc last_etc"), $(i).removeClass("last_etc").next().addClass("last_etc"), n.eq(t - 5).next().addClass("first_etc").prev().removeClass("first_etc"), $(".fs-carousel .owl-dots").css("left", "+=-30")), $(i).hasClass("first_etc") && 5 < n.length && ($(i).removeClass("first_etc").prev().addClass("first_etc"), n.eq(t + 3).prev().addClass("last_etc").next().removeClass("last_etc"), $(".owl-dots").css("left", "+=30")), $(i).index() === n.length - 1 && 5 < n.length && ($(".fs-carousel .owl-dots").css("left", -(a - 152)), n.removeClass("last_etc")), $(i).index() === n.length - 1 && 5 < n.length ? ($(i).removeClass("last_etc"), $(".fs-carousel .owl-dots").css("left", -(a - 152)), n.eq(t - 5).addClass("first_etc").next().removeClass("first_etc")) : 0 === $(i).index() && 5 < n.length && ($(".fs-carousel .owl-dots").css("left", "0"), n.removeClass("first_etc last_etc"), n.eq(4).addClass("last_etc"))
        })
    }()
});
//
// $(function () {
//
// })
