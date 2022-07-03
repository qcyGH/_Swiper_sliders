const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 600,
  slidesPerView: 4,
  loadOnTransitionStart: true,
  autoHeight: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    }
  },

  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false
  // },

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    invert: false,
  },


  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

const iconFavourite = document.querySelectorAll('.favourite__button')

iconFavourite.forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle('active')
  })
})