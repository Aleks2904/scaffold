document.addEventListener('DOMContentLoaded', function(){
    const presenSlide = new Swiper('#js-swiper-presentation', {
        direction: 'horizontal',
        loop: true,
        speed: 10000,
        setWrapperSize: true,
        slidesPerView: 1,
        centeredSlides: true,
        longSwipesMs: 500,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
            reverseDirection: true
        },
    });
});