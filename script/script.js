// Prevents user from right click and drag

$(document).ready(function() {
  $(document).bind("contextmenu", function () {
    return false;
  });

  $('img').bind("contextmenu", function () {
    return false;
  });

  $('img').bind("selectstart", function () {
    return false;
  });
});
document.oncontextmenu = function () { return false; }
document.onselectstart = function () { return false; }

// Loads animation triggered once website is loaded

$(window).on('load',function() {
  $('.preloader').addClass('complete');
});


// Progress animations is triggered when viewer scrolls down into skills section

$(document).on('scroll', function() {
  // var scrollBottom = $(window).height() + $(this).scrollTop();

  if($(this).scrollTop() >= $('#skill').position().top){
    $('.done').addClass('animation');
  }
})