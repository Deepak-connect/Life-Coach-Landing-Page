let header = document.querySelector(".header");
window.addEventListener('scroll',()=>{
    let top = window.scrollY;
    if(top>=10){
        header.classList.add('header-dark');
    }
    else{
        header.classList.remove('header-dark');
    }
})

// swiper js code
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });