$(document).ready(function () {
  //event menu wrapper
  $(".event-menu").wrap("<div id='sticky-wrapper'></div>");

  //event menu links scroll
  $(".event-menu-links a, .review-area a").click(function () {
    var excess_height = $('.event-menu').outerHeight() + $('header').outerHeight() + 5;
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - excess_height
    }, 750);
  });
});

$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});

//Event menu sticky function
function sticky_relocate() {
  var event_height = $('.event-menu').outerHeight();
  var nav_height = $('header').outerHeight() + 5;
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-wrapper').offset().top;
  if (window_top > div_top) {
    $('.event-menu').addClass('fixed');
    $('.event-menu').css("top", nav_height);
    $('#sticky-wrapper').css("height", event_height);
  } else {
    $('.event-menu').removeClass('fixed');
    $('.event-menu').css("top", 0);
  }
}

