
$(function() {
    "use strict";

    // Global elements reused throughout
    var nav = $("#nav"),
        stick = $(".stick"),
        navIcon = $(".nav-icon"),
        mobileNav = $(".mobile-nav"),
        workWithUs = $("#workwithus"),
        vMidEle = $(".v-mid");

    var body = $("body");

    // ------------
    // All Functions to initialize on document ready
    // ------------
    function arrowDown() {
        $(".arrow-down").on("click", function() {
            var banner = $(this).parent().height();
            $("html, body").animate({
                scrollTop: banner
            }, 250);
            return false;
        });
    }
    arrowDown(); // Initialize arrowDown on document ready

    function mobileStick() {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 10) {
            nav.addClass("mobile-stick").addClass("stuck");
            navIcon.addClass("scrolled");
        } else {
            nav.removeClass("mobile-stick").removeClass("stuck");
            navIcon.removeClass("scrolled");
        }
    }
    mobileStick(); // Initialize mobileStick on document ready

    function navController() {
        navIcon.on("click", function() {
            body.toggleClass("open");
            if (body.hasClass("open")) {
                mobileNav.css("opacity", 1);
            } else {
                mobileNav.css("opacity", 0);
            }
            return false;
        });
        $("nav").clone().appendTo(mobileNav);
        $(".mobile-nav nav ul").removeClass("flipInX").removeClass(
            "fadeInLeft");
        mobileNav.find("i").removeClass(
            "ion-ios-arrow-right").addClass(
            "ion-ios-arrow-down");
    }
    navController(); // Initialize navController on document ready

    function mobileMenuAlts() {
        $('nav ul li').each(function() {

            var $this = $(this);
            if ($this.children('ul').length > 0) {
                $this.addClass('hasChildren');
            }

        });
        $(".mobile-nav nav ul > li.hasChildren.parent_1 > a").on(
            "click",
            function() {
                $(this).next().toggleClass(
                    "menu-open fadeInDown");
                $(this).find("i").toggleClass(
                    "ion-ios-arrow-down").toggleClass(
                    "ion-ios-arrow-up");
                return false;
            });
        $(".mobile-nav nav ul li.hasChildren.parent_2 > a").on("click",
            function() {
                $(this).next().toggleClass(
                    "menu-open fadeInDown");
                $(this).find("i").toggleClass(
                    "ion-ios-arrow-down").toggleClass(
                    "ion-ios-arrow-up");
                return false;
            });
    }
    mobileMenuAlts(); // Initialize mobileMenuAlts on document ready & Always after navController()

    $("nav .nav-btn").on("click", function() {
        workWithUs.fadeIn();
        return false;
    });

    // ------------
    // $(window) scroll - Actions to take on scroll
    // ------------
    $(window).on("scroll", function() {
        mobileStick(); // Initialize mobilestick function
    });


}); // Last Exit Bracket
