(function ($) {
    $(document).ready(function () {
        const mainBanner = $(".main-recipes__banner-container.owl-carousel")
        //jquery base
        if(mainBanner) {
            mainBanner.owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                navContainer: $(".main-recipes__banner-nav"),
                dots: true,
                dotsContainer: $(".main-recipes__banner-dots"),
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        navContainer: "",
                    },
                    600: {
                        items: 1,
                        nav: false,
                        navContainer: "",
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        navContainer: $(".main-recipes__banner-nav"),
                        dots: true,
                        dotsContainer: $(".main-recipes__banner-dots"),
                    }
                }
            });
        }
    });
})(jQuery);