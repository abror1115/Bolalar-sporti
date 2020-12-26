var askButton = document.querySelector("#ask-question");
var overlay = document.querySelector("#overlay");
var modalWindows = document.querySelector("#modal");
var modalClose = document.querySelector("#modal-close");
var variables = document.querySelector("#burger");
var body = document.querySelector("body");
var mobile = document.querySelector("#mobile-burger");
 
askButton.addEventListener("click",function() {
  overlay.classList.toggle("visible");
  modalWindows.classList.toggle("opened");
  body.classList.toggle("no-scroll")

});

overlay.addEventListener("click", function(){
  overlay.classList.remove("visible");
  modalWindows.classList.remove("opened")
});

variables.addEventListener("click", function(){
  tablet.classList.toggle("opened")
});

mobile.addEventListener("click", function (){
  tablet.classList.toggle("opened")
 body.classList.toggle("no-scroll")
});


var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 85,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

var mySwiper = new Swiper('.swiper-container2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 32,
  centeredSlides: true,

  
  pagination: {
    el: '.swiper-pagination',
  },

});

var mySwiper = new Swiper('.swiper-container2-mobile', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,

  
  pagination: {
    el: '.swiper-pagination',
  },

});

var mySwiper = new Swiper('.swiper-container3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4.6,
  spaceBetween: 32,
  centeredSlides: true,

  
  pagination: {
    el: '.swiper-pagination',
  },

});

var mySwiper = new Swiper('.swiper-container3-mobile', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 32,
  centeredSlides: true,

  
  pagination: {
    el: '.swiper-pagination',
  },

});

var mySwiper = new Swiper('.swiper-container3-tablet', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2.7,
  spaceBetween: 32,
  centeredSlides: true,

  
  pagination: {
    el: '.swiper-pagination',
  },

});



