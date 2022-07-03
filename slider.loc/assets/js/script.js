const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,
  loadOnTransitionStart: true,

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    invert: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

const swiperObject = document.querySelector('.swiper')
const paginationObject = document.querySelector('.swiper-pagination')
const swiperButtonPrev = document.querySelector('.swiper-button-prev')
const swiperButtonNext = document.querySelector('.swiper-button-next')

swiperObject.addEventListener('mouseover', () => {
    paginationObject.style.opacity = 1
    swiperButtonPrev.style.opacity = 1
    swiperButtonNext.style.opacity = 1
});
swiperObject.addEventListener('mouseout', () => {
    paginationObject.style.opacity = 0
    swiperButtonPrev.style.opacity = 0
    swiperButtonNext.style.opacity = 0
});