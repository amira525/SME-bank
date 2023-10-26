$(document).ready(function () {
    'use strict';
    $('.main-navbar .navbar .navbar-nav .nav-item').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
  });
  $('.main-navbar .navbar .navbar-nav .nav-item a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
    }, 500);
   
});
    //slick slider
    $('.products-slider').slick({
      rtl: document.dir === "rtl" ? true : false,
      slidesToShow: 4,
      prevArrow: '<span><i class="fas fa-chevron-right"></i></span>',
      nextArrow: '<span><i class="fas fa-chevron-left"></i></span>',
      responsive: [{
 
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
   
      }, {
   
        breakpoint: 300,
        settings: "unslick" // destroys slick
   
      }]
  });
});

//change the image 
window.addEventListener('load',()=>{
    uploadImg();
  
  })
  function uploadImg() {
    const image_input = document.querySelector(".input-image");
    image_input.addEventListener("change", function() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#img-profile").style.backgroundImage = `url(${uploaded_image})`;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
        
      });
      reader.readAsDataURL(this.files[0]);
    });
  }
  document.querySelector(".icon-search").addEventListener('click', ()=>{
    document.querySelector("#search").style.disPlay = "block";
    console.log("hi")
  });
  document.querySelector(".chat button").addEventListener('click' , ()=>{
    console.log("-00000")
    document.querySelector(".massage-chat").style.opacity=1;
  })    