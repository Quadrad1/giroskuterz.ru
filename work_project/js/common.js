$(".menu-btn").click(function(){
  $(".menu_2").toggle(200);
});
$(function(){
     $("#bgndVideo").YTPlayer();
   });

   $(".section_content__slider").slick({
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     autoPlay:true,
     autoplaySpeed: 3000
   });


  $('.unslick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.section_content__slider',
  focusOnSelect: true
});

$(".gallery-slider").slick({
  dots: false,
  speed: 300,
  infinite: true,
  slidesToShow: 1,
  autoPlay:true,
  autoplaySpeed: 3000
});
$(".nav-slider").slick({
  slidesToShow: 6,
  infinite: true,
  slidesToScroll: 1,
  asNavFor: '.gallery-slider',
  focusOnSelect: true
});
