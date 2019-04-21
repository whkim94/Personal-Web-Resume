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


// Progress animations is triggered when viewer scrolls down into certain section

$(document).on('scroll', function() {

  // Navbar background is triggered when scrolled down, and disappears when scrolls to top.
  if($(this).scrollTop() > $('nav').position().top + 150){
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }

  // Progress animation is triggered when scrolled down, and disappears when scrolls up.
  if($(this).scrollTop() >= $('#skill').position().top){
    $('.done').addClass('animation');
  } else {
    $('.done').removeClass('animation');
  }
});




// Circular progress animation for spoken language

var count = $(('#count'));
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 5000,
  easing: 'linear',
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});

var s = Snap('#animated');
var progress = s.select('#progress');

progress.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,251.2, function( value ) {
    progress.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);
