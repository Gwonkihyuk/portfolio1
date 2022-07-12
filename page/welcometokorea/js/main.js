$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',

});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$('.searchnav').hide();

$('.search').click(function(){
    $('.searchnav').show();
    $(this).hide();
});

$('.seachclose').click(function(){
  $('.searchnav').hide();
  $('.search').show();
})






var mySwiper = new Swiper('.swiper-container', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    autoplay: {
      delay: 3000,
    },
  });



