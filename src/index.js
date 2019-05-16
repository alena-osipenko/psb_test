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
            1200: {
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
});

