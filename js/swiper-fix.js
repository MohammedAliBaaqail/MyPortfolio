// Fix for Swiper carousel order
document.addEventListener('DOMContentLoaded', function() {
  // Destroy the current swiper instance if it exists
  if (window.swiper) {
    window.swiper.destroy(true, true);
  }
  
  // Re-initialize with specific settings to maintain order
  window.swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    initialSlide: 0,  // Start from the first slide
    loop: false,      // Disable loop to maintain order
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 }
    }
  });
});
