const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  speed: 600,
  slidesPerView: 3,
  loadOnTransitionStart: true,

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

const iconFavourite = document.querySelectorAll('.icon__favourite')

iconFavourite.forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle('active')
  })
})