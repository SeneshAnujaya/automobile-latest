$(document).ready(function () {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: ".slider-nav"
    });
  
    $(".slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      focusOnSelect: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 5
          }
        }
      ]
    });
  });

// MOBILE MENU ================================================
$(document).ready(function () {
  $('.menu-btn').click(function(event) {
      $('.navbar-main').toggleClass('open-nav');
  });
  $('.nav-link').click(function(){
      $('.navbar-main').removeClass('open-nav');
  });


});