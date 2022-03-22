const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.3,
    spaceBetween: 100,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 480px
      0:{
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 1.2,
        spaceBetween: 50,
      },
      991:{
        slidesPerView: 1.8,
        spaceBetween: 100,
      },
      1144: {
        slidesPerView: 2.3
      },
    }
  });