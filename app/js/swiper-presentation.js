document.addEventListener('DOMContentLoaded', function(){
    const presenSlide = new Swiper('#js-swiper-presentation', {
        direction: 'horizontal',
        loop: true,
        speed: 4000,
        setWrapperSize: true,
        slidesPerView: 1,
        centeredSlides: true,
        longSwipesMs: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true
        },
    });

    const presenText = new Swiper('#js-swiper-text', {
        direction: 'horizontal',
        loop: true,
        speed: 4000,
        //setWrapperSize: true,
        slidesPerView: 1,
        longSwipesMs: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true
        },
    });
});