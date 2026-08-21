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
      pagination: false,
    },

    1700: {
      slidesPerView: 3.7,
      pagination: false,
    },
  },
});

const swiperRecommendations = new Swiper(".swiper-recommendations", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 15,

  pagination: {
    el: ".recommendations__pagination-container .swiper-pagination",
    type: 'fraction',
    clickable: true,
  },

  navigation: {
    nextEl: ".recommendations-next",
    prevEl: ".recommendations-prev",
  },

  // a11y:
  //   false,
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true
  // },

  // breakpoints: {

  //   400: {
  //     slidesPerView: 2,
  //     slidesPerGroup: 2,
  //     spaceBetween: 20
  //   },

  //   700: {
  //     slidesPerView: 2,
  //     slidesPerGroup: 2,
  //     spaceBetween: 35
  //   },

  //   1450: {
  //     slidesPerView: 3,
  //     slidesPerGroup: 3,
  //     spaceBetween: 35
  //   },

  //   1600: {
  //     slidesPerView: 3,
  //     slidesPerGroup: 3,
  //     spaceBetween: 50
  //   }
  // }
});