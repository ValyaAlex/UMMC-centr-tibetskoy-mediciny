const swiperReviews = new Swiper(".swiper", {
  direction: "horizontal",
  speed: 700,
  initialSlide: 0,
  slidesPerView: 1.2,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    550: {
      slidesPerView: 1.7,
      centeredSlides: true,

    },

    750: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      pagination: false,
    },

    1440: {
      slidesPerView: 3.2,
    },

    1700: {
      slidesPerView: 3.7,
    },
  },
});