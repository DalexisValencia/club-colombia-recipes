(function ($) {
    $(document).ready(function () {
        const mainBanner = $(".main-recipes__banner-container.owl-carousel")
        //all recipes banner carousel 
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
        //Detail

        //Play button
        const playBtn = $(".ingredients-video__play");
        
        if(playBtn){
            playBtn.on("click", function(){
                var image = $(".ingredients-video__cover");
                var iframe = $(".ingredients-video__iframe");

                $(this).addClass("playing");
                image.addClass("playing");
                iframe.attr("src", iframe.attr("src")+"?autoplay=1").addClass("playing");
            });
        }

        //Gallery steps
        const gallerySteps = $(".detail-recipes__gallery.owl-carousel");
        if(gallerySteps) {
            gallerySteps.owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                navContainer: $(".detail-recipes__gallery-nav"),
                dots: true,
                dotsContainer: $(".detail-recipes__gallery-dots"),
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    }
                }
            });
        }
    });
})(jQuery);