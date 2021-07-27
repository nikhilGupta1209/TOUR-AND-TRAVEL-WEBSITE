 let searchBtn = document.querySelector('#search-btn');
 let searchBar = document.querySelector('.search-bar-container');
 let formBtn = document.querySelector('#login-btn');
 let loginForm = document.querySelector('.login-container');
 let loginFormClose = document.querySelector('#form-close');
 let menu = document.querySelector('#menu-bar');
 let navbar = document.querySelector('.navbar');
 let videoBtn = document.querySelectorAll('.vid-btn');


 window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 }

 searchBtn.addEventListener('click', () => {
     searchBtn.classList.toggle('fa-times');
     searchBar.classList.toggle('active');
 });

 menu.addEventListener('click', () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});

 formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
 });

 loginFormClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
 });
 
 videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=> {
         document.querySelector('.controls .active').classList.remove('active');
         btn.classList.add("active");
         let src  = btn.getAttribute('data-src');
         document.querySelector('#video-slider').src = src;
      }); 
 });


 var swiper = new Swiper(".review-slider", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
     loop: true,
   },
 });

 var swiper = new Swiper(".brand-slider", {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });

 document.getElementById("ss").style.marginBottom = "15px";