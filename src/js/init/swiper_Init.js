import Swiper, {Navigation,Pagination,EffectCoverflow,Autoplay, Parallax} from 'swiper';


    const heroSlider = new Swiper('.hero__slider', {
        modules: [Navigation,Autoplay, Parallax],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 300,

        parallax: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.slider-main__btn-next',
            prevEl: '.slider-main__btn-prev',
        },
    })

    const promoSlider = new Swiper('.promo-slider', {
        modules: [Navigation,Pagination],
        direction: 'horizontal',
        loop: false,
        spaceBetween: 60,
        speed: 300,

        navigation: {
            nextEl: '.promo-slider-next',
            prevEl: '.promo-slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            920: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 60
            }
        },

        pagination: {
            el: '.promo-slider-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },

    })
    const aboutSlider = new Swiper('.about__slider', {
        modules: [Navigation,Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '.about__slider-next',
            prevEl: '.about__slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            539: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        },
        pagination: {
            el: '.about-slider-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
    })
    const reviewsSlider = new Swiper('.reviews__slider', {
        modules: [Navigation,Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '.swiper-button-prev.review-next',
            prevEl: '.swiper-button-prev.review-prev',
        },
        pagination: {
            el: '.review-slider-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        },
    })
