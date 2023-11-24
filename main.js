
// responsive menu

$(document).ready(function () {
    $(".humberger i").click(function () {
      $(this).toggleClass("fa-times");
      $(".menu").toggleClass("active");
    });
  });

  
//   slider


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    smartSpeed: 400,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})