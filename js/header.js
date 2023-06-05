var header = $(".header__inner");
var scrollChange = 100;
$(window).scroll(function () {
   var scroll = $(window).scrollTop();

   if (scroll >= scrollChange) {
      header.addClass('active');
   } else {
      header.removeClass("active");
   }
});
